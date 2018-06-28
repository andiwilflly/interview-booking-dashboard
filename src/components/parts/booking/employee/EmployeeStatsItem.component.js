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
            <li className={ styles.employee_stats_item }>
                <div className="col-xs-2">
                    <div className="image_wrapper">
                        <img src={ this.props.employee.profileImageUrl }
                             alt={`${this.props.employee.firstName} ${this.props.employee.lastName}`} />
                    </div>
                </div>

                <div className="col-xs-10 info">
                    <p className="info_name">{ this.props.employee.lastName } { this.props.employee.lastName.charAt(0) }.</p>
                    <p className="info_hours">{ this.props.employee.bookingHours } hours</p>

                    <EmployeeStatsProgress bookingHours={ this.props.employee.bookingHours } />
                </div>
            </li>
        );
    }
}


export default observer(EmployeeStatsItem);
