const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi spies', function () {
  let spyUtils, spyConsole;

  beforeEach(() => {
    // Create spies before each test
    spyUtils = sinon.spy(Utils, 'calculateNumber');
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original methods after each test
    spyUtils.restore();
    spyConsole.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with 'SUM', 100, and 20
    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    // Assert that console.log was called with 'The total is: 120'
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
});
