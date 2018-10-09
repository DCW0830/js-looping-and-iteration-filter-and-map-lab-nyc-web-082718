// Code your solution here:

const driversWithRevenueOver = function (list, revenue) {
  return list.filter(function (driver) {
    return driver.revenue > revenue
  })
}

const driverNamesWithRevenueOver = function (list, revenue) {
  return driversWithRevenueOver(list, revenue).map(function (driver) {
    return driver.name
  })
}

const exactMatch = function(list, matcher) {
  return list.filter(function(driver) {
    let matches = false
    for (const key in matcher) {
      matches = driver[key] == matcher[key]
    }
    return matches
  })
}

const exactMatchToList = function(list, matcher) {
  return exactMatch(list, matcher).map(function (driver) {
    return driver.name
  })
}
