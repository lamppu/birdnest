const catchViolators = require('../utils/catch_violators.js');
const fetchData = require('../utils/fetch_data.js');

const fetchViolators = async (prevViolatorsList) => {
    const droneData = await fetchData("https://assignments.reaktor.com/birdnest/drones");
    
    const timeStamp = droneData.data.report.capture._attributes.snapshotTimestamp;
    
    const caughtViolators = catchViolators(droneData.data.report.capture.drone);
    
    return null;

}

module.exports = fetchViolators;