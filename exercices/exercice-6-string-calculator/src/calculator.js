module.exports = class Calculator {
    constructor() {
    }

    add(stringNumber) {
        // Chaine vide
        if (!stringNumber) {
            return 0;
        }
        
        // verifie si ne contient pas une virgule
        if (!stringNumber.includes(',')) {
            return parseInt(stringNumber, 10);
        }

        // Si contient une virgule
        if (stringNumber.includes(',')) {
            return stringNumber.split(',').map(num => parseInt(num, 10));
        }

    }

}