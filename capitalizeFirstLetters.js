const assert = require('assert')


function capitalizeFirstLetters(input) {

    if (input.length > 0) {
        return input.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
    }
    else {
        return ""
    }
}

console.log(capitalizeFirstLetters('radovan wilczek is stupid'))