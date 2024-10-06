// const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log("Async task one")
    //     resolve();
    // }, 1000)
// })

// ****** ASYNC FUNCTIONS ALWAYS RETURN A PROMISE so they can be chained using then and catch

// p1.then(() => {
//     console.log("Promise resolved");
// })
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task one");
//         resolve();
//     }, 1000)
// }).then(() => {
//     console.log("Promise 2 resolved");
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Inseide Promise");
//         resolve({username : "Tushar" , Email : "abc@abc.com"});
//     }, 1000)
// })

// promiseThree.then((data) => {
//     console.log("Promise 3 resolved");
//     console.log(data)
// })

// const promiseFour = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     let err = true;
    //     if(!err) {
    //         resolve({username : "Tushar" , Email : "abc@abc.com"});
    //     }
    //     else{
    //         reject("ERROR! something went wrong")
    //     }
    // }, 1000);
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.Email;          // Value returned in a then will be sent to next then
// }).then((userEmail) => {
//     console.log(userEmail);
// }).catch((err) => {             // For catch thw above chaining wont work
//     console.log(err);
//     return "BYRBYR"
// }).finally(() => {
//     console.log("Finally block reached")
// })

// const promiseFive =  new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         let err = true;
//         if(err) {
//             resolve({username : "XYZ" , password : "kuch bhi"});
//         }
//         else{
//             reject("ERROR! something went wrong")
//         }
//     }, 1000);
//  })
// const prom = async () => {
//     try {
//         const respomse = await promiseFive;
//         console.log(respomse)
//     } catch (error) {
//         console.log(error)
//     }
// }
// prom()

// async function getResponse() {
//     try {
//         const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getResponse()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => console.log(err))