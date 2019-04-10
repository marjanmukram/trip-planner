import React, { Component } from 'react';

class Trip extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // extract properties from props
        const { name, planner, destinations, startDate, endDate, currentTravellers } = this.props.trip;

        // create destination string
        let destinationString = "";
        for (let i = 0; i < destinations.length; i++) {
            if (i === destinations.length - 1) {
                destinationString += destinations[i];
                break;
            }
            destinationString += destinations[i] + " to ";
        }

        // create img string
        let imgSrc = "https://source.unsplash.com/1600x900/?" + destinations[0];

        return (

            <div className="col m12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={imgSrc} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5>{name}</h5>
                            <p>By: {planner}</p>
                            <p>Destinations: {destinationString}</p>
                            <p className="row"><span className="col m6">start: {new Date(startDate).toDateString()}</span><span className="col m6">end: {new Date(endDate).toDateString()}</span></p>
                            <p>Current travellers: <span className="green-text lighten-2">{currentTravellers}</span></p>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Join Trip
                                <i className="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Trip;