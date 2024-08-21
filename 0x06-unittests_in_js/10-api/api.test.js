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

  describe('GET /available_payments', () => {
    it('should return the correct response structure and values', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        if (error) {
          return done(error);
        }
        expect(response.statusCode).to.equal(200);

        const jsonBody = JSON.parse(body);
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
				
				expect(jsonBody).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return the correct welcome message with the username', (done) => {
      request.post(
        {
          url: `${API_URL}/login`,
          body: JSON.stringify({ userName: 'Betty' }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
        (error, response, body) => {
          if (error) {
            return done(error);
          }
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });
  });
});
