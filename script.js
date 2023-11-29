
JavaScript commands, functions, and methods available for various purposes. Here are some commonly used JavaScript commands:

Variables:

var, let, const: Declare variables with different scoping rules.

--------------------------
Data Types: Number, String, Boolean, Array, Object, null, undefined.
--------------------------
Arrays:

Array: Stores multiple values in a single variable.
Array Methods: push(), pop(), shift(), unshift(), slice(), splice(), concat(), join(), reverse(), sort().
--------------------------
Objects:

Object: Stores key-value pairs.
Object Methods: keys(), values(), entries(), assign(), hasOwnProperty(), toString(), valueOf().
--------------------------
Strings:

String Methods: length, charAt(), concat(), indexOf(), lastIndexOf(), substring(), slice(), split(), toUpperCase(), toLowerCase(), trim().
--------------------------
Math:

Math Object: Math.random(), Math.round(), Math.floor(), Math.ceil(), Math.max(), Math.min(), Math.abs(), Math.pow(), Math.sqrt().
--------------------------
Date and Time:

Date Object: new Date(), getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getTime(), toLocaleString().
--------------------------
Event Handling:

element.addEventListener(): Attaches an event handler to an element.
Event Types: click, mouseover, keydown, submit, load, change, scroll, etc.
--------------------------

Data Types:

String: Represents textual data.
Number: Represents numeric data.
Boolean: Represents either true or false.
Array: Represents an ordered list of values.
Object: Represents a collection of key-value pairs.
null and undefined: Represents the absence of value.
--------------------------
Operators:

Arithmetic: +, -, *, /, %, ++, --.
Assignment: =, +=, -=, *=, /=, %=.
Comparison: ==, ===, !=, !==, >, <, >=, <=.
Logical: &&, ||, !.
--------------------------
Control Flow:

if, else if, else: Conditional statements.
switch, case, default: Multi-way branch statement.
for, while, do while: Looping statements.
break, continue: Alter loop execution.
--------------------------
Functions:

function: Declare a function.
return: Specify the value to be returned from a function.
arguments: Refer to the arguments passed into a function.
Arrow functions: (parameters) => { ... }.
--------------------------
Built-in Objects:

Math: Provides mathematical functions and constants.
Date: Manipulate dates and times.
Array: Methods for manipulating arrays.
String: Methods for manipulating strings.
Object: Methods for working with objects.
JSON: Parse and stringify JSON data.
--------------------------
DOM Manipulation:

document.getElementById(): Retrieve an element by its ID.
document.querySelector(): Retrieve the first matching element.
document.querySelectorAll(): Retrieve all matching elements.
element.innerHTML: Get or set the HTML content of an element.
element.style: Get or set CSS styles of an element.
element.addEventListener(): Attach an event handler.
--------------------------
Asynchronous Programming:

setTimeout(): Execute a function after a specified delay.
setInterval(): Execute a function repeatedly at specified intervals.
fetch(): Make HTTP requests.
async/await: Simplify handling of promises.
***********************************************

JavaScript commands with example

Variables and Data Types:

var, let, const: Used to declare variables.
var x = 5;
let y = "Hello";
const PI = 3.14;
------------------------------------------------
Operators:

Arithmetic Operators: +, -, *, /, %.
var sum = 3 + 2;
var result = 10 % 3;
------------------------------------------------
Control Flow:

if, else if, else: Used for conditional statements.
var age = 18;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
------------------------------------------------
switch, case, break: Executes different code blocks based on different cases.
javascript
Copy code
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the first day of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("Enjoy your day!");
}
------------------------------------------------
for, while, do-while: Loops to execute code repeatedly.
javascript
Copy code
for (var i = 0; i < 5; i++) {
  console.log(i);
}

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
------------------------------------------------
Functions:

function: Declares a function.
javascript
Copy code
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");
------------------------------------------------
Arrays:

Array: Stores multiple values in a single variable.
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);  // Output: Apple
------------------------------------------------
Objects:

Object: Stores key-value pairs.
var person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Output: John

------------------------------------------------
document.getElementById(): Gets an element by its ID.

var element = document.getElementById("myElement");
------------------------------------------------
document.querySelector(): Gets the first matching element using a CSS selector.

var element = document.querySelector(".myClass");
------------------------------------------------
element.innerHTML: Accesses or modifies the HTML content of an element.

var element = document.getElementById("myElement");
element.innerHTML = "New content";

------------------------------------------------
Event Handling:

element.addEventListener(): Attaches an event handler to an element.

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

------------------------------------------------
1. String Manipulation:

str.length: Returns the length of a string.
str.charAt(index): Returns the character at the specified index in a string.

