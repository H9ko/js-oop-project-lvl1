export default class Cnumber {
  constructor() {
    this.rules = [];
  }

  required() {
    const fn = (num) => typeof num === 'number';
    this.rules = [...this.rules, fn];
    return this;
  }

  positive() {
    const fn = (num) => num > 0;
    this.rules = [...this.rules, fn];
    return this;
  }

  range(lower, upper) {
    const fn = (num) => lower <= num && num <= upper;
    this.rules = [...this.rules, fn];
    return this;
  }

  isValid(str) {
    return this.rules.reduce((acc, fn) => {
      if (acc === false) {
        return false;
      }
      return fn(str);
    }, true);
  }
}
