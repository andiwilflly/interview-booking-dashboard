import React from 'react';
import store from "store";


class BookingPage extends React.Component {

    componentDidMount() {
        store.bookingSnapshot.fetch();
        store.bookings.fetch();
    }


    render() {
        return (
            <div>Booking</div>
        );
    }
}


export default BookingPage;
