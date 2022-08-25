// console.log('Good morning from the closures file!');

/*
    Javascript Closures
*/

let subject = 'JavaScript'; // block scoped variable - window

function homework(student){
    console.log(`${student}, did you finish your ${subject} homework?`)
}

homework('Brian');
// inward scope bad, outward scope good
// console.log(student); // ReferenceError: student is not defined

// Scopes can be nested

let hometown = 'Chicago'; // Block scoped

{
    var state = 'Illinois'; // Globally Scoped
    let hometown = 'Champaign'; // Block Scoped
    {
        console.log(`I am from ${hometown}, ${state}`)
    }
}

console.log(`I am from ${hometown}, ${state}`)

// Function Scopes can also be nested

// function outer(){
//     let outerMessage = 'This is the outer message';
//     function inner(){
//         let innerMessage = ' and this is the inner message';
//         console.log(outerMessage + innerMessage);
//     }

//     inner();
//         console.log(innerMessage); // ReserenceError: innerMessage is not defined
// }

// console.log(outer);

// Return a function from a function

function outer(){
    let outerMessage = 'This is the outer message';
    function inner(){
        let innerMessage = ' and this is the inner message';
        console.log(outerMessage + innerMessage);
    }
    return inner
}

console.log(outer);

let outerReturn = outer(); // return value of the outer function

console.log(outerReturn);

outerReturn();

// inner() function is a closure
// A closure is a function that preserves the outer scope in its inner scope

// A more practical example

function makeMultiplier(x){
    function times(y){
        return x * y
    }
    return times
}

let double = makeMultiplier(2);
console.log(double);

console.log(double(5));
console.log(double(3));
console.log(double(10));
console.log(double(7));
console.log(double(9));

let triple = makeMultiplier(3);
console.log(triple);

console.log(triple(5));
console.log(triple(3));
console.log(triple(10));
console.log(triple(7));
console.log(triple(9));

// Setting up a "hidden" variable using closures

function setCounter(){
    console.log('Setting counter...')
    let count = 0; // Scoped to setCounter Function
    function increaseCount(){
        count++
        return count
    }
    return increaseCount
}

let step = setCounter();

console.log(step);

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());

// console.log(count); // ReferenceError: count is not defined
console.clear();

// Another Practical Example - hiding variables

// let cache = {}

// function fib(num){
//     if (num < 2){
//         return num
//     } else if (num in cache) {
//         return cache[num]
//     } else {
//         let fibNum = fib(num - 1) + fib(num - 2);
//         cache[num] = fibNum
//         return fibNum
//     }
// }

//Hide the cache with a closure

function makeFibWithCache(){
let cache = []

function fib(num){
        if (num < 2){
            return num
        } else if (num in cache) {
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache[num] = fibNum
            return fibNum
        }
    }
    return fib
}

let fib = makeFibWithCache();

console.log(fib(40));

// IIFE - Immediately Invoked Function Expression
// Syntax - (function to define)(any args)

// let myFullName = (function formatName(first, last){
//     return[first, last].join(' ')
// })('Brian', 'Stanton');

// console.log(myFullName);

let myFullName = ((first, last) => {
    return[first, last].join(' ')
})('Brian', 'Stanton');

console.log(myFullName);

// Set up closure with an IIFE

let stepByFive = (step => {
    let count = 0;
    function inner(){
        return count += step
    }
    return inner
})(5);

console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());
console.log(stepByFive());


let fibAgain = (function makeFibWithCache(){
let cache = {}

function fib(num){
        if (num < 2){
            return num
        } else if (num in cache) {
            return cache[num]
        } else {
            let fibNum = fib(num - 1) + fib(num - 2);
            cache[num] = fibNum
            return fibNum
        }
    }
    return fib
})()
    
console.log(fibAgain(100))

// In Class Exercise
// Create an IIFE that has a hidden array of names (starts as an empty array) but will add users to the list every time the function is called

let addName = (function addUser(){
    var liist = [];
    function inner(name){
        liist.push(name)
        return liist
    }
    return inner
})()


console.log(addName('Brian')); // ['Brian']
console.log(addName('Tatyana')); // ['Brian', 'Tatyana']
console.log(addName('Ripal')); // ['Brian', 'Tatyana', 'Ripal']
console.log(addName('Sam')); // ['Brian', 'Tatyana', 'Ripal', 'Sam']