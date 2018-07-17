// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function(element) {
    console.log(element.name);
  });
}

function logDriversByHometown(driver, location) {
  let driversInHometown = driver.filter(function(driver) {
    return driver.hometown === location;
  });
  logDriverNames(driversInHometown);
}

function driversByRevenue(driver) {
  const newArr = [...driver]
  return newArr.sort(function(a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(driver) {
  const newArr = [...driver]
  return newArr.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(driver) {
  const revArray = driver.map(function(element) {
    return element.revenue
  })
  return revArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  })
}

function averageRevenue(driver) {
  return totalRevenue(driver)/driver.length
}
