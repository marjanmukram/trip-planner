import React, { Component } from 'react';
import Trip from './Trip.jsx';

class TripList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { trips } = this.props;
        return (
            <div>
                {this.props.trips.map(trip =>
                    (<Trip key={trip.id} id={trip.id} trip={trip} />)
                )}
            </div>
        );
    }
}

export default TripList;