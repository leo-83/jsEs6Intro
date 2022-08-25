// This comment 
// Datatypes 
// string 
//   '' ""
// boolean
//   true false
// array
//   []
// hash
// {}
// integer
// 123 -123
// float
// 123.123
// null - no value
// NAN - Not a number
// undefined - note created yet

// +-*/ % () Pemdas 
// Math.PI()
// < > <= >= == === != !==
// && ||

// variables - store ref to an object
// vanilla js 
// id name = assigning to
// var firstName = 'bob'
// naming - descriptive, no key words, camelcase 
// have letters numbers _ $ 
// has to start with a letter or _ $ 
// case sentive 

// var FirstName = 'bob'
// - scope - where we have access the the variable 
// var does hoisting file wide scope, be able to change as a global scope 
// no longer using var 

// Let & const instead of var, ES6 version 
// let firstName = 'bob'
// firstName = 'jill'
// able to resassign
// const lastName = 'smith'
// constant, should not change 
// lastName = 'doe'

// *BTW const is used for a lot in es6, for variables, modules, components, functions

// true scope where if you define the variable in a coding it is scope in the coding block

// ++
// --
// +=
//  -=
// String Concatenation
// let greeting = 'hi'
// let planet = 'earth'
// let planet = 12
// console.log(greeting + ' ' + planet)

// Array
// let arr = ['bob', 'jill', 'alex']
// console.log(arr[1])
// arr.pop()
// console.log(arr)
// arr.push('jack')
// console.log(arr)
// console.log(arr.reverse())

// let person = { firstName: 'bob', age: 23 }
// console.log(person.firstName)
// console.log(person.age)
//  Object Destructuring - pull out the keys to be vairables 
// pulling out the name and age from the person and using as a variable
// const { firstName, age } = person
// const firstName = person.firstName 
// const age = person.age 
// console.log(firstName)
// console.log(age)

// Conditionals - run logic based oof of if a condition is met, 
// if else if else 
// if (num % 2 == 0) {
//   console.log('even')
// } else {
//   console.log('odd')
// }

// loops - continue to run logic until a condition is met 
// while 
// for 
// for in 

// Iterators - go through each item in an array / hash 
// let colors = ['blue', 'green', 'pink']
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }
// colors.forEach( color => {
//     console.log(color)           
// })

// for (let color of colors) {
//    console.log(color) 
// }

// most common 
// colors.map( color => {
//   console.log(color) 
// })

// let nums = [1,2,3,4,5]
// console.log(
//   nums.filter( num => num % 2 == 0)
// )

// you can have trailing commas
// let ppl = [
//   { firstName: 'bob', lastName: 'smith', },
//   { firstName: 'jill', lastName: 'doe', },
//   { firstName: 'joane', lastName: 'do', },
// ]

// ppl.map( person => {
//   const { firstName, lastName } = person
//   console.log(firstName + ' ' + lastName)
// //   string interpolation 
//   console.log(`${firstName} ${lastName}`)
// })

// JSON - Javascipt object notation 
// {
//   "firstName": "bob",
//   "age": 12,
// }

// Function / methods, bundle all common logic in one place. 

// vanilla 
// function countingColors() {
//   return 3
// }
// countingColors()

// function countingColors(colorsToCount) {
//   return 3
// }
// countingColors(['blue', 'green'])

// es6 way 
// => - thad arrow
// const countingColors = () => {
//   return 3
// } 

// countingColors()
// default param / arg 
// const countingColors = (colorsArr = []) => {
//   console.log(colorsArr.length)
// } 

// countingColors(['blue', 'green'])
// countingColors()

// destructuring form param or arg 
// const showInfo = (name, options = {}) => {
//   let likes = options.likes
//   let followers = options.followers 
//   let following = options.following
//   console.log(likes)
//   console.log(followers)
//   console.log(following)
// }
// const showInfo = (name, { likes, followers, following } = {}) => {
//   console.log(likes)
//   console.log(followers)
//   console.log(following)
// }


// showInfo("bob", { likes: 3, followers: 12, following: 300 })


// rest params - regardless of how many arg we are going to use ... and whatever we call it, colors and the rest of them
// rest of colors
// const displayColor = (firstColor, ...colors) => {
//   console.log(firstColor)
//   colors.map( c => console.log(c))
// }

// displayColor('red', 'blue')
// displayColor('red', 'blue', 'yellow')
// displayColor()

// go into a database 
// grab the rest of the movies 
// grabMovie(...movies)

// let person = { firstName: 'bob', lastName: 'smith', }

// spread operator
// grab and spread out the content of collect
// let colors = ['blue', 'green', 'pink']
// console.log(...colors)

// annoyomous function
// () => console.log('hi')

// on page 
// const and a module
// const per_page = 6
// const colors = ['blue', 'green', 'pink']

// if we want to use in another file 
// need to export in the same file 
// export { per_page, colors } // have many export in a file
// export default colors; // only have one export default per file

// to use in another file 
// import them 
// import { per_page, colors } from '../colors.js';
// import colors from '../colors.js'
// import from packages 
// packages are gems but for js 
// import React from 'react';
