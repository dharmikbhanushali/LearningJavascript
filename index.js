// This is starting point for udemy javascript course
console.log('Hello World');

let firstName = 'Josh', lastName = 'Haze';

console.log(firstName, lastName);

//variables cannot be a reserved keyword, cannot start with a number, cannot have spaces or hyphens

const rate = 0.5;

// rate = 1;

//should see a reassignment error for the const variable

console.log(rate);

// Primitve/value types

let fname = 'John'; // string literal
let age = 20; // number literal 
let isTruth = false; // boolean literal
let name = undefined;
let color = null;

// objects in javascript

let person = {
    name: 'Wick', age: 30
};

// ways to change object values

// using dor notation

person.name = 'mike';  

// brackt notation

person['name'] = 'Axl';

// or 

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name); 

// Arrays - can hold a mix of datatypes

let selectedColors = ['red', 'green', 'blue'];

selectedColors[3] = 1;

console.log(selectedColors);
console.log(selectedColors.length);

