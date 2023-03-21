// Write a function that takes a city name as input and returns state name as output from the
// following data structure -
// obj = {
// "India" : {
// "Karnataka" : ["Bangalore", "Mysore"],
// "Maharashtra" : ["Mumbai", "Pune"]

// },
// "USA" : {
// "Texas" : ["Dallas", "Houston"],
// "IL" : ["Chicago", "Aurora", "Pune"]

// }
// }
// Input - “Pune”
// Output - [“IL”, “Maharashtra”]

function getState(city){
    const obj = {
        "India" : {
            "Karnataka" : ["Bangalore", "Mysore"],
            "Maharashtra" : ["Mumbai", "Pune"]
        },
        "USA" : {
            "Texas" : ["Dallas", "Houston"],
            "IL" : ["Chicago", "Aurora", "Pune"]
        }
    }
    let foundStates = []
    Object.values(obj).forEach((country) => {
        const states = Object.keys(country)
        for(let i = 0; i < states.length; i++){
            for(let j = 0; j < country[states[i]].length; j++){
                if(country[states[i]][j] == city){
                    foundStates.unshift(states[i])
                    return
                }
            }
        }
    })
    return foundStates
}

console.log(getState("Pune"))