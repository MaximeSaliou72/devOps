let FizzBuzz = require("../src/fizzBuzz.js");

test('retourne FizzBuz si le resultat est un multiple de 3 et 5', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getMultiple(15)).toBe('FizzBuzz');
    expect(fizzBuzz.getMultiple(30)).toBe('FizzBuzz');
});

test('retourne Fizz si le resultat est un multiple de 3', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getMultiple(3)).toBe('Fizz');
    expect(fizzBuzz.getMultiple(9)).toBe('Fizz');
});


test('retourne Buzz si le resultat est un multiple de 5', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getMultiple(5)).toBe('Buzz');
    expect(fizzBuzz.getMultiple(10)).toBe('Buzz');
});

test('retourne le nombre lui-même pour les autres nombres mais sous forme de chaine', () => {
    const fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.getMultiple(1)).toBe('1');
    expect(fizzBuzz.getMultiple(19)).toBe('19');
});