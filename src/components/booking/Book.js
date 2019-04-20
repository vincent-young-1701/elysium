import React, { Component } from 'react';
import { Consumer } from '../../context';
import Amenities from './Amenities';
import $ from "jquery";

class Book extends Component {
  componentDidMount() {
    //console.log(this.props.match.params.id);
  }
  cc(e) {
    document.querySelector(".cc").style.display = "block";
    document.querySelector(".paypal").style.display = "none";
  }
  paypal(e) {
    document.querySelector(".cc").style.display = "none";
    document.querySelector(".paypal").style.display = "block";
  }
  pay(dispatch, current) {
    return event => {
      event.preventDefault();
      dispatch({ type: 'PAY', payload: current });
    }
  }
  agree(e) {
    if (e.target.checked) {
      document.querySelector(".pay").removeAttribute("disabled");
    }
    else {
      document.querySelector(".pay").setAttribute("disabled", "disabled");
    }
  }
  render() {
    return (
      <Consumer>
        {value => {

          const { dispatch } = value;

          const { title } = value.current;

          return (
            <div className="row">
              <div className="col">
                <h1>Book {title} (ID {this.props.match.params.id})</h1>

                <form>
                  <div className="form-row mb-3">
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Confirm email" />
                    </div>
                  </div>

                  <div>
                    <h2>Add extras:</h2>
                    <Amenities />
                  </div>

                  <div className="btn-group mb-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={this.cc}>Pay with Credit Card</button>
                    <button type="button" className="btn btn-secondary" onClick={this.paypal}>Pay with Paypal</button>
                  </div>

                  <div className="cc mb-3" style={{ display: "none" }}>
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Credit Card Number" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" placeholder="MM/YY" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" placeholder="CVV" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 paypal" style={{ display: "none" }}>
                    <div className="form-row">
                      <a className="btn btn-primary" href="https://www.paypal.com">Go to Paypal</a>
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <textarea className="form-control" rows="3" placeholder="Please let us know of any special requests during your stay."></textarea>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onClick={this.agree} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Agree to terms and conditions</label>
                  </div>

                  <button type="button" onClick={this.pay(dispatch, value.current)} className="btn btn-primary pay" data-toggle="modal" data-target="#paymentModal" disabled>Confirm Payment</button>
                </form>
              </div>

              <div className="modal fade" id="paymentModal" tabIndex="-1" role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="paymentModalLabel">{title} Payment Successful</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>Congratulations on your booking! Look in your e-mail for your booking confirmation.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )
        }
        }
      </Consumer>
    )
  }
}

export default Book;
