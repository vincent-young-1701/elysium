import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Listings from './components/booking/Listings';
import Listing from './components/booking/Listing';
import Payment from './components/booking/Payment';
import Home from './components/Home';
import { Provider } from './context';

import $ from "jquery";
import 'popper.js';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/listings/" component={Listings} />
            </Switch>
          </main>
          <Footer />
          <Payment />
        </Router>
      </Provider>
    );
  }
}

export default App;
