//Using Set to remove duplicates
let arr = [0, 1, 2, 3, 0, 1, 4, 4, 6, 3]

let newSet = new Set(arr)

console.log([...newSet])

//Using Object to remove duplicates
const dict = {}

for(let i of arr){
  dict[i] = 1
}

console.log(Object.keys(dict).map(key => parseInt(key)))