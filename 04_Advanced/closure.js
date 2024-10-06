// This is lexical scoping where innerFunc has access to parent function's variables
// function displayName(){
// let name = "Hello";
//     function innerFunc(){
//         console.log(name);
//     }
//     innerFunc();
// }
// displayName();

//A closure is a function that has access to variables from the outer (enclosing) function, even after the outer function has returned.
// This occurs because the inner function retains a reference to the outer function's scope, creating a persistent connection between the two.
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     console.log("Outer Function");
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();

// A Practical Application
// There are 2 buttons with id's orange and green. Background color should change when clicked on them.

// This will work but is not scalable practice what if 100 buttons are there
// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = "orange";
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = "green";
// }
function handler(color){
    return function(){
        document.body.style.backgroundColor = color;
    }
}
document.getElementById("orange").addEventListener("click", handler("orange"));
document.getElementById("green").addEventListener("click", handler("green"));