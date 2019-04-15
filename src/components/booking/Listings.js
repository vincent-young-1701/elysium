import React, { Component } from 'react';
import Listing from './Listing';
import Filter from './Filter';
import { Consumer } from '../../context';

class Listings extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { listings } = value;
          let view;
          if (listings.length) {
            view = listings.map(listing => (
              <Listing
                key={listing.id}
                id={listing.id}
                title={listing.title}
                description={listing.description}
                price={listing.price}
                amenities={listing.amenities}
                photo={listing.photo}
                smoking={listing.smoking} />
            ))
          } else {
            view = <h2>Refine your search to find rooms.</h2>;
          }
          return (
            <div className="row">
              <div className="col-3">
                <Filter />
              </div>
              <div className="col">
                {view}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Listings;
