let Calculator = require("../src/calculator.js");

test('retourne 0 si chaine vide', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
});

test('retourne un nombre', () => {
    const calculator = new Calculator();
    expect(calculator.add('3')).toBe(3);
});

test('retourne plusieurs nombres séparé par une virgule', () => {
    const calculator = new Calculator();
    expect(calculator.add('3,4,2')).toEqual([3, 4, 2]);
});