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

// functions 

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Wick');

function square(number){
    return number*number;
}

let number = square(4);
console.log(number)

// Ternary operators 

let points = 90;

let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// truthy or falsy 

// displays the first found truthy value

let newColor = undefined;
let defaultColor = 'blue';
let finalColor = newColor || defaultColor;

console.log(finalColor);

// Excercise: swapping colors

let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

[a,b] = [b,a] 

console.log(a);
console.log(b);

// conditional statements

let hour = 19;

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}

// switch cases, for loops, while, do while, for in, for of 

// Landscape or potrait 

function landscapeOrPotrait(width,height){
    return (width > height) ? "landscape":"potrait";
}

let result = landscapeOrPotrait(300,300);
console.log(result);

// Divisible by 3 - Fizz
// Divisible by 5 - Buzz
// Divisible by both - FizzBuzz
// Not divisible by both - returns the number 
// if the input is not a number - not a number 

function fizzBuzz(input){

    if ((input % 3) === 0 && (input % 5) === 0) { console.log('fizzBuzz')}

    else if ((input % 5) === 0) { console.log('Buzz')}

    else if ((input % 3) === 0) { console.log('fizz')}

    else if (typeof input !== 'number') (console.log(NaN))

    else if ((input % 3) !== 0 && (input % 5) !== 0) { console.log(input)}

}

let answer = fizzBuzz('13');
console.log(answer);


// even or odd 

function evenOrOdd(inputNumber){
    for (let i = 0; i <= inputNumber; i++){
        if (i % 2 === 0) {console.log(i, "EVEN");}

        else console.log(i, "ODD");
    };
}

let ans = evenOrOdd(10);

// count the number of truthy values 

const array = [1,2,3, ''];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array){
        if (value) count++;
    }
    return count;
}

// string properties 

const movie = {
    title: 'a', 
    releaseYear: 2008,
    rating: 5,
    director: 'Nolan'
};

showStringProperties(movie);

function showStringProperties(obj){
    for(let key in obj){
        if (typeof obj[key] === 'string') {console.log(key, obj[key]);}
    }
}

// sum of multiples of 3 and 5

multipleSum(10);

function multipleSum(limit){
    let sumOfMultiples = 0;
    for(let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0 ){
        sumOfMultiples = sumOfMultiples + i;
    }
    console.log(sumOfMultiples);
}

// show stars

showStars(5);

function showStars(rows){
    for (let i = 1; i <= rows; i++){
        let pattern = ''
        for (let j = 0; j < i; j++){
        pattern = pattern + '*';
        }
        console.log(pattern); 
    }
}

// excercise for prime numbers 