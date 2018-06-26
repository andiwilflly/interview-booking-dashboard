import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Link to="/input">Input</Link>
                <Link to="/booking">Booking</Link>
            </div>
        );
    }
}


export default HomePage;
