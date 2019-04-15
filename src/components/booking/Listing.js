import React, { Component } from 'react'
import { Consumer } from '../../context';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.book = this.book.bind(this);
  }
  book(dispatch, listings, id) {
    return event => {
      event.preventDefault();
      const [listing] = listings.filter(listing => {
        return listing.id === id;
      });
      dispatch({ type: 'BOOK', payload: listing });
    }
  }
  render() {
    const {
      id,
      title,
      description,
      amenities,
      price,
      photo
    } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch, listings } = value;
          return (
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <img src={"/images/" + photo.url} className="rounded float-left img-thumbnail" alt={photo.alt} />
                  </div>
                  <div className="col">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <h4>Amenities:</h4>
                    <ul>
                      {amenities.map((amenity, value) => {
                        return <li key={value}>{amenity}</li>
                      })}
                    </ul>
                  </div>
                  <div className="col-3 text-right">
                    <div className="mb-3">${price}/day</div>
                    <button onClick={this.book(dispatch, listings, id)} type="button" className="btn btn-primary" data-toggle="modal" data-target="#paymentModal">Book</button>
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

export default Listing;