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
        if(store.bookingDashboard.status !== "fulfilled") return <ul className={ styles.booking_dashboard }>Loading dashboard...</ul>;
        return (
            <ul className={ `row ${styles.booking_dashboard}` }>
                <li className="col-xs-4">
                    <p className="item_number">{ this.bookingDashboard.availableRooms }</p>
                    <p>Rooms available</p>
                </li>
                <li className="col-xs-4">
                    <p className="item_number">{ this.bookingDashboard.reservedRooms }</p>
                    <p>Reserved rooms</p>
                </li>
                <li className="col-xs-4">
                    <p className="item_number">{ this.bookingDashboard.checkedIn }</p>
                    <p>Checked in</p>
                </li>
            </ul>
        );
    }
}


export default observer(BookingDashboard);
