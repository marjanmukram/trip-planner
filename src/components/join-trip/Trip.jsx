import React, { Component } from 'react';

class Trip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requestMade: false
        }
    }

    handleJoinRequest = () => {
        this.setState({ requestMade: true });

    }

    render() {
        // extract properties from props
        const { name, planner, destinations, startDate, endDate, currentTravellers } = this.props.trip;

        // create destination string
        let destinationString = "";
        for (let i = 0; i < destinations.length; i++) {
            // capitalize location
            let location = destinations[i].charAt(0).toUpperCase() + destinations[i].slice(1)
            if (i === destinations.length - 1) {
                destinationString += location;
                break;
            }
            destinationString += location + " to ";
        }

        // create img string
        let imgSrc = "https://source.unsplash.com/1600x900/?random," + destinations[0];

        // render btn based on request state
        let requestBtn = (!this.state.requestMade) ? (
            <button onClick={this.handleJoinRequest} className="btn waves-effect waves-light" type="submit" name="action">Join Trip
                                <i className="material-icons right">send</i>
            </button>
        ) :
            <button className="btn green waves-effect waves-light" type="submit" name="action">Request Sent
                                <i className="material-icons right">where_to_vote</i>
            </button>

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
                        {/* <button onClick={handleJoinRequest} className="btn waves-effect waves-light" type="submit" name="action">Join Trip
                                <i className="material-icons right">send</i>
                        </button> */}
                        {requestBtn}

                    </div>
                </div>
            </div>
        );
    }
}

export default Trip;