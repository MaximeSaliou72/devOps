const Calculator = require("../../exercices/exercice-2-calculator/Calculator.js");


test('Calcul la somem de 2 + 1 =3', () => {
    console.log(new Calculator().add(2, 1));
})