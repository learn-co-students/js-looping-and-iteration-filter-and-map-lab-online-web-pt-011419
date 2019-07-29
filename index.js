function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue );
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let riders = driversWithRevenueOver(drivers, revenue)
   let ruffRiders = riders.map(function (driver) {
     return driver.name
   })
   return ruffRiders;
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
   let matches;
    for (const key in attribute) {
      matches = driver[key] === attribute[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, attribute) {
  let riders = exactMatch(drivers, attribute);
  let ruffRiders = riders.map(function (driver) {
    return driver.name
  })
  return ruffRiders;
  }
