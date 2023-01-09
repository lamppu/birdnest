const { XMLParser } = require('fast-xml-parser');

const fetchDroneData = async () => {
    const response = await fetch('https://assignments.reaktor.com/birdnest/drones');
    const xmlData = await response.text();
    
    const parser = new XMLParser();
    const dataObject = parser.parse(xmlData);

    //console.log(dataObject.report.capture);
    return dataObject.report.capture;
}

module.exports = fetchDroneData;