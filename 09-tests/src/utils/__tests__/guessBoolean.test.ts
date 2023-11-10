import { guessBoolean } from "../guessBoolean"

describe('guessBoolean func', () => {
    describe('string', () => {

        it('should return true if "true" provided', () => {
            expect(guessBoolean('true')).toBe(true)
        })

        it('should return true if "True" provided', () => {
            expect(guessBoolean('True')).toBe(true)
        })

        it('should return true if "TrUe" provided', () => {
            expect(guessBoolean('TrUe')).toBe(true)
        })

        it('should return true if "1" provided', () => {
            expect(guessBoolean('1')).toBe(true)
        })

        it('should return true if "yes" provided', () => {
            expect(guessBoolean('yes')).toBe(true)
        })

        it('should return true if "yEs" provided', () => {
            expect(guessBoolean('yEs')).toBe(true)
        })

        it('should return false if "true1" provided', () => {
            expect(guessBoolean('true1')).toBe(false)
        })

        it('should return false if "false" provided', () => {
            expect(guessBoolean('false')).toBe(false)
        })

        it('should return false if "10" provided', () => {
            expect(guessBoolean('10')).toBe(false)
        })

        it('should return false if "no" provided', () => {
            expect(guessBoolean('no')).toBe(false)
        })

        it('should return false if "nO" provided', () => {
            expect(guessBoolean('nO')).toBe(false)
        })
    })

    describe('numbers', () => {

        it('should return true if 1 provided', () => {
            expect(guessBoolean(1)).toBe(true)
        })

        it('should return false if 0 provided', () => {
            expect(guessBoolean(0)).toBe(false)
        })

        it('should return true if 10 provided', () => {
            expect(guessBoolean(10)).toBe(true)
        })

        it('should return true if 1098798797789 provided', () => {
            expect(guessBoolean(1098798797789)).toBe(true)
        })
    })

    describe('boolean', () => {

        it('should return true if true provided', () => {
            expect(guessBoolean(true)).toBe(true)
        })

        it('should return false if false provided', () => {
            expect(guessBoolean(false)).toBe(false)
        })
    })

    describe('object,array', () => {

        it('should return true if not empty array provided', () => {
            expect(guessBoolean(['Apple', 'Orange', 'Banana'])).toBe(true)
        })

        it('should return false if empty array provided', () => {
            expect(guessBoolean([])).toBe(false)
        })

        it('should return true if not an empty object provided', () => {
            expect(guessBoolean({ animal: 'dog', age: 3 })).toBe(true)
        })

        it('should return false if an empty object provided', () => {
            expect(guessBoolean({})).toBe(false)
        })
    })

    describe('null,undefined', () => {

        it('should return false if null provided', () => {
            expect(guessBoolean(null)).toBe(false)
        })

        it('should return false if undefined provided', () => {
            expect(guessBoolean(undefined)).toBe(false)
        })
    })

})