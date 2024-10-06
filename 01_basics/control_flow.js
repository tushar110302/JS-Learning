// const x = 23
// if(x<23)
//     console.log("If ecec")
// else
//     console.log("Else")

// NUll Coalescing Operator ??

// let val1
// // val1 = 5 ?? 10
// // val1 = null ?? 32
// // val1 = undefined ?? null  // null
// // val1 = undefined ?? 0
// val1 = null ?? 2 ?? 123


// console.log(val1)

// let arr = [1,2,3,4,5]
// for (const dd of arr) {
//     console.log(dd)
// }

// ++++++++++++++++++++++ for-of will take values and for-in takes keys

// for (const [key,value] in arr) {
//     console.log(key, value)  // key , undefined
// }

// let mp = new Map()
// mp.set("A", "India")
// mp.set("B", "USA")
// mp.set("C","UK")
// for (const [key, value] of mp) {  // Array destructure
//     console.log(key, value)
// }

// const obj = {
//     a : "abc",
//     b : "def",
//     c : "ghi",
//     d : "jkl"
// }

// // obj is not iterable, so for-of gives eroor
// // for (const element of obj) {
// //     console.log(element)
// // }
// for (const key in obj) {
//     console.log(key, obj[key])
// }

// arr.forEach( function(item) {
//     console.log(item)
// })

// arr.forEach((i) => {
//     console.log(i)
// })

// function printMe(item) {
//         console.log(item)
//  }
//  arr.forEach(printMe)

// arr.forEach( (item, index, array) => {
//     console.log(item, index, array)
// })

const myArr = [
    {
        name: "js",
        type: ".js"
    },
    {
        name: "java",
        type: ".java"
    },
    {
        name: "C++",
        type: ".cpp"
    },
    {
        name: "python",
        type: ".py"
    },
]
myArr.forEach( (ele) => {
    console.log(ele.name, ele.type)
})