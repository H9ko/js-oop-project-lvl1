export default class Cstring {
  constructor() {
    this.rules = [];
  }

  required() {
    const fn = (str) => str !== null && str.length > 0;
    this.rules = [...this.rules, fn];
    return this;
  }

  minLength(minLength) {
    const fn = (str) => str.length >= minLength;
    this.rules = [...this.rules, fn];
    return this;
  }

  contains(subStr) {
    const fn = (str) => str.includes(subStr);
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
