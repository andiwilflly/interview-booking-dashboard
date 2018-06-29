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
            <div className="row">
                <div className="col-xs">
                    <h3 className={ styles.employee_stats_title }>{ store.employee.status === 'fulfilled' ? "Employee stats" : "Loading..." }</h3>
                </div>
                { store.employee.status === 'fulfilled' ?
                    <EmployeeStatsList employeeList={ this.employeeList } />
                    :
                    null }
            </div>
        );
    }
}


export default observer(EmployeeStatsItem);
