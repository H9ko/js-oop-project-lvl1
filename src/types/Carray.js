export default class Cnumber {
  constructor() {
    this.rules = [];
  }

  required() {
    const fn = (arr) => Array.isArray(arr);
    this.rules = [...this.rules, fn];
    return this;
  }

  sizeof(length) {
    const fn = (arr) => arr.length === length;
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
