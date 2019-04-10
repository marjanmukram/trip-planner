import React, { Component } from 'react';
class Travellers extends Component {
  render() {
    return (
      <div>
        <div className="card horizontal ">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/ature/6" alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content" style={{ fontFamily:'Comfortaa' }}>Traveller : Aegon Targareyan</div>
          </div>
        </div>
        <div className="card horizontal ">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190nature/6" alt="" />
          </div>
          <div className="card-stacked ">
            <div className="card-content " style={{ fontFamily:'Comfortaa' }}>Traveller : Sophie Turner</div>
          </div>
        </div>
        <div className="card horizontal ">
          <div className="card-image">
            <img src="satur" alt="" />
          </div>
          <div className="card-stacked">
            <div className="card-content" style={{ fontFamily:'Comfortaa' }}>Traveller : Maisie William</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Travellers;
