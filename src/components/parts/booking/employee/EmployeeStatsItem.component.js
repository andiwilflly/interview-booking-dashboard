import React from 'react';
import PropTypes from 'prop-types';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsItem.module.scss";


class EmployeeStatsItem extends React.Component {


    static propTypes = {
        employee: PropTypes.object.isRequired
    };


    render() {
        return (
            <li className={ styles.employeeStatsItem }>
                <img src={ this.props.employee.profileImageUrl }
                     alt={`${this.props.employee.firstName} ${this.props.employee.lastName}`} />

                <p>{ this.props.employee.lastName } { this.props.employee.lastName.charAt(0) }.</p>

                <p>{ this.props.employee.bookingHours } / { store.totalHoursGoal }</p>
            </li>
        );
    }
}


export default observer(EmployeeStatsItem);
