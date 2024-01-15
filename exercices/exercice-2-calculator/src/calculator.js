module.exports = class Calculator {
    constructor(precision) {
        this.precision = precision;
    }

    add(a, b) {
        return parseFloat((a + b).toFixed(this.precision));
    }

    division(a, b) {
        if (b === 0.0) {
            throw new Error("Impossible de diviser par zéro");
        }

        return parseFloat((a / b).toFixed(this.precision));
    }

    getPrecision() {
        return this.precision;
    }

    setPrecision(precision) {
        this.precision = precision;
        return this;
    }
}