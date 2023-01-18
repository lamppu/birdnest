const catchViolators = require('../utils/catch_violators');
const editViolatorsMap = require('../utils/edit_violators_map');
const fetchData = require('../utils/fetch_data');
const tenMinuteCheck = require('../utils/ten_minute_check');
const redoPilotFetch = require('../utils/redo_pilot_fetch');

const updateViolatorsMap = async (violatorsMap, unsuccessfulFetchArr) => {
    try {
        //returns object representation of the fetched drone data
        const dronePositions = await fetchData("https://assignments.reaktor.com/birdnest/drones", "XML");
    
        const timeStamp = dronePositions.data.report.capture._attributes.snapshotTimestamp;

        //returns 
        //  - new drones that are within 100 meters from the bird nest
        //  - drones that are detected that are already in the violatorsMap
        const caughtViolators = catchViolators(dronePositions.data.report.capture.drone, violatorsMap);

        if (caughtViolators.length > 0) {
            //new violators: adds to the map, fetches pilot data
            //recently seen violators: updates timeStamp, ndzStatus and possibly closest distance
            await editViolatorsMap(violatorsMap, caughtViolators, timeStamp, unsuccessfulFetchArr);
        }

        //removes violators that have last been seen by the equipment over ten minutes ago
        tenMinuteCheck(violatorsMap);

        //attempts to fetch pilot data where the fetch was recently unsuccessful
        if (unsuccessfulFetchArr.length > 0) {
            unsuccessfulFetchArr = await redoPilotFetch(unsuccessfulFetchArr, violatorsMap);
        }
        
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = updateViolatorsMap;