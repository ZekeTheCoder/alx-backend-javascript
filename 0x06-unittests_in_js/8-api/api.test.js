const request = require('request');
const { expect } = require('chai');

describe('basic integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('should return the correct response message', (done) => {
    request.get(`${API_URL}/`, (error, response, body) => {
      if (error) {
        return done(error); // Pass any error to done to fail the test
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
