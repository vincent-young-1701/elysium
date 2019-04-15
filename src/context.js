import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'BOOK':
      return {
        ...state,
        current: action.payload
      };
    case 'PAY':
      return state;
    case 'SEARCH':
      return state;
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    current: {},
    listings: [
      {
        id: 123456,
        title: 'Queen Room',
        description: 'A great room with lots of space',
        amenities: ['jacuzzi', 'bar', 'non-smoking', 'accessible'],
        photo: {
          url: '1.jpg',
          alt: 'Nice view'
        },
        price: 150
      },
      {
        id: 123457,
        title: 'King Room',
        description: 'A great room with lots of space',
        amenities: ['jacuzzi', 'bar', 'non-smoking', 'accessible'],
        photo: {
          url: '2.jpg',
          alt: 'Nice view'
        },
        price: 190
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

