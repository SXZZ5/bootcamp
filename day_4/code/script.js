/******************************************************
 Question 1
 *****************************************************/
const add = (a, b) => (a + b);


/******************************************************
 Question 2
 *****************************************************/
function greet(name, message = "Welcome!") {
    console.log(`Hello, ${name}`);
}

/******************************************************
 Question 3
 *****************************************************/
function formatString(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

/******************************************************
 Question 4
 *****************************************************/
const person = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'New York',
        country: 'NY'
    }
};

var {name, _, address} = person;
var {city, country} = address;
console.log(`${name} lives in ${city}`);

/******************************************************
 Question 5
 *****************************************************/
function sumAll(...numbers) {
    let sum = 0;
    numbers.forEach((number) => sum = sum + number)
    console.log(sum);
    return sum;
}

/******************************************************
 Question 6
 *****************************************************/
function filterEvens(numbers) {
    return numbers.filter((number) => {
        if ((number % 2) == 0) return true;
        else return false;
    });
}

/******************************************************
 Question 7
 *****************************************************/
function doubleValues(numbers) {
    return numbers.map((number) => number * 2);
}

/******************************************************
 Question 8
 *****************************************************/
function findMax(numbers) {
    return Math.max(...numbers)
}

/******************************************************
 Question 9
 *******************************************************/
const data = [
    {
        name: "Bob",
        age: 24
    },
    {
        name: "Alice",
        age: 21
    }
]
var [{__, age}, {name, __}] = data;
console.log(`${name}'s age is ${age}`);

/******************************************************
 Question 10
 *******************************************************/
function question10(arr) {
    return arr.map((obj) => {
        let {
            id,
            title,
            _x,
            _y,
            _z,
            _w,
            rating: {
                rate,
                count
            }
        } = obj;
        return {id, title, rate, count};
    });
}


/******************************************************
 Question 11
 *******************************************************/
// output will be "else" because empty string is a falsy value

/******************************************************
 Question 12
 *******************************************************/
function deepClone(obj) {
    return structuredClone(obj);
}

/*******************************************************
 Question 13
 *******************************************************/
function flattenNestedArr(arr) {
    let result = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            result = result.concat(flattenNestedArr(elem));
        } else {
            result.push(elem);
        }
    });
    return result;
}

