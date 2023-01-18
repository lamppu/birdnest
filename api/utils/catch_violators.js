const calculateDistance = (positionX, positionY) => {
    const ndzX = 250000;
    const ndzY = 250000;

    const distance = Math.sqrt(Math.pow((positionX-ndzX), 2) + Math.pow((positionY-ndzY), 2));

    return distance;
}

const inNDZ = (distance) => {
    if (distance <= 100000) {
        return "in";
    }
    return "out";
}

const mapDrone = (drone) => {
    const distance = calculateDistance(drone.positionX._text, drone.positionY._text);
    
    return {
        serialNumber: drone.serialNumber._text,
        distance: distance,
        inNDZ: inNDZ(distance)
    }
}

// returns list with serialNumber and distance
const catchViolators = (droneList, violatorsMap) => {

    const filterDrones = (drone) => {
        if(drone.inNDZ === "in" || violatorsMap.has(drone.serialNumber)) {
            return true;
        }
        return false;
    }

    const mappedDrones = droneList.map(mapDrone);
    
    const filteredDrones = mappedDrones.filter(filterDrones);
    
    return filteredDrones;
}

module.exports = catchViolators;