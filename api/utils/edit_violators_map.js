const Violator = require('../classes/violator');
const fetchPilot = require('./fetch_pilot');

const addViolators = async (violatorsMap, caughtViolators, timeStamp, unsuccessfulFetchArr) => {

    caughtViolators.forEach(async violator => {
        
        if (violatorsMap.has(violator.serialNumber)) {
            //drones that are already in the violatorsMap

            const violatorMapObj = violatorsMap.get(violator.serialNumber);

            if(violator.distance < violatorMapObj.closestDistance) {
                violatorMapObj.closestDistance = violator.distance;
            }
            violatorMapObj.timeStamp = timeStamp;
            violatorMapObj.ndzStatus = violator.inNDZ;

            violatorsMap.set(violator.serialNumber, violatorMapObj);
        } else {
            //new violators

            const pilotData = await fetchPilot(violator.serialNumber);
            
            if (pilotData.status !== 200) {
                unsuccessfulFetchArr.push(violator.serialNumber);
            }
            
            violatorsMap.set(violator.serialNumber, new Violator(pilotData.pilot, violator.inNDZ, violator.distance, timeStamp));

        }
    });
}

module.exports = addViolators;