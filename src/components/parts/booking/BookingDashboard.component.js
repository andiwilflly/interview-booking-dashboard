import React from 'react';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./BookingDashboard.module.scss";


class BookingDashboard extends React.Component {

    componentDidMount() {
        store.bookingDashboard.fetch();
    }


    get bookingDashboard() { return store.bookingDashboard; };


    render() {
        if(store.bookingDashboard.status !== "fulfilled") return <div>Loading dashboard...</div>;
        return (
            <ul>

                <li>
                    { this.bookingDashboard.availableRooms }
                    <p>Rooms available</p>
                </li>
                <li>
                    <p>{ this.bookingDashboard.reservedRooms }</p>
                    <p>Reserved rooms</p>
                </li>
                <li>
                    <p>{ this.bookingDashboard.checkedIn }</p>
                    <p>Checked in</p>
                </li>
            </ul>
        );
    }
}


export default observer(BookingDashboard);
