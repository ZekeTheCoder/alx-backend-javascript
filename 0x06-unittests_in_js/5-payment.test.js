const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi with hooks', function () {
  let spyConsole;

  beforeEach(() => {
    // Create a spy for console.log before each test
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    spyConsole.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with 'The total is: 120'
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with 'The total is: 20'
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});