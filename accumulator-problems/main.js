/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
//input:Array

function sum(array) {
    var result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

sum([1, 2, 3]);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

//input: array

function doubleNumbers(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 2;
    }
    return result;
}

doubleNumbers([1, 2, 3]);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

//input is an array and a multiplier(integer)
//result is an array
function multiplyNumbers(arr, num) {
    var result = [];

    for (i = 0; i < arr.length; i++) {
        result[i] = arr[i] * num;
    }
    return result;
}


multiplyNumbers([1, 2, 3], 5); //[5,10,15]




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
// input is and string
// output is an string

function doubleLetters(string) {
    var result = '';
    for (i = 0; i < string.length; i++) {
        result += string[i] + string[i];
    }
    return result;
}


doubleLetters('abc'); //aabbcc





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/
//input is two arrays
//output is one array
//if result without the [i] then it only displays the last index concatinated,why?

function interleave(arr1, arr2) {
    var result = [];

    for (i = 0; i < arr1.length; i++) {
        // result[i] = arr1[i] + arr2[i];
        result.push(arr1[i], arr2[i]);
    }
    return result;
}



interleave(['a', 'b', 'c'], ['d', 'e', 'f']); // current result is ["ad", "be", "cf"]






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/
//input is an integer and a string.

function createRange(number, phrase) {

    var result = [];

    for (i = 0; i < number; i++) {
        result.push(phrase)
        // result[i] = phrase;
    }
    return result;
}



createRange(4, "hello");


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/
//input is an array


function flipArray(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        result[arr[i]] = i;
    }
    return result;
}

flipArray(["quick", "brown", "fox"]);

//if I want to call values in the object i just created how do I do that? What is the object called?


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
//input is an array of arrays.
//output is an object.

function arraysToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    return obj;
}

arraysToObject([
    [2014, "Horse"],
    [2015, "Sheep"]
]);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

//input is string

function reverseString(str) {
    var revstr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        revstr += str[i];
    }
    return revstr;
}

reverseString('hannah');







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/
// str.slice(0,str.length/2);  will equal half of the string.

function repeats(str) {
    if (str === '') {
        return true;
    } else if (str.slice(str.length / 2) === str.slice(0, str.length / 2)) {
        return true;
    } else {
        return false;
    }
}

repeats('haha')


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/


// iterate by i+=2,

//input is a string

function everyOther(s) {
    result = '';
    for (i = 0; i < s.length; i += 2) {
        result += s[i];
    }
    return result;
}

everyOther('abcdef');



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(letters) {
    letters.split('', letters.length);
    if (letters === "") {
        return true;
    }
    for (i = 1; i < letters.length; i++) {
        if (letters[i] === letters[i - 1]) {
            return true;
        } else {
            return false;
        }
    }
}

allEqual('abaa');


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/

function sumLetters(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
sumLetters('45');



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(str) {
    var vowels = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowels++
        }
    }
    return vowels
}

countVowels('you')






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(str) {
    var arr = []
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    return arr
}


split('you')



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/


function getCodePoints(str) {
    var codePoints = []
    for (let i = 0; i < str.length; i++) {
        codePoints.push(str[i].codePointAt())
    }

    return codePoints
}

getCodePoints('Hello')





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(str) {
    var obj = {};

    for (i = 0; i < str.length; i++) {
        obj[str[i]] = i;
    }
    return obj;
}

letterMap("Jonny");



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(str) {
    var object = {}

    for (let i = 0; i < str.length; i++) {
        if (object[str[i]]) {
            object[str[i]]++
        } else {
            object[str[i]] = 1
        }
    }
    return object
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2) {

    var odds = 0

    for (let i = num1; i < num2; i++) {
        if (i % 2 !== 0) {
            odds++
        }
    }
    if (odds >= 3) {
        return true
    } else {
        return false
    }
}

threeOdds(0, 6)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(str, length, pad) {
    var result = ''

    for (i = 0; i < length - str.length; i++) {
        result += pad
    }

    if (str.length > length) {
        result = str
    } else {
        result += str
    }
    return result
}

