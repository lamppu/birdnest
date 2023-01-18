class Violator {
    constructor(pilot, ndzStatus, closestDistance, timeStamp) {
        this.pilot = pilot;
        this.ndzStatus = ndzStatus;
        this.closestDistance = closestDistance;
        this.timeStamp = timeStamp;
    }
}

module.exports = Violator;