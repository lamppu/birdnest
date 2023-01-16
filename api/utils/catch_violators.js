const calculateDistance = (positionX, positionY) => {
    const ndzX = 250000;
    const ndzY = 250000;

    const distance = Math.sqrt(Math.pow((positionX-ndzX), 2) + Math.pow((positionY-ndzY), 2));

    return distance;
}

const inNDZ = (drone) => {
    if (drone.distance <= 100000) {
        return true;
    }
    return false;
}

const mapDrone = (drone) => {
    return {
        serialNumber: drone.serialNumber._text,
        distance: calculateDistance(drone.positionX._text, drone.positionY._text)
    }
}

// returns list with serialNumber and distance
const catchViolators = (droneList) => {
    const mappedDrones = droneList.map(mapDrone);
    
    const filteredDrones = mappedDrones.filter(inNDZ);
    
    return filteredDrones;
}

module.exports = catchViolators;