import React, { Component } from 'react';
import TripJoinPage from './components/join-trip/TripJoinPage';
import TripDetails from './components/trip-details/tripDetails';
import Nav from './components/Navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TripPlanForm from './components/trip-plan-form';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <Link to="/">Logo</Link>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/joinTrip/">Join Trip</Link>
                </li>
                <li>
                  <Link to="/trip-plan-form/">Plan a trip</Link>
                </li>
                <li>
                  <Link to="/trip-details/">Trip Details</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route exact path="/" component={Landing} />
        <Route path="/joinTrip/" exact component={TripJoinPage} />
        <Route path="/trip-plan-form/" exact component={TripPlanForm} />
        <Route path="/trip-details/" exact component={TripDetails} />
      </Router>
    );
  }
}

export default App;
