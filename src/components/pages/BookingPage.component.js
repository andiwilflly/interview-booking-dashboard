import React from 'react';
// Components
import BookingDashboard from "components/parts/booking/BookingDashboard.component";
import EmployeeStats from "components/parts/booking/employee/EmployeeStats.component";


class BookingPage extends React.Component {

    render() {
        return (
            <div>
                <BookingDashboard />
                <EmployeeStats />
            </div>
        );
    }
}


export default BookingPage;
