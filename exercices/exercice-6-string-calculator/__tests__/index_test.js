let Calculator = require("../src/calculator.js");

test('retourne 0 si chaine vide', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
});

test('retourne un nombre', () => {
    const calculator = new Calculator();
    expect(calculator.add('3')).toBe(3);
});

test('Additionne les nombres séparer par une virgule', () => {
    const calculator = new Calculator();
    expect(calculator.add('3,4,2')).toBe(9);
});

test('Additionne la somme de plusieurs nombres avec virgules et sauts de ligne', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2\n3')).toBe(6);
});