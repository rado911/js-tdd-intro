const assert = require('assert')


function capitalizeFirstLetters(input) {

    if (input.length > 0) {
        return input.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
    }
    else {
        return ""
    }
}

//first check if capitalizeFirstLetters is a function

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

//check if this function converts a string with several words

assert.strictEqual(capitalizeFirstLetters('one two three four five'), 'One Two Three Four Five');

//check if this function converts a single word of single letter

assert.strictEqual(capitalizeFirstLetters('a'), 'A');

//as last check if this function works when input is an empty string


assert.strictEqual(capitalizeFirstLetters(''), '');


capitalizeFirstLetters('Now you can test your function!')