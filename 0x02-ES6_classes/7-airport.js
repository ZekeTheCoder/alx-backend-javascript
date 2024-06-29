export default class Airport {
  constructor(name, code) {
    // type check for sqft
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new TypeError('Name must be a non-empty string');
    }

    if (typeof code !== 'string' || code.trim().length !== 3) {
      throw new TypeError('Code must be a string of exactly 3 characters');
    }
    // initialize
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override toString method to return airport code in square brackets
  toString() {
    // return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    return `[object ${this.code}]`;
  }
}
