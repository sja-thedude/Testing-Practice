class Calculator {
    add(val1, val2) {
        return val1 + val2;
    }
    
    subtract(val1, val2) {
        return val1 - val2;
    }
    
    multiply(val1, val2) {
        return val1 * val2;
    }

    divide(val1, val2) {
        return val1 / val2;
    }
}

let calculator = new Calculator();

module.exports = calculator;