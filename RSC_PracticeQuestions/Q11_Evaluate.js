class Calculator {
  constructor(value = 0) {
    this.result = value;
  }

  add(number) {
    this.result += number;
    return this;
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  divide(number) {
    if (number !== 0) {
      this.result /= number;
    } else {
      console.error("Can't divide by zero");
    }
    return this;
  }

  getResult() {
    this.result;
  }
}

const calculator = new Calculator();

const result = calculator.add(10).subtract(2).divide(2).multiply(5).getResult();
console.log(result);
