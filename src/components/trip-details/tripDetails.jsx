import React, { Component } from 'react';
import Details from './item';
import Travellers from './travellers';
class TripDetails extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="col s12 m7 ">
              <h4 className="header" style={{ textAlign: 'center', fontFamily:'Comfortaa' }}>
                Trip Details
              </h4>
              <div className="card-panel">
                <h5 style={{ textAlign: 'center', fontFamily:'Comfortaa' }}>Galle Trip</h5>
                <Details />
              </div>
            </div>

            <div className="col s12 m5">
              <h4 className="header" style={{ textAlign: 'center', fontFamily:'Comfortaa' }}>
                Co-Travellers
              </h4>
              <Travellers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripDetails;
