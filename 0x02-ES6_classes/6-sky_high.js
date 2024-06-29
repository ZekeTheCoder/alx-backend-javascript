/* eslint-disable import/extensions */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // parent class constructor with sqft
    super(sqft);

    // Validate
    if (typeof floors !== 'number' || floors <= 0 || !Number.isInteger(floors)) {
      throw new TypeError('Floors must be a positive integer');
    }

    // initialize floors
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
