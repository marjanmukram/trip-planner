import React, { Component } from 'react';
import $ from 'jquery';

class TripPlanForm extends Component {
    componentDidMount(){
        $(document).ready(function(){
            // $('.datepicker').datepicker();
          });
    }
    render() {
    return (
        <div className="row container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
                <label forName="trip_name">Trip Name</label>
                <input id="trip_name" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
                <label forName="start_date">Start Date</label>
                <input id="start_date" type="text" class="datepicker"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
                <label forName="end_date">End Date</label>
                <input id="end_date" type="text" className="validate"/>
            </div>
          </div> 
          <div className="row">
            <div className="input-field col s4">
                <label forName="max_travellers">Max Travellers</label>
                <input id="max_travellers" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
                <label forName="cost">Estimated Cost</label>
                <input id="cost" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
                <label forName="destination">Destination</label>
                <input id="destination" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3 center">
                <a class="waves-effect waves-light btn" style={{color:"white", backgroundColor:"blue"}}><i class="material-icons left">save</i>save</a>
            </div>
          </div>

          <div className="row">
          {/* <div className="chips">
            <input class="custom-class"></input>
          </div> */}
          </div>
        </form>
        </div>
    );
  }
}

export default TripPlanForm;