import React, { Component } from 'react';
import { Consumer } from '../../context';
import TinyDatePicker from 'tiny-date-picker';
import 'tiny-date-picker/tiny-date-picker.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    TinyDatePicker(document.querySelector('.start'));
    TinyDatePicker(document.querySelector('.end'));
  }
  submit(dispatch) {
    return event => {
      event.preventDefault();
      dispatch({ type: 'SEARCH', payload: this });
    }
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form className="search" onSubmit={this.submit(dispatch)}>
              <input type="text" className="form-control start mb-3" placeholder="Start date" />
              <input type="text" className="form-control end mb-3" placeholder="End date" />

              <div className="form-group">
                <label htmlFor="people">People</label>
                <select className="form-control" id="people">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="people">Max Price</label>
                <select className="form-control" id="price">
                  <option>$1000</option>
                  <option>$500</option>
                  <option>$100</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          )
        }}
      </Consumer>
    )
  }
}

export default Filter;