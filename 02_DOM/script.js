// document.getElementById('title').getAttribute('id')
// document.getElementById('title').getAttribute('class')
// document.getElementById('title').setAttribute('id',"hello")
// document.getElementById('title').style.backgroundColor = "green"
// document.getElementById('title').style.borderRadius = "30px"

// Both are similar but innerText returns text which is actually shown
// document.getElementById('title').innerText 
// document.getElementById('title').textContent  // it returns all the text which is present inside the element whether shown on webpage or not

// document.getElementById('title').innerHTML // returns html tags also inside the element
// html tags can also set using innerHTML but not with innerText or textContent


// document.getElementById('title').innerText 
// 'This is heading for DOM Learning TESTING WORD'
// document.getElementById('title').textContent
// '\n            This is heading for DOM Learning\n            TESTING WORD\n        '
// document.getElementById('title').innerHTML
// '\n            This is heading for DOM Learning\n            <span>TESTING WORD</span>\n        '

// const head = document.querySelector("#title")
// head.style.backgroundColor = "blue"
// document.querySelector("h1")
// document.querySelector(".heading")

// const inputPassword = document.querySelector("input[type=password]")
// console.log(inputPassword)

// const myList = document.querySelector('ul')
// const li = myList.querySelector('li')
// console.log(li)

// const list = document.querySelectorAll('li') // return NodeList
// console.log(list)
// // list[0].style.backgroundColor = 'green'

// const list_items = document.getElementsByClassName('list-item')  // return HTML Collection
// console.log(list_items[0])

const lists = document.querySelector('.parent')
// console.log(lists.children)
// console.log(lists.children[1].innerHTML)
console.log(lists.childNodes)

// for (let i = 0; i < lists.children.length; i++) {
//     console.log(lists.children[i].innerText)
// }
// const ch = document.querySelector('.list-item')
// console.log(ch.parentElement)
// console.log(ch.nextElementSibling)
