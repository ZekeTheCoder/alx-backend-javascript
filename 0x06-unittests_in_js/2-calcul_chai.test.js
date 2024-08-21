const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 6 for type SUM with inputs 1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for type SUBTRACT with inputs 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 for type DIVIDE with inputs 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for type DIVIDE with inputs 1.4 and 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
  });

  it('should handle negative numbers correctly', () => {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    expect(calculateNumber('DIVIDE', -1, -2.1)).to.equal(0.5);
		expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
  });

  it('should handle NaN cases', () => {
    expect(calculateNumber('SUM', 'not a number', 3)).to.be.NaN;
    expect(calculateNumber('SUM', 1, 'not a number')).to.be.NaN;
    expect(calculateNumber('SUM')).to.be.NaN;
  });
});
