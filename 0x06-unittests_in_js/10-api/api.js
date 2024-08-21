const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const responseObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  
  // Convert the object to a pretty-printed JSON string
  const prettyPrintedJson = JSON.stringify(responseObject, null, 2);
  
  // Send the pretty-printed JSON string as the response
  res.type('json').send(prettyPrintedJson);
	// res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

// app.use((req, res) => {
//   res.status(404).send('Not Found');
// });

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
