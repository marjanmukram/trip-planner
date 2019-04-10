import React, { Component } from 'react';
import Trip from './components/join-trip/Trip.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Trip planner</h1>
        <Trip />
      </div>
    );
  }
}

export default App;
