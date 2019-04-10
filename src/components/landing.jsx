import React, { Component } from 'react';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let landingStyle = {
            margin: 0,
            padding: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1509982724584-2ce0d4366d8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9)',
            width: '100vw',
            height: '100vh'
        }

        let titleStyle = {
            position: 'absolute',
            left: '50vw',
            top: '50vh',
            transform: 'translate(-50%, -50%)',
            fontSize: '5rem',
            fontWeight: '30',
            color: 'white',
            textShadow: '2px 2px 2px #45454575',
            fontFamily:'Monoton'
        }

        let subTitleStyle = {
            position: 'absolute',
            left: '50vw',
            top: '60vh',
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
            color: 'white',
            fontFamily:'Fredoka One'
        }

        let btnStyle = {
            position: 'absolute',
            left: '50vw',
            top: '70vh',
            transform: 'translate(-50%, -50%)',
            border: '1px solid white',
            borderRadius: '3px',
            background: 'transparent',
            color: 'white',
            fontSize: '2rem',
            padding: '10px',
            cursor: 'pointer',
            
            overflow: "hidden",
            outline:"none"
        }

        return (
            <div className="landing" style={landingStyle} >
                <div className="title" style={titleStyle}>
                    ShareMyTrip.com
                </div>
                <div className="subtitle" style={subTitleStyle}>
                    Find your travel mates
                </div>
                {/* <a className="btn wave blue-grey darken-4" style={btnStyle}>Get Started</a> */}
                <a style={btnStyle}>Get Started</a>
            </div>
        );
    }
}

export default Landing;