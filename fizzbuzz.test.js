const fizzBuzz = require('./fizzbuzz');

describe ('fizzBuzz', () => {
  it('returns FizzBuzz when number is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns Fizz when number is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz when number is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns the number otherwise', () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});