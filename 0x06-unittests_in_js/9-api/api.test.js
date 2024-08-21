const request = require('request');
const { expect } = require('chai');

const API_URL = 'http://localhost:7865';

describe('basic integration test', () => {
  it('should return the correct response message for the index page', (done) => {
    request.get(`${API_URL}/`, (error, response, body) => {
      if (error) {
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('should return the correct response message for a valid id', (done) => {
      request.get(`${API_URL}/cart/12`, (error, response, body) => {
        if (error) {
          return done(error);
        }
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for an invalid id', (done) => {
      request.get(`${API_URL}/cart/hello`, (error, response) => {
        if (error) {
          return done(error);
        }
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

