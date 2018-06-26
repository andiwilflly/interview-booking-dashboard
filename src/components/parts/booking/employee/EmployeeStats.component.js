import React from 'react';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStats.module.scss";
// Components
import EmployeeStatsList from "components/parts/booking/employee/EmployeeStatsList.component";


class EmployeeStatsItem extends React.Component {

    componentDidMount() {
        store.employee.fetchBookings();
    }


    get employeeList() { return store.employee.sortedEmployees.slice(0, 3); };


    render() {
        return (
            <div className={ styles.employeeStats }>
                <h3 className={ styles.employeeStatsTitle }>Employee stats</h3>
                { store.employee.status === 'fulfilled' ?
                    <EmployeeStatsList employeeList={ this.employeeList } />
                    :
                    <p>Loading...</p>
                }
            </div>
        );
    }
}


export default observer(EmployeeStatsItem);