var str = "Hello, World!";
console.log(str.length);  // Output: 13
console.log(str.charAt(7));  // Output: W

------------------------------------------------
2. Array Manipulation:

array.push(element): Adds an element to the end of an array.
array.pop(): Removes the last element from an array.

var fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);  // Output: ["Apple", "Banana", "Orange"]

fruits.pop();
console.log(fruits);  // Output: ["Apple", "Banana"]
------------------------------------------------
Date Manipulation:

new Date(): Creates a new Date object representing the current date and time.
date.getFullYear(): Returns the year of a Date object.

var today = new Date();
console.log(today);  // Output: Sun Jun 06 2023 10:30:00 GMT+0000 (Coordinated Universal Time)

var year = today.getFullYear();
console.log(year);  // Output: 2023

------------------------------------------------
Type Conversion:

parseInt(string): Converts a string to an integer.
parseFloat(string): Converts a string to a floating-point number.

var numString = "42";
var num = parseInt(numString);
console.log(num);  // Output: 42

var floatString = "3.14";
var floatNum = parseFloat(floatString);
console.log(floatNum);  // Output: 3.14

------------------------------------------------
Error Handling:

try, catch: Handles exceptions or errors in JavaScript code.

try {
  // Code that may throw an error
  var x = 10 / 0;  // Division by zero
  console.log(x);
} catch (error) {
  // Code to handle the error
  console.log("An error occurred:", error);
}

------------------------------------------------
Regular Expressions:

RegExp: Represents a regular expression pattern.
RegExp.test(string): Tests whether a string matches a regular expression pattern.
var pattern = /hello/i;  // Case-insensitive "hello" pattern
var str = "Hello, World!";
var result = pattern.test(str);
console.log(result);  // Output: true

------------------------------------------------
JSON Manipulation:

JSON.stringify(object): Converts an object to a JSON string.
JSON.parse(jsonString): Parses a JSON string and returns an object.

var obj = { name: "John", age: 30 };
var jsonString = JSON.stringify(obj);
console.log(jsonString);  // Output: {"name":"John","age":30}

var newObj = JSON.parse(jsonString);
console.log(newObj.name);  // Output: John

------------------------------------------------
Math Functions:

Math.random(): Generates a random number between 0 and 1.
Math.round(num): Rounds a number to the nearest integer.

var randomNum = Math.random();
console.log(randomNum);  // Output: 0.723456789

var roundedNum = Math.round(3.7);
console.log(roundedNum);  // Output: 4

------------------------------------------------
Conditional (Ternary) Operator:

(condition) ? value1 : value2: Evaluates a condition and returns one of two values based on the result.

var age = 17;
var isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult);  // Output: No

------------------------------------------------
Template Literals:

