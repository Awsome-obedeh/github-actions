
const math = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(math.add(2, 3)).toBe(5);
});

test('subtracts 7 - 4 to equal 3', () => {
  expect(math.subtract(7, 4)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(math.multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(math.divide(10, 2)).toBe(5);
});

test('throws error on divide by zero', () => {
  expect(() => math.divide(10, 0)).toThrow('Cannot divide by zero');
});

test('modulus 10 % 3 to equal 1', () => {
  expect(math.modulus(10, 3)).toBe(1);
});

test('power 2 ^ 4 to equal 16', () => {
  expect(math.power(2, 4)).toBe(16);
});

test('average of 10 and 20 to equal 15', () => {
  expect(math.average(10, 20)).toBe(15);
});

