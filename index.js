// Code your solution here
/*function findMatching (arrOfDri, name){
    const result = arrOfDri.filter(driver => driver === name)
    return result 
}*/

function findMatching (arrOfDri, name){
    return arrOfDri.filter( function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
    }) 
}

function fuzzyMatch (arrOfDri, name){
    //console.log(arrOfDri, name)
    return arrOfDri.filter(function (driver){
        console.log(driver.substring(0, 2), name.substring(0, 4))
    return driver.substring(0, 2) === name.substring(0, 4)

    })
}

function matchName (arrOfDri, name){
   return arrOfDri.filter(function (driver){
      return driver.name === name
   })

}