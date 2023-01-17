const tenMinuteCheck = (violatorsMap) => {

    const keys = [];
    for (let [key, value] of violatorsMap) {
        
        const lastTimeSeen = Date.parse(value.timeStamp);
        const now = Date.now();

        if ((now - lastTimeSeen) > 600000) {
            keys.push(key);
        }
    }

    keys.forEach((key) => violatorsMap.delete(key));
}

module.exports = tenMinuteCheck;