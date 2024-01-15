let Calculator = require("../src/calculator.js");

test('adds 1 + 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.add(1 , 2)).toBe(3);
});

