const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi with stubs', function () {
  let stubUtils, spyConsole;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber that always returns 10
    stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Create a spy for console.log
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    stubUtils.restore();
    spyConsole.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with 'SUM', 100, and 20
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    // Assert that console.log was called with 'The total is: 10'
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
