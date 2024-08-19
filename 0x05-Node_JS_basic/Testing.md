Testing your Node.js code with Jest and Mocha requires setting up your test environment and writing appropriate test cases. Below are steps to test the displayMessage function using both Jest and Mocha.

1. Testing with Jest
Step 1: Install Jest (if not already installed)
Make sure you have Jest installed as a dev dependency. If it's not listed in your package.json, you can install it with:
`npm install --save-dev jest`

Step 2: Write the Test Case
Create a new file named 0-console.test.js in the same directory as 0-console.js:
```
// 0-console.test.js
const displayMessage = require('./0-console');

// Mock console.log to capture the output
console.log = jest.fn();

test('displayMessage prints the correct message to STDOUT', () => {
  displayMessage("Hello NodeJS!");
  expect(console.log).toHaveBeenCalledWith("Hello NodeJS!");
});
```

Step 3: Run the Test
Run the test using Jest by executing:
`npm run test
`
If Jest is set up correctly in your package.json, the test should pass and you will see an output like:
```PASS  ./0-console.test.js
✓ displayMessage prints the correct message to STDOUT```

2. Testing with Mocha
Step 1: Install Mocha and Chai (if not already installed)
If Mocha and Chai are not listed in your package.json, install them with:
`npm install --save-dev mocha chai`

Step 2: Write the Test Case
Create a new file named 0-console.mocha.test.js:
```
// 0-console.mocha.test.js
const { expect } = require('chai');
const displayMessage = require('./0-console');

// Mock console.log to capture the output
const sinon = require('sinon');
let consoleSpy;

describe('displayMessage', () => {
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should print the correct message to STDOUT', () => {
    displayMessage("Hello NodeJS!");
    expect(consoleSpy.calledWith("Hello NodeJS!")).to.be.true;
  });
});
```

Step 3: Run the Test
Run the test using Mocha by executing:

`npx mocha 0-console.mocha.test.js`

You should see an output indicating the test passed:
```  displayMessage
    ✓ should print the correct message to STDOUT```

Summary
Jest is easier to set up with mock functions like jest.fn() and is integrated with snapshot testing, making it a popular choice for JavaScript projects.

Mocha combined with Chai and Sinon gives you flexibility and power, especially in more complex scenarios. Mocha is more modular, allowing you to pick and choose libraries for different needs.

Both testing frameworks can be used, but it often comes down to personal preference or the specific needs of your project.