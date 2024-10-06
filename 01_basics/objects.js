// singleton 
// Object.create

// const mySym = Symbol('BdC')
// const sym = Symbol(56)
// console.log(mySym)
// console.log(sym)
// Object literal
// const obj = {
//     "name": "Tushar",
//     "full name": "Tushar Ranjan",
//     last_name: "Ranjan",
//     [mySym] : "dan",
//     age: 22,
//     email: "jkerbgkb",
//     login: true,
//     days: ["monday", "tue","wed"]
// }
// console.log(obj[mySym]) 
// console.log(obj.days)
// console.log(obj['days'][0].indexOf("day"))

// console.log(obj.name)
// console.log(obj["full name"]) // obj.full name won't work
// console.log(obj.last_name)

// console.log(obj)
// Object.freeze(obj)
// obj.login = false
// console.log(obj)

// obj.foo = function(){
//     console.log("Hello from obj")
// }
// obj.foo2 = function(){
//     console.log(`Hello my name is ${this["age"]}`) // or this.age or this[mySym]
// }

// obj.foo()
// obj.foo2()

// const a = {a: "1", b:"2"}
// const b = {b: "3", d:"4"}
// const c = {e: "5", f:"6"}

// const newObj = {...a, ...b, ...c}
// const newObj = Object.assign({},a,b,c)
// console.log(a)
// console.log(newObj)

// console.log(Object.keys(newObj))
// console.log(Object.values(newObj))

// console.log(newObj.hasOwnProperty("a"))
// console.log(newObj.hasOwnProperty("c"))

const course = {
    cname: "JS",
    teacher: "utube",
    price: 3733
}

// console.log(course['cname'])
const {teacher: t, cname: name} = course
console.log(t,name)