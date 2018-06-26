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
            <ul className={ styles.bookingDashboard }>
                <li className={ styles.bookingDashboardItem }>
                    <p className={ styles.bookingDashboardItemNumber }>{ this.bookingDashboard.availableRooms }</p>
                    <p>Rooms available</p>
                </li>
                <li className={ styles.bookingDashboardItem }>
                    <p className={ styles.bookingDashboardItemNumber }>{ this.bookingDashboard.reservedRooms }</p>
                    <p>Reserved rooms</p>
                </li>
                <li className={ styles.bookingDashboardItem }>
                    <p className={ styles.bookingDashboardItemNumber }>{ this.bookingDashboard.checkedIn }</p>
                    <p>Checked in</p>
                </li>
            </ul>
        );
    }
}


export default observer(BookingDashboard);
