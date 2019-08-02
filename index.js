// Code your solution here:
function driversWithRevenueOver(array, revenue){
    const drivers = [];
  array.map(function(driver) {
    if (driver.revenue > revenue) {
        drivers.push(driver);
       }
    });
    return drivers;
}

function driverNamesWithRevenueOver(array, revenue){
    const drivers = [];
  array.map(function(driver) {
    if (driver.revenue > revenue) {
        drivers.push(`${driver.name}`);
       }
    });
    return drivers;
}

function exactMatch(array, attribute){
    const drivers = []
   array.map(function(driver){
       if (driver.name === attribute.name){
           drivers.push(driver);
       } else if ( driver.revenue === attribute.revenue){
           drivers.push({ "name": driver.name, "revenue": driver.revenue });
       }

   }); 
   return drivers;
}

function exactMatchToList(array, attribute){
    const drivers = []
   array.map(function(driver){
       if (driver.name === attribute.name){
           drivers.push(driver.name);
       } else if ( driver.revenue === attribute.revenue){
           drivers.push(driver.name);
       }

   }); 
   return drivers;
}