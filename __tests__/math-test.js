// Load the file that exports the functionality to test
jest.dontMock('../app/math');  // Don't create mock functions
var math = require('../app/math');

// Test to verify the math.sum() function
describe('sum', function() {
  it('defines a sum function', function() {
    expect(math.sum).toBeDefined();
  });

  it('adds 5 + 2 to equal 7', function() {
    expect(math.sum(2, 5)).toBe(7);
  });
});

// Test to verify the math.difference() function
describe('difference', function() {
  it('subtracts 5 - 2 to equal 3', function() {
    expect(math.difference(5, 2)).toBe(3);
  });
});

// Test to verify the math.product() function
describe('product', function() {
  it('mutiplies 2 * 5 to equal 10', function() {
    expect(math.product(2, 5)).toBe(10);
  });
});

// Test to verify the math.quotient() function
describe('quotient', function() {
  it('divides 10 / 2 to equal 5', function() {
    expect(math.quotient(10, 2)).toBe(5);
  });
});

//Test to verify the math.checkWordCount() function
describe('checkWordCount', function() {
  it('should return false if a string has more than 100 words in it', function() {
    expect(math.checkWordCount('greetings! one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten one two three four five six seven eight nine ten')).toBe(false);
  });
});

describe('duplicateCheck', function() {
  it('should returnfalse if a string has duplicate words in it', function() {
    expect(math.duplicateCheck('hey hey')).toBe(false);
  });
});

describe('verifyAlphaNumeric', function() {
  it('should return false if there are any non-alphanumeric characters in a string', function() {
    expect(math.verifyAlphaNumeric('Hello !!!&%')).toBe(false);
  });
});














