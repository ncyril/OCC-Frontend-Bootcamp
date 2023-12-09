//Functions - Set of instructions

function greet(){
    console.log("Instruction #1");
    console.log("Instruction #2");
    console.log("Instruction #3");
    console.log("Merry Christmas");
}

greet();

//Function Hoisting
functionDeclartion();

//1. Function Declartion
function functionDeclartion(){
    console.log("Hello World! I am a function declaration");
}

//2. Function Expression

const functionExpression = function(){
    console.log("Hello World! I am a function expression");
}

functionExpression();

//Functions with Parameters

function greet(name){
    console.log(`Hello ${name}`);

}

greet("John");

//Functions with a retun value

function sum(num1, num2){
    return num1 + num2;
}

console.log("Sum: ",sum(10,20));

//Anonymous function - Anonymous function is a function without a name living in a variable
let greet2 = function(){
    console.log("Hello World!");
}

greet2();


//Higher-order function
function calculate(operation, num1,num2) {
    return operation(num1, num2);
}


// Callback Functions
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}

//Using higer order function
console.log("Add: ", calculate(add, 10, 20));
console.log("Subtract: ", calculate(subtract, 10, 20));
console.log("Multiply: ", calculate(multiply, 10, 20));
console.log("Divide: ", calculate(divide, 10, 20));