Template literals allow embedding expressions inside strings using backticks (`).

var name = "Alice";
var age = 25;
var message = `My name is ${name} and I am ${age} years old.`;
console.log(message);  // Output: My name is Alice and I am 25 years old.

------------------------------------------------
Set and Map:

Set: Stores unique values of any type.
Map: Stores key-value pairs.

var set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(set);  // Output: Set {1, 2}

var map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name"));  // Output: John

------------------------------------------------
Spread Operator:

...: Expands elements of an iterable (e.g., an array) or object properties.

var array1 = [1, 2, 3];
var array2 = [...array1, 4, 5];
console.log(array2);  // Output: [1, 2, 3, 4, 5]

var obj1 = { x: 1, y: 2 };
var obj2 = { ...obj1, z: 3 };
console.log(obj2);  // Output: { x: 1, y: 2, z: 3 }

------------------------------------------------
Promises:

Promises are used for asynchronous programming.

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var result = Math.random();
    if (result > 0.5) {
      resolve(result);
    } else {
      reject("Error occurred.");
    }
  }, 2000);
});

promise.then(function(value) {
  console.log("Resolved:", value);
}).catch(function(error) {
  console.log("Rejected:", error);
});

------------------------------------------------
Arrow Functions:

Arrow functions provide a concise syntax for writing anonymous functions.

// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;

console.log(add(2, 3));  // Output: 5

------------------------------------------------
Object Destructuring:

Object destructuring allows you to extract properties from an object and assign them to variables.

const person = { name: "John", age: 30, city: "New York" };

// Traditional Approach
const name = person.name;
const age = person.age;

// Object Destructuring
const { name, age } = person;

console.log(name);  // Output: John
console.log(age);   // Output: 30

------------------------------------------------
Array Destructuring:

Array destructuring allows you to extract elements from an array and assign them to variables.

const numbers = [1, 2, 3, 4, 5];

// Traditional Approach
const first = numbers[0];
const second = numbers[1];

// Array Destructuring
const [first, second] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2

------------------------------------------------
Async/Await:

Async/await is a syntactic sugar for handling promises in an asynchronous manner.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  await delay(2000);
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));

------------------------------------------------
Map, Filter, and Reduce:

These array methods allow you to perform common operations on arrays in a concise manner.

const numbers = [1, 2, 3, 4, 5];

// Map
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

// Reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 15

------------------------------------------------
Module Import/Export:

Modules allow you to organize and share code between different files.

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from "./math.js";

console.log(add(2, 3));       // Output: 5
console.log(subtract(5, 2));  // Output: 3

------------------------------------------------
Object-oriented Programming (OOP):

JavaScript supports object-oriented programming concepts such as classes, objects, and inheritance.

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle("red", 5);
console.log(myCircle.getColor());  // Output: red
console.log(myCircle.getArea());   // Output: 78.53981633974483

------------------------------------------------
Fetch API:

The Fetch API allows making HTTP requests and handling responses.

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

------------------------------------------------
ES Modules:

ES modules are a standardized format for organizing and sharing JavaScript code.

// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from "./math.js";

console.log(add(2, 3));       // Output: 5
console.log(subtract(5, 2));  // Output: 3

------------------------------------------------
Generators:

Generators are functions that can be paused and resumed, allowing the generation of a sequence of values.

function* countDown(start) {
  while (start > 0) {
    yield start;
    start--;
  }
}

const iterator = countDown(5);
console.log(iterator.next().value);  // Output: 5
console.log(iterator.next().value);  // Output: 4
console.log(iterator.next().value);  // Output: 3

------------------------------------------------
Web Workers:

Web Workers allow running JavaScript code in the background to perform tasks without blocking the main thread.

// worker.js
self.onmessage = function(event) {
  const result = event.data * 2;
  self.postMessage(result);
};

// main.js
const worker = new Worker("worker.js");
worker.onmessage = function(event) {
  console.log(event.data);  // Output: 10
};
worker.postMessage(5)

------------------------------------------------
Proxy Objects:

Proxy objects allow intercepting and customizing fundamental operations on objects.

const target = {
  name: "John",
  age: 30
};

const handler = {
  get: function(target, property) {
    console.log("Getting property:", property);
    return target[property];
  },
  set: function(target, property, value) {
    console.log("Setting property:", property);
    target[property] = value;
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name);    // Output: Getting property: name, John
proxy.age = 40;             // Output: Setting property: age
console.log(proxy.age);     // Output: Getting property: age, 40

------------------------------------------------
SetTimeout and SetInterval:

setTimeout(func, delay): Executes a function after a specified delay (in milliseconds).
setInterval(func, delay): Executes a function repeatedly with a fixed delay between each execution.

setTimeout(() => {
  console.log("Delayed message");
}, 2000);  // Output: Delayed message after 2 seconds

let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Counter:", counter);
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);
// Output: Counter: 1, Counter: 2, Counter: 3, Counter: 4, Counter: 5, Interval stopped

------------------------------------------------
Storage APIs:

localStorage: Stores data locally in the web browser with no expiration date.
sessionStorage: Stores data locally within a session, which is deleted when the browser is closed.

// Local Storage
localStorage.setItem("name", "John");
const name = localStorage.getItem("name");
console.log(name);  // Output: John
localStorage.removeItem("name");

// Session Storage
sessionStorage.setItem("age", "30");
const age = sessionStorage.getItem("age");
console.log(age);  // Output: 30
sessionStorage.removeItem("age");

------------------------------------------------
Regular Expressions (RegExp):

Regular expressions are used to search for patterns in strings.
const pattern = /hello/i;  // Case-insensitive "hello" pattern
const str = "Hello, World!";
const result = pattern.test(str);
console.log(result);  // Output: true

const matches = str.match(pattern);
console.log(matches);  // Output: ["Hello"]

------------------------------------------------
Date Formatting (Moment.js):

Moment.js is a popular library for parsing, manipulating, and formatting dates and times.

const date = moment("2022-12-31", "YYYY-MM-DD");
console.log(date.format("MMMM Do YYYY"));  // Output: December 31st 2022

const now = moment();
console.log(now.format("YYYY-MM-DD"));  // Output: Current date in "YYYY-MM-DD" format

------------------------------------------------
Geolocation API:

The Geolocation API allows obtaining the user's current location.

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
  }, error => {
    console.log("Error occurred:", error.message);
  });
} else {
  console.log("Geolocation not supported");
}