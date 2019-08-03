// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){ 
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function (driver){
        return driver.name
    })
}

function exactMatch(drivers, attribute){
    return drivers.filter(function (driver){
     let result
        for (const key in attribute){
        result = driver[key] === attribute[key]
        }
        return result
    })
}

function exactMatchToList(drivers, attribute){
    let driver = exactMatch(drivers, attribute)
        return driver.map(function(driver){
        return driver.name
    })
}

