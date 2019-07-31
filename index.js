
function driversWithRevenueOver(drivers, number) {
    return drivers.filter(function(driver){
        return driver.revenue > number
    })
}

function driverNamesWithRevenueOver(drivers, number) {
    const driver = driversWithRevenueOver(drivers, number)
    return driver.map(function(person) {
        return person.name
    })   
}

function exactMatch(drivers, attribute) {
    return drivers.filter(function(driver){
        let applies = false //default value
            for(const key in attribute) {
            if (driver[key] === attribute[key]) {
            applies = true} //change default is the key matches
        }
        return applies //if it is true then it will add to the array
    })
}

function exactMatchToList(drivers, attribute){
    let driver = exactMatch(drivers, attribute)
        return driver.map(function(person){
        return person.name
    })
}