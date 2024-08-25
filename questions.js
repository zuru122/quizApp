export const questions = [

       {
        question: "What does the `push` method do in JavaScript?",
        answers: [
            {text: "Adds an element to the end of an array", correct: true},
            {text: "Removes an element from the end of an array", correct: false},
            {text: "Adds an element to the beginning of an array", correct: false},
            {text: "Removes an element from the beginning of an array", correct: false},
        ]
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        answers: [
            {text: "Object", correct: false},
            {text: "Array", correct: false},
            {text: "String", correct: true},
            {text: "Function", correct: false},
        ]
    },
    {
        question: "What does the `parseFloat` function do in JavaScript?",
        answers: [
            {text: "Converts a string to a floating-point number", correct: true},
            {text: "Converts a string to an integer", correct: false},
            {text: "Converts a number to a string", correct: false},
            {text: "Rounds a number to the nearest integer", correct: false},
        ]
    },
    {
        question: "What does the `parseFloat` function do in JavaScript?",
        answers: [
            {text: "Converts a string to a floating-point number", correct: true},
            {text: "Converts a string to an integer", correct: false},
            {text: "Converts a number to a string", correct: false},
            {text: "Rounds a number to the nearest integer", correct: false},
        ]
    },
    {
        question: "How do you access the second element of an array named `arr`?",
        answers: [
            {text: "arr[2]", correct: false},
            {text: "arr[1]", correct: true},
            {text: "arr.get(2)", correct: false},
            {text: "arr(2)", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        answers: [
            {text: "Refers to the global object", correct: false},
            {text: "Refers to the current object", correct: true},
            {text: "Refers to the parent object", correct: false},
            {text: "Refers to the function itself", correct: false},
        ]
    },
    {
        question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
        answers: [
            {text: "trim()", correct: true},
            {text: "slice()", correct: false},
            {text: "substring()", correct: false},
            {text: "replace()", correct: false},
        ]
    },
    {
        question: "What does the `let` keyword do in JavaScript?",
        answers: [
            {text: "Creates a new function scope", correct: false},
            {text: "Declares a variable that can be reassigned", correct: true},
            {text: "Defines a global variable", correct: false},
            {text: "Declares a constant variable", correct: false},
        ]
    },
    {
        question: "Which method is used to remove the last element from an array?",
        answers: [
            {text: "shift()", correct: false},
            {text: "pop()", correct: true},
            {text: "push()", correct: false},
            {text: "unshift()", correct: false},
        ]
    },
    {
        question: "What is the result of `false == '0'` in JavaScript?",
        answers: [
            {text: "false", correct: true},
            {text: "undefined", correct: false},
            {text: "true", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "How can you create a new object in JavaScript?",
        answers: [
            {text: "Using a JSON object", correct: false},
            {text: "By assigning properties to a variable", correct: false},
            {text: "Using the `new Object()` syntax", correct: true},
            {text: "Using `Object.create()`", correct: false},
        ]
    },
    {
        question: "What does `JSON.stringify()` do?",
        answers: [
            {text: "Parses a JSON string into a JavaScript object", correct: false},
            {text: "Creates a new JSON object", correct: false},
            {text: "Converts a JavaScript object to a JSON string", correct: true},
            {text: "Checks if a string is valid JSON", correct: false},
        ]
    },
    {
        question: "What is the `bind()` method used for in JavaScript?",
        answers: [
            {text: "To create a new object", correct: false},
            {text: "To execute a function immediately", correct: false},
            {text: "To create a new function with a specific `this` value", correct: true},
            {text: "To bind variables to a function", correct: false},
        ]
    },
    {
        question: "What is the output of `typeof []` in JavaScript?",
        answers: [
            {text: "undefined", correct: false},
            {text: "null", correct: false},
            {text: "object", correct: true},
            {text: "array", correct: false},
        ]
    },
    {
        question: "How do you define a class in JavaScript?",
        answers: [
            {text: "function MyClass() {}", correct: false},
            {text: "class MyClass {}", correct: true},
            {text: "define MyClass {}", correct: false},
            {text: "new MyClass() {}", correct: false},
        ]
    },
    {
        question: "What does the `map()` method do with arrays?",
        answers: [
            {text: "Removes elements from the array", correct: false},
            {text: "Filters elements based on a condition", correct: false},
            {text: "Sorts the elements in the array", correct: false},
            {text: "Creates a new array with the results of applying a function to each element", correct: true},
        ]
    },
    {
        question: "What is the output of `0.1 + 0.2 == 0.3` in JavaScript?",
        answers: [
            {text: "NaN", correct: false},
            {text: "true", correct: false},
            {text: "undefined", correct: false},
            {text: "false", correct: true},
        ]
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        answers: [
            {text: "let myVar = value;", correct: false},
            {text: "var myVar = value;", correct: false},
            {text: "const myVar = value;", correct: true},
            {text: "constant myVar = value;", correct: false},
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            {text: "A function that returns another function", correct: false},
            {text: "A method to bind variables to a function", correct: false},
            {text: "A function that retains access to its lexical scope even after its execution context has exited", correct: true},
            {text: "A way to create private properties", correct: false},
        ]
    },
    {
        question: "What does the `reduce()` method do with arrays?",
        answers: [
            {text: "Filters elements based on a condition", correct: false},
            {text: "Creates a new array with modified elements", correct: false},
            {text: "Sorts the elements in the array", correct: false},
            {text: "Executes a reducer function on each element, resulting in a single output value", correct: true},
        ]
    },
    {
        question: "How can you access the last element of an array in JavaScript?",
        answers: [
            {text: "array[array.length]", correct: false},
            {text: "array[array.size - 1]", correct: false},
            {text: "array.last()", correct: false},
            {text: "array[array.length - 1]", correct: true},
        ]
    },
    {
        question: "What is the purpose of the `async` keyword in JavaScript?",
        answers: [
            {text: "To handle errors in a function", correct: false},
            {text: "To create a generator function", correct: false},
            {text: "To execute a function synchronously", correct: false},
            {text: "To define an asynchronous function that returns a promise", correct: true},
        ]
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        answers: [
            {text: "`==` compares values with type coercion, `===` compares values and types without coercion", correct: true},
            {text: "`==` is stricter than `===`", correct: false},
            {text: "`==` compares objects, `===` compares primitive types", correct: false},
            {text: "`==` is for numbers, `===` is for strings", correct: false},
        ]
    },
    {
        question: "What is a promise in JavaScript?",
        answers: [
            {text: "A function that returns another function", correct: false},
            {text: "An object representing the eventual completion or failure of an asynchronous operation", correct: true},
            {text: "A method to create synchronous operations", correct: false},
            {text: "A way to declare a constant value", correct: false},
        ]
    },
    {
        question: "How can you prevent a form from submitting in JavaScript?",
        answers: [
            {text: "Use `return false` in the submit event handler", correct: false},
            {text: "Use `form.stopSubmission()`", correct: false},
            {text: "Set the form's `action` attribute to `#`", correct: false},
            {text: "Use `event.preventDefault()` in the submit event handler", correct: true},
        ]
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        answers: [
            {text: "variable.isArray()", correct: false},
            {text: "Array.isArray(variable)", correct: true},
            {text: "typeof variable === 'array'", correct: false},
            {text: "variable instanceof Array", correct: false},
        ]
    },
    {
        question: "What does `Object.keys()` do in JavaScript?",
        answers: [
            {text: "Creates a new object with specified keys", correct: false},
            {text: "Checks if an object has specific keys", correct: false},
            {text: "Returns the values of the object's properties", correct: false},
            {text: "Returns an array of a given object's own enumerable property names", correct: true},
        ]
    },
    {
        question: "What is the use of `Array.prototype.slice()`?",
        answers: [
            {text: "Merges two arrays into one", correct: false},
            {text: "Modifies the original array by removing elements", correct: false},
            {text: "Returns a shallow copy of a portion of an array into a new array object", correct: true},
            {text: "Sorts the array in place", correct: false},
        ]
    },
        {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        answers: [
            {text: "It refers to the current function", correct: false},
            {text: "It refers to the global object", correct: false},
            {text: "It refers to the object that is currently executing the code", correct: true},
            {text: "It refers to the previous object", correct: false},
        ]
    },
    {
        question: "How do you add a new property to an object in JavaScript?",
        answers: [
            {text: "object.property = value;", correct: true},
            {text: "object.addProperty(property, value);", correct: false},
            {text: "object.setProperty(property, value);", correct: false},
            {text: "object.push(property, value);", correct: false},
        ]
    },
    {
        question: "What does the `typeof` operator do in JavaScript?",
        answers: [
            {text: "Checks if a variable is an object", correct: false},
            {text: "Returns a string indicating the type of the unevaluated operand", correct: true},
            {text: "Converts a value to a string", correct: false},
            {text: "Determines if a value is null or undefined", correct: false},
        ]
    },
    {
        question: "Which method is used to sort elements in an array?",
        answers: [
            {text: "array.order()", correct: false},
            {text: "array.sort()", correct: true},
            {text: "array.arrange()", correct: false},
            {text: "array.shuffle()", correct: false},
        ]
    },
    {
        question: "How can you find the length of an array in JavaScript?",
        answers: [
            {text: "array.length", correct: true},
            {text: "array.size", correct: false},
            {text: "array.count()", correct: false},
            {text: "array.getLength()", correct: false},
        ]
    },
    {
        question: "What is the purpose of the `setTimeout()` function?",
        answers: [
            {text: "To execute a function after a specified delay", correct: true},
            {text: "To execute a function at regular intervals", correct: false},
            {text: "To delay the execution of a function indefinitely", correct: false},
            {text: "To execute a function immediately", correct: false},
        ]
    },
    {
        question: "What is the result of `'' + 1 + 0` in JavaScript?",
        answers: [
            {text: "1", correct: false},
            {text: "10", correct: true},
            {text: "01", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        question: "What does `Object.assign()` do?",
        answers: [
            {text: "Creates a new object with the same properties", correct: false},
            {text: "Assigns properties from one or more source objects to a target object", correct: true},
            {text: "Merges two arrays into one", correct: false},
            {text: "Deletes properties from an object", correct: false},
        ]
    },
    {
        question: "How do you create a new array from an existing array with each element doubled?",
        answers: [
            {text: "array.map(x => x * 2);", correct: true},
            {text: "array.reduce(x => x * 2);", correct: false},
            {text: "array.forEach(x => x * 2);", correct: false},
            {text: "array.filter(x => x * 2);", correct: false},
        ]
    },
    {
        question: "What is the output of `1 + '1'` in JavaScript?",
        answers: [
            {text: "2", correct: false},
            {text: "11", correct: true},
            {text: "NaN", correct: false},
            {text: "undefined", correct: false},
        ]
    },
    {
        question: "How do you check if a variable is an integer in JavaScript?",
        answers: [
            {text: "Number.isInteger(variable);", correct: true},
            {text: "typeof variable === 'integer';", correct: false},
            {text: "variable.isInteger();", correct: false},
            {text: "isInteger(variable);", correct: false},
        ]
    },
    {
        question: "What does the `splice()` method do with arrays?",
        answers: [
            {text: "Adds elements to an array", correct: false},
            {text: "Removes or replaces elements from an array", correct: true},
            {text: "Sorts the array", correct: false},
            {text: "Creates a shallow copy of the array", correct: false},
        ]
    },
    {
        question: "How can you access a specific character in a string?",
        answers: [
            {text: "string.charAt(index);", correct: true},
            {text: "string(index);", correct: false},
            {text: "string.get(index);", correct: false},
            {text: "string[indexOf(index)];", correct: false},
        ]
    },
    {
        question: "What does `Array.prototype.concat()` do?",
        answers: [
            {text: "Merges two or more arrays into one", correct: true},
            {text: "Filters elements based on a condition", correct: false},
            {text: "Sorts the elements in an array", correct: false},
            {text: "Returns the length of an array", correct: false},
        ]
    },
    {
        question: "How can you prevent a default action in an event handler?",
        answers: [
            {text: "event.stopPropagation();", correct: false},
            {text: "event.preventDefault();", correct: true},
            {text: "event.cancel();", correct: false},
            {text: "event.ignore();", correct: false},
        ]
    },
    {
        question: "What is the output of `Boolean('false')`?",
        answers: [
            {text: "false", correct: false},
            {text: "true", correct: true},
            {text: "undefined", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "How do you create a new promise in JavaScript?",
        answers: [
            {text: "new Promise((resolve, reject) => {});", correct: true},
            {text: "Promise.create((resolve, reject) => {});", correct: false},
            {text: "Promise.new((resolve, reject) => {});", correct: false},
            {text: "new AsyncPromise((resolve, reject) => {});", correct: false},
        ]
    },
    {
        question: "What is the `fetch()` function used for?",
        answers: [
            {text: "To perform an HTTP request", correct: true},
            {text: "To update the DOM", correct: false},
            {text: "To create a new array", correct: false},
            {text: "To handle exceptions", correct: false},
        ]
    },
    {
        question: "What does `Array.prototype.filter()` do?",
        answers: [
            {text: "Creates a new array with all elements that pass a test", correct: true},
            {text: "Adds elements to the end of an array", correct: false},
            {text: "Sorts the elements in an array", correct: false},
            {text: "Removes elements from an array", correct: false},
        ]
    },
    {
        question: "What is the result of `[] == ![]` in JavaScript?",
        answers: [
            {text: "true", correct: true},
            {text: "false", correct: false},
            {text: "undefined", correct: false},
            {text: "NaN", correct: false},
        ]
    },
    {
        question: "How do you create an empty object in JavaScript?",
        answers: [
            {text: "var obj = {}; // Empty object", correct: true},
            {text: "var obj = new Object{}; // Empty object", correct: false},
            {text: "var obj = []; // Empty object", correct: false},
            {text: "var obj = null; // Empty object", correct: false},
        ]
    },
    {
        question: "How do you clone an object in JavaScript?",
        answers: [
            {text: "Object.clone(obj);", correct: false},
            {text: "Object.assign({}, obj);", correct: true},
            {text: "obj.clone();", correct: false},
            {text: "Array.from(obj);", correct: false},
        ]
    }
];