leftPad('a', 3, '*')




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bbb"
*/
function createString(n, l) {
    var str = ''
    for (i = 0; i < n; i++) {
        str += l
    }
    return str
}

createString(1, 'a')




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

//inpit is a number

function factorial(num) {
    var result = 1
    var newArray = []
    for (i = num; i > 0; i--) {
        newArray.push(i) // notice that you dont need to have result= after each loop. This loop just sets up the next loop.
    }
    for (i = 0; i < newArray.length; i++) {
        result *= newArray[i] // do you need to reassign the i var to somthing else? No i is unique to each loop.
    }
    return result
}

factorial(5);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(num) {
    result = [];
    for (i = num; i > 0; i--) {
        result.unshift(i)
    }
    return result
}

arrayOfNumbers(6);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/


function evenOdd(a, b) {
    var obj = {};
    for (i = a; i <= b; i++) {
        if (a === 0 && b === 0) {
            return obj;
        } else if (i % 2 === 0) {
            obj[i] = "even";
        } else {
            obj[i] = "odd";
        }
    }
    return obj;
}

evenOdd(2, 4);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(num, str) {
    obj = {}
    var str2 = ''
    for (i = 0; i < num; i++) {
        str2 += str
        obj[str2] = true
    }
    return obj;
}

growingKeys(3, "d");







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(arr, num) {
    var result = true
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            return false;
        }
    }
    return result
}
every([1, 1], 1);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(arr, num) {
    var result = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return result;
}

some([1, 2], 2);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(arr) {

    var sentence = ''

    for (i = 0; i < arr.length; i++) {
        if (i < arr.length - 2) {
            sentence += arr[i] + ', '
        } else if (i > arr.length - 2) {
            sentence += arr[arr.length - 2] + ' and ' + arr[arr.length - 1]
        }
    }
    return sentence
}

toSentence(["Sue", "Will", "Rachel"])



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array) {
    var string = ''

    for (let i = 0; i < array.length; i++) {
        string += array[i][0]
    }
    return string
}

acronym(["Java", "Script", "Object", "Notation"])






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(arr) {
    var minimum = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] <= minimum) {
            minimum = arr[i]
        } else if (arr === []) {
            minimum = undefined
        }
    }
    return minimum
}

min([0, -3, 2, 5])





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {
1: {id: 1, name: "Joe"},
2: {id: 2, name: "Sue"}
}

*/

function index(arr, prop) {
    var obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][prop]] = arr[i]
    }
    return obj
}


index([{
    id: 1,
    name: "Joe"
}, {
    id: 2,
    name: "Sue"
}], 'id')



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(obj) {
    var result = {}

    for (var key in obj) {
        result[obj[key]] = key // example: key = 'id' , obj[key] = 1 then you set result[1] = 'id'
    }
    return result
}

invert({
    id: 1,
    name: "Joe"
})




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, obj) {
    var result = {}

    for (var key in obj) {
        result[key + "-signed"] = obj[key] + ' - ' + name
    }
    return result
}


addSignature('Fred', {
    "contract": "foo"
})



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(obj) {
    var arr = []

    for (var key in obj) {
        arr.push(key + ' - ' + obj[key])
    }
    return arr
}

pairs({
    name: 'Will',
    age: 24
})




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(obj) {
    var sum = 0

    for (var key in obj) {
        sum += obj[key]
    }
    return sum
}

sumValues({
    a: 1,
    b: 2
})




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/


function biggestProperty(obj) {
    var bigNum = 0
    var bigValue

    for (key in obj) {

        if (obj[key] > bigNum) {
            bigNum = obj[key]
            bigValue = key
        }
    }
    return bigValue
}

biggestProperty({
    1999: 4036,
    2000: 7654
})






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(obj, value) {
    var prop

    for (key in obj) {
        if (obj[key] === value) {
            prop = key
        }
    }
    return prop
}

keyForValue({
    1999: 4036,
    2000: 7654
}, 4036)



console.log('test')
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(obj, value) {

    var result = false

    for (key in obj) {
        if (obj[key] === value) {
            result = true
        }
    }
    return result
}
containsValue({
    1999: 4036,
    2000: 7654
}, 4036)
