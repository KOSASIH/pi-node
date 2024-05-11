// models/piModel.js
export class PiModel {
  constructor (data) {
    this.data = data
  }

  getStatus () {
    return this.data.status
  }

  getData () {
    return this.data.data
  }
}
