import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Listings from './components/booking/Listings';
import Book from './components/booking/Book';
import Home from './components/Home';
import { Provider } from './context';

import "jquery";
import 'popper.js';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/listings/" component={Listings} />
              <Route exact path="/book/:id" component={Book} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
