const catchViolators = require('../utils/catch_violators');
const editViolatorsMap = require('../utils/edit_violators_map');
const fetchData = require('../utils/fetch_data');
const tenMinuteCheck = require('../utils/ten_minute_check');

const updateViolatorsMap = async (violatorsMap, unsuccessfulFetchArr) => {
    try {
        //returns object representation of the fetched data
        const dronePositions = await fetchData("https://assignments.reaktor.com/birdnest/drones", "XML");
    
        const timeStamp = dronePositions.data.report.capture._attributes.snapshotTimestamp;

        //returns drones that are within 100 meters from the bird nest
        const caughtViolators = catchViolators(dronePositions.data.report.capture.drone);

        if (caughtViolators.length > 0) {
            //new violators: adds to the map, fetches pilot data
            //recently seen violators: updates timeStamp and possibly closest distance
            await editViolatorsMap(violatorsMap, caughtViolators, timeStamp, unsuccessfulFetchArr);
        }

        //removes violators that have last been seen in the No Drone Zone over ten minutes ago
        tenMinuteCheck(violatorsMap);
        
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = updateViolatorsMap;