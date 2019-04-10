import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TripJoinPage from '../join-trip/TripJoinPage';

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Logo
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/joinTrip/">Join Trip</Link>
                </li>
                <li>
                  <a href="badges.html">Components</a>
                </li>
                <li>
                  <a href="collapsible.html">JavaScript</a>
                </li>
              </ul>
            </div>
          </nav>
          <Route
            path="/join-trip/TripJoinPage"
            exact
            component={TripJoinPage}
          />
        </div>
      </Router>
    );
  }
}

export default Nav;
