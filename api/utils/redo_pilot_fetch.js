const fetchPilot = require('./fetch_pilot');
const Violator = require('../classes/violator');

const redoPilotFetch = async (unsuccessfulFetchArr, violatorsMap) => {
    const successfulFetches = [];

    for (let serialNumber of unsuccessfulFetchArr) {

        const pilotData = await fetchPilot(serialNumber);
        
        if (pilotData.status === 200) {
            const violator = violatorsMap.get(serialNumber);
            violatorsMap.set(serialNumber, new Violator(pilotData.pilot, violator.inNDZ, violator.distance, violator.timeStamp));
            successfulFetches.push(serialNumber);
        }
    }

    const fetchUnsuccessful = (serialNumber) => {
        if (successfulFetches.includes(serialNumber)) {
            return false;
        } 
        return true;
    }

    //filter out successful fetches, only leaving unsuccessful ones
    const filteredFetches = unsuccessfulFetchArr.filter(fetchUnsuccessful);
    
    return filteredFetches;
}

module.exports = redoPilotFetch;