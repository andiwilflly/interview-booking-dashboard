import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsItem.module.scss";
// Component
import EmployeeStatsProgress from "components/parts/booking/employee/EmployeeStatsProgress.component";


class EmployeeStatsItem extends React.Component {


    static propTypes = {
        employee: PropTypes.object.isRequired
    };


    render() {
        return (
            <li className={ styles.employeeStatsItem }>
                <div className={ styles.employeeStatsItemImageWrapper }>
                    <img src={ this.props.employee.profileImageUrl }
                         alt={`${this.props.employee.firstName} ${this.props.employee.lastName}`} />
                </div>

                <div className={ styles.employeeStatsItemInfo }>
                    <p className={ styles.employeeStatsItemInfoName }>{ this.props.employee.lastName } { this.props.employee.lastName.charAt(0) }.</p>
                    <p className={ styles.employeeStatsItemInfoHours }>{ this.props.employee.bookingHours } hours</p>

                    <EmployeeStatsProgress bookingHours={ this.props.employee.bookingHours } />
                </div>
            </li>
        );
    }
}


export default observer(EmployeeStatsItem);
