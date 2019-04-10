import React, { Component } from 'react';
//import $ from 'jquery';

class TripPlanForm extends Component {

    componentDidMount(){
        $(document).ready(function(){
            // $('.datepicker').datepicker();
            // $('.chips-placeholder').chips({
            //     placeholder: 'Enter a tag',
            //     secondaryPlaceholder: '+Tag',
            //   });
          });
          
    }
    render() {
    return (
        <div className="row ">
        <div className="col s4">
        <form>
          <div className="row">
            <div className="input-field col s11">
                <label forName="trip_name">Trip Name</label>
                <input id="trip_name" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s11">
                <label forName="start_date">Start Date</label>
                <input id="start_date" type="text" class="datepicker"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s11">
                <label forName="end_date">End Date</label>
                <input id="end_date" type="text" className="validate"/>

            </div>
          </div>
          <div className="row">

            <div className="input-field col s11">
                <label forName="max_travellers">Max Travellers</label>
                <input id="max_travellers" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s11">
                <label forName="cost">Estimated Cost</label>
                <input id="cost" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s11">
                <label forName="destination">Destination</label>
                <input id="destination" type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 center">
                <a class="waves-effect waves-light btn" style={{color:"white", backgroundColor:"green"}}><i class="material-icons left">save</i>save</a>
            </div>
          </div>
        </form>
        </div>
        <div className="col s4 ">
        <img src="https://images.unsplash.com/photo-1546656495-fc838de15e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" />
        </div> 
        </div>

    );
  }
}

export default TripPlanForm;
