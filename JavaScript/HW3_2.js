const fs = require ("fs");
let user = JSON.parse(fs.readFileSync("task2.json"));
// console.log(user);
// first option
function uniqueFunc1() {
    let unique1 = [];
    user.forEach (el => {
        if(!unique1.includes(JSON.stringify(el)))  unique1.push(JSON.stringify(el))
    })
    // return unique1.length;
    return unique1.map(el => JSON.parse(el))
};
console.log(uniqueFunc1());

//second option
// let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
// console.log(unique.length);