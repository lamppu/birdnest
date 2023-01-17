const Violator = require("../../classes/violator");
const Pilot = require("../../classes/pilot");

const getTestMap = () => {
    const violatorsMap = new Map();

    const pilot1 = new Pilot("Saul Hudson", "saul.hudson@example.com", "+210524465790");
    const pilot2 = new Pilot("John Gillis", "john.gillis@example.com", "+210524765790");
    const pilot3 = new Pilot("Joan Larkin", "joan.larkin@example.com", "+210524424390");

    const now = Date.now();
    const ts1 = (new Date(now - 601000)).toISOString();
    const ts2 = (new Date(now - 500000)).toISOString();
    const ts3 = (new Date(now - 1000)).toISOString();

    const viol1 = new Violator(pilot1, 46333.9707902, ts1);
    const viol2 = new Violator(pilot2, 46333.9707902, ts2);
    const viol3 = new Violator(pilot3, 46333.9707902, ts3);
    
    violatorsMap.set("1", viol1);
    violatorsMap.set("2", viol2);
    violatorsMap.set("3", viol3);

    return violatorsMap;
}

module.exports = getTestMap;