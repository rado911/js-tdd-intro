function capitalizeFirstLetters(input) {

    if (input.length > 0) {
        return input.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
    }
    else {
        return ""
    }
}

module.exports = capitalizeFirstLetters;