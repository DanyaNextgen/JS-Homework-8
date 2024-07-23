let arr = ['Feruz', 22, true, null]

let str = []
let num = []
let bool = []
let obj = []

console.log(
    arr.filter((item) => (typeof(item) === 'string' ? str.push(item) : typeof(item) === 'number' ? num.push(item) : typeof(item) === 'boolean' ? bool.push(item) : item === null ? obj : null))
);

