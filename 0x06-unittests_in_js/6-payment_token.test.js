// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  describe('should return a successful response when success is true', function () {
    it('resolved correctly', function (done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('should not resolve or reject if success is false', function () {
    it('should resolve with null', function (done) {
      getPaymentTokenFromAPI(false)
        .then((res) => {
          expect(res).to.be.null;
          done();
        })
        .catch((err) => done(err));
    });
  });
});

