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
        for (const key in attribute){
            console.log(key)
        }
    })
}


function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in matcher) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
  }