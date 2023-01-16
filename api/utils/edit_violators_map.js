const fetchData = require('./fetch_data.js');
const Violator = require("../classes/violator");
const Pilot = require("../classes/pilot");

const fetchPilot = async (serialNumber) => {
    const pilotData = await fetchData("https://assignments.reaktor.com/birdnest/pilots/" + serialNumber, "JSON");

    if (pilotData.status === 200) {
        const name = pilotData.data.firstName + " " + pilotData.data.lastName;
        return {
            status: pilotData.status,
            pilot: new Pilot(name, pilotData.data.email, pilotData.data.phoneNumber)
        }
    }
    return {
        status: pilotData.status,
        pilot: new Pilot(null, null, null)
    }
}


const addViolators = async (violatorsMap, caughtViolators, timeStamp, unsuccessfulFetchArr) => {

    caughtViolators.forEach(async violator => {
        
        if (violatorsMap.has(violator.serialNumber)) {

            const violatorMapObj = violatorsMap.get(violator.serialNumber);

            if(violator.distance < violatorMapObj.closestDistance) {
                violatorMapObj.closestDistance = violator.distance;
            }
            violatorMapObj.timeStamp = timeStamp;

            violatorsMap.set(violator.serialNumber, violatorMapObj);
        } else {
            
            const pilotData = await fetchPilot(violator.serialNumber);
            if (pilotData.status !== 200) {
                unsuccessfulFetchArr.push(violator.serialNumber);
            }
            
            violatorsMap.set(violator.serialNumber, new Violator(pilotData.pilot, violator.distance, timeStamp));

        }
    });
    console.log("After----------------------------------------");
    console.log([...violatorsMap.entries()]);
}

module.exports = addViolators;