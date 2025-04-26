//Q3 Backend Task Solution

const fs = require("fs")
const superagent = require("superagent")
const async = require("async")

const makeRequest = async function() {
    console.log("Making Request")
    const response = await superagent.get("https://restcountries.eu/rest/v2/lang/es")
    return response
}
async.retry({times: 10}, makeRequest, (err, result) => {
    if(err){
        console.log(err)
        return
    }
    let data = result.body
    if(typeof data === "object"){
        data = JSON.stringify(data)
    }
    fs.writeFile("output.txt", data, (err) => {
        if(err){
            console.log(err)
        }
    })
})
