//Arrow Function

const greet = () => console.log('Hello');
greet();

//Enhanced object literals
const person = {
    firstName: 'John',
    lastName: 'Wick',
    age: 40,
    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
};

person.greeting();

//Spread and Rest Operators
function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest Operator - Logs the first argument and the the rest in restArgs
function myFunction(firstArg, ...restArgs) {
    console.log(firstArg);
    console.log(restArgs);
}

myFunction('one', 'two', 'three', 'four');

// Common JS Built-in Methods
// Arrays
// Filter

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = number.filter(num => num % 2 == 0);
console.log(evenNumbers);

const oddNumbers = number.filter(num => num % 2 != 0);
console.log(oddNumbers);

//String
const message = 'Hello, Universe, Hi';
const words = message.split(', ');
console.log(words);

//Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containWord = sentence.includes('fox');
console.log(sentence.includes(containWord));

//Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

//Objects
const cat = {
    name: 'Fluffy',
    color: ['White', 'Grey'],
    breed: 'Persian',
    age: 3,
}

//Keys
const keys = Object.keys(cat);
console.log(keys);

//Values
const values = Object.values(cat);
console.log(values);

//Entries - Both Keys and Values in an array
console.log(Object.entries(cat));

//Math
//Max and Min
const nums = [10, 43, 5, 30, 21, 67, 89, 12];
let maxNumber = Math.max(...nums);
console.log(maxNumber);
let minNumber = Math.min(...nums);
console.log(minNumber);

//Random
let randomNum = Math.random() * 11;
console.log(randomNum);

//Rounding
console.log(Math.round(randomNum));

//Floor - Rounding down
console.log(Math.floor(randomNum));
//Ceil - Rounding up
console.log(Math.ceil(randomNum));

//Nested Math Methods
const randomNum2 = Math.floor(Math.random() * 100);
console.log(`Random number between 1 and 100: ${randomNum2}`);


//Other Methods
//Dates
const currentDate = new Date();
console.log("Current date:", currentDate);

//Get Christmas
const christmas = new Date(2023, 11, 25);
console.log("Christmas:", christmas);

//Get the current year
const currentYear = currentDate.getFullYear();
console.log("Current year:", currentYear);

//Get the current month
const currentMonth = currentDate.getMonth();
console.log("Current month:", currentMonth);

//Get the current day
const currentDay = currentDate.getDate();
console.log("Current day:", currentDay);

//Get the current hour
const currentHour = currentDate.getHours();
console.log("Current hour:", currentHour);

//Get the current minute
const currentMinute = currentDate.getMinutes();
console.log("Current minute:", currentMinute);

//Get the current second
const currentSecond = currentDate.getSeconds();
console.log("Current second:", currentSecond);

//Get the current millisecond
const currentMillisecond = currentDate.getMilliseconds();
console.log("Current millisecond:", currentMillisecond);

//toFixed
const price = 100.12345
console.log(price.toFixed(2));

//toString
const num = 38;
const parsedString = num.toString();
console.log(parsedString + 1, typeof parsedString);