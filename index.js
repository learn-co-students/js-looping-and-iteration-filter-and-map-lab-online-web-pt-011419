// Code your solution here:
const drivers = [];
const extendedDrivers = [];

  drivers.push(
    { name: 'Sally',   revenue: 400 },
    { name: 'Annette', revenue: 200 },
    { name: 'Jim',     revenue: 150 }
  );

  extendedDrivers.push(
    { name: 'Sally',   revenue: 400 },
    { name: 'Annette', revenue: 200 },
    { name: 'Jim',     revenue: 150 },
    { name: 'Sally',   revenue: 200 }
  );


function driversWithRevenueOver(list, revenue) {
  return list.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  })
}

function exactMatch(list, matcher) {
  return list.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(list, matcher) {
  return exactMatch(list, matcher).map(function (driver) {
    return driver.name;
  })
}
