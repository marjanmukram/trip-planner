import React, { Component } from 'react'
import TripList from './TripList.jsx';

class TripJoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [
                {
                    id: 1,
                    name: "My Trip to Galle",
                    planner: "John Doe",
                    destinations: ["galle", "mirissa", "hambantota"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-25",
                    currentTravellers: 3
                },
                {
                    id: 2,
                    name: "The Galle-Kandy Trip",
                    planner: "Bradley Smith",
                    destinations: ["galle", "kandy"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-19",
                    currentTravellers: 1
                },
                {
                    id: 3,
                    name: "Surf It",
                    planner: "Philip Samson",
                    destinations: ["galle", "hambantota", "arugambay"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-18",
                    currentTravellers: 5
                },
                {
                    id: 4,
                    name: "Hiking Trip",
                    planner: "Jenifer Kate",
                    destinations: ["kandy", "nuwara eliya"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-22",
                    currentTravellers: 5
                },
                {
                    id: 5,
                    name: "Car Pooling",
                    planner: "Peter Ken",
                    destinations: ["nuwara eliya", "kandy", "horana"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-27",
                    currentTravellers: 4
                }
            ]
        }
    }

    handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log(this.state.location);

        let searchLocation = this.state.location;
        let trips = this.state.trips;
        let matchingTrips = [];

        // Check if searched location is Not empty, and exists in one of the existing trips
        if (searchLocation) {
            for (let i = 0; i < trips.length; i++) {
                if (trips[i].destinations.includes(searchLocation.toLowerCase())) {
                    matchingTrips.push(trips[i]);
                }
            }
        }

        if (matchingTrips) {
            this.setState({ matchingTrips: matchingTrips })
        } else {
            this.setState({ matchingTrips: undefined })
        }
    }

    render() {
        //console.log(this.state);

        let results = this.state.matchingTrips ? <TripList trips={this.state.matchingTrips} /> : <p>No Trips Found</p>;

        return (
            <div className="container">
                {/* <h2>Join a trip</h2> */}
                <div className="search section grey lighten-4 col m6">
                    <form onSubmit={(e) => { this.handleSearch(e) }}>
                        <input type="text" placeholder="Search location" onChange={(e) => this.setState({ location: e.target.value })} />
                        <button className="btn" type="submit">Search</button>
                    </form>
                </div>
                <div className="row">
                    <div className="trip-list grey lighten-3">
                        {/* <TripList trips={this.state.matchingTrips} /> */}
                        {results}
                    </div>
                </div>
            </div>
        );
    }
}

export default TripJoinPage;