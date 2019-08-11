// Code your solution here:

function driversWithRevenueOver(array, match) {
    const matches = array.filter(function(obj) {
        return obj.revenue > match
    })

    return matches
}

function driverNamesWithRevenueOver(drivers, revenue) {
    const matches = driversWithRevenueOver(drivers, revenue)
    const names = matches.map (function(match) {
        return match.name
    });
    return names
}

function exactMatch(obj, match) {
    let key = Object.keys(match)
    const matches = obj.filter(function(element) {
        return element[key] === match[key]
    })
    return matches
}

function exactMatchToList(obj, match) {
    const matches = exactMatch(obj, match)
    const names = matches.map (function(match) {
        return match.name
    });
    return names
}