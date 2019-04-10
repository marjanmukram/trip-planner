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
                    destinations: ["Galle", "Mirissa", "Hambantota"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-25",
                    currentTravellers: 3
                },
                {
                    id: 2,
                    name: "The Galle-Kandy Trip",
                    planner: "Bradley Smith",
                    destinations: ["Galle", "Kandy"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-19",
                    currentTravellers: 1
                },
                {
                    id: 3,
                    name: "Surf It",
                    planner: "Philip Samson",
                    destinations: ["Galle", "Hambantota", "Arugambay"],
                    startDate: "2019-04-15",
                    endDate: "2019-04-20",
                    currentTravellers: 5
                }
            ]
        }
    }

    handleSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        console.log(this.state);

        return (
            <div className="container">
                <div className="search section grey lighten-4 col m6">
                    <form>
                        <input onClick={() => this.handleSearch()} type="text" placeholder="Search location" />
                    </form>
                </div>
                <div className="row">
                    <div className="trip-list grey lighten-3">
                        <TripList trips={this.state.trips} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TripJoinPage;