function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return Promise.resolve(null); 
	// return Promise.reject(new Error('Failed'));
}

module.exports = getPaymentTokenFromAPI;
