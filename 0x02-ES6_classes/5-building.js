export default class Building {
  constructor(sqft) {
    // subclass check
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // type check for sqft
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // initialize
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }
}
