// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);  
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 5);
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

function createFareMultiplier(x) {
    return function(y) {
        return x*y
    }
}

const multi = createFareMultiplier();

const fareDoubler = function(x) {
    return multi*2;
}

const fareTripler = function(x) {
    return createFareMultiplier(3)
}
// const fareDoubler = function(x) {
//     return createFareMultiplier()*2;
// }