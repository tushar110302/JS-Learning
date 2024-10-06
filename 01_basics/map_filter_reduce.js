// const array = [1 ,2,3,4,5,6,7,8,9,12,13]

// array.forEach( (num) => console.log(num))
// const filteredArray = array.filter( (number) => ( number>5 ) )
// const fa = array.filter( (it) => {return it<=50} )

// console.log(filteredArray)
// console.log(fa)

// const map = array.map( (item) => item*2)
// console.log(map)
// const testArray = array.filter((item) => item%2==0).map( (item) => item*2) 

// console.log(testArray)

let arr = [1,2,3]
const r = arr.reduce( (acc, item) => { return acc+item} ,10)
console.log(r)