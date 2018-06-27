import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <Link to="/input" style={{ fontSize: 17, color: "white", display: 'block', padding: 10 }}>Javascript Exercise 1 Phone input field</Link>
                <Link to="/booking" style={{ fontSize: 17, color: "white", display: 'block', padding: 10 }}>Javascript Exercise 2 Booking app</Link>
            </div>
        );
    }
}


export default HomePage;
