import React, { Component } from 'react';
class Details extends Component {
  render() {
    return (
      <div style={{ fontSize: '1.5em' }}>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>Trip Name       :  Sky Dive</div>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>Start date      :  2019/04/05</div>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>End date        :  2019/04/20</div>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>Max. Travellers :  20</div>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>Estimated cost  :  $200</div>
        <div style={{ padding: '15px', fontFamily:'Comfortaa' }}>
          Destination(s) : Galle, Mirissa, Hambantota
        </div>
      </div>
    );
  }
}

export default Details;
