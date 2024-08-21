const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 for inputs 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -4 for inputs 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0.2 for inputs 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" for inputs 1.4 and 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid type', function () {
        it('should throw an error for invalid type', function () {
            assert.throws(() => {
                calculateNumber('INVALID', 1.4, 4.5);
            }, /Invalid type/);
        });
    });
});
