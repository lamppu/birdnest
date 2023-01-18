const fetchData = require('./fetch_data.js');
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

module.exports = fetchPilot;