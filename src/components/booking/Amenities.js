import React, { Component } from 'react'

class Amenities extends Component {
  render() {
    return (
      <div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="bar" value="bar" />
          <label className="form-check-label" htmlFor="bar">Bar</label>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="spa" value="spa" />
          <label className="form-check-label" htmlFor="spa">Spa</label>
        </div>
      </div>
    )
  }
}

export default Amenities;