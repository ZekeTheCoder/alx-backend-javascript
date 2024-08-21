const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    describe('Two Integers', function () {
        it('should return 4 for inputs 1 and 3', function () {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });

        it('should return 5 for inputs 1 and 3.7', function () {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
        });

        it('should return 5 for inputs 1.2 and 3.7', function () {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });

        it('should return 6 for inputs 1.5 and 3.7', function () {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });

        it('should return 6 for inputs 3.7 and 1.5', function () {
            assert.strictEqual(calculateNumber(3.7 ,1.5), 6);
        });
    });

    describe('Negative Numbers', function () {
        it('should return 2 for inputs -1 and 3', function () {
            assert.strictEqual(calculateNumber(-1, 3), 2);
        });

        it('should return -3 for inputs 1 and -3.7', function () {
            assert.strictEqual(calculateNumber(1, -3.7), -3);
        });

        it('should return 3 for inputs -1.2 and 3.7', function () {
            assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
        });

        it('should return -5 for inputs -1.5 and -3.7', function () {
            assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
        });

        it('should return -5 for inputs -3.7 and -1.5', function () {
            assert.strictEqual(calculateNumber(-3.7,-1.5), -5);
        });
    });

    describe('Invalid Arguments', function () {
  			it('should return NaN for no arguments', function () {
  					assert.strictEqual(Number.isNaN(calculateNumber()), true);
  			});

        it('should return NaN for a single argument', function () {
            assert.strictEqual(Number.isNaN(calculateNumber(1)), true);
        });

				it('should return NaN for not a number argument and a number argument', function () {
					assert.strictEqual(Number.isNaN(calculateNumber('string', 3)), true);
					assert.strictEqual(Number.isNaN(calculateNumber(1, 'string')), true);
				});

				it('should return NaN for arguments that are not a number', function () {
					assert.strictEqual(Number.isNaN(calculateNumber('string', 'string')), true);
			  });
    });
});
