import React, { Component } from 'react'
import { Consumer } from '../../context';

class Payment extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { title } = value.current;
          return (
            <div className="modal fade" id="paymentModal" tabIndex="-1" role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="paymentModalLabel">Book {title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
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

                      <div className="form-row mb-3">
                        <div className="col-7">
                          <input type="text" className="form-control" placeholder="Credit Card Number" />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder="MM/YY" />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder="CVV" />
                        </div>
                      </div>

                      <div className="form-row mb-3">
                        <textarea className="form-control" rows="3" placeholder="Please let us know of any special requests during your stay."></textarea>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Agree to terms and conditions</label>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Pay</button>
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

export default Payment;
