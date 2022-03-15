const { expect } = require("chai");

// Code your solution in this file!
function distanceFromHqInBlocks(blocknumber) {
    if (blocknumber > 42)
        return blocknumber - 42
    else return 42 - blocknumber;
}
function distanceFromHqInFeet(blocknumber) {
    return distanceFromHqInBlocks(blocknumber) * 264
}
function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    if (start < destination)
     console.log (blockLengthfuc)
        return (destination - start) * blockLength;
    else return (start - destination) * blockLength;
}
console.log(distanceTravelledInFeet(43, 48))



   function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);

        if (distance <= 400) {
            return 0;
        } else if (distance > 400 && distance <= 2000) {
            return .02 * (distance - 400);
        } else if (distance > 2000 && distance < 2500) {
            return 25;
        } else {
            return 'cannot travel that far';
        }
    }