import React, { Component } from 'react';
import TripJoinPage from './components/join-trip/TripJoinPage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Trip planner</h1>
        <TripJoinPage />
      </div>
    );
  }
}

export default App;
