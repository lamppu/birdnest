const catchViolators = require('../utils/catch_violators.js');
const editViolatorsMap = require('../utils/edit_violators_map.js');
const fetchData = require('../utils/fetch_data.js');

const updateViolatorsMap = async (violatorsMap, unsuccessfulFetchArr) => {
    try {
        const dronePositions = await fetchData("https://assignments.reaktor.com/birdnest/drones", "XML");
    
        const timeStamp = dronePositions.data.report.capture._attributes.snapshotTimestamp;

        const caughtViolators = catchViolators(dronePositions.data.report.capture.drone);

        if (caughtViolators.length > 0) {
            await editViolatorsMap(violatorsMap, caughtViolators, timeStamp, unsuccessfulFetchArr);
        }
        
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = updateViolatorsMap;