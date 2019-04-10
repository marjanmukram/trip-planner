import React, { Component } from 'react';
class Details extends Component {
  render() {
    return (
      <div style={{ fontSize: '1.5em' }}>
        <div style={{ padding: '15px' }}>Trip Name : Galle to trip</div>
        <div style={{ padding: '15px' }}>Start date : 2019/04/05</div>
        <div style={{ padding: '15px' }}>End date : 2019/04/20</div>
        <div style={{ padding: '15px' }}>Max. Travellers : 20</div>
        <div style={{ padding: '15px' }}>Estimated cost : $200</div>
        <div style={{ padding: '15px' }}>
          Destination(s) : Galle, Mirissa, Hambantota
        </div>
      </div>
    );
  }
}

export default Details;
