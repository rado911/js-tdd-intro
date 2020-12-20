const assert = require('assert')
const capitalizeFirstLetters = require('../capitalizeFirstLetters')

describe('capitalizeFirstLettrs', () => {

    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1)
    })

    it('transforms one two three four correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('one two three four five'), 'One Two Three Four Five');
    })

    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('a'), 'A');
    })

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    })
})



capitalizeFirstLetters('Now you can test your function!')