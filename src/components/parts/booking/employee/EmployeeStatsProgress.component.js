import React from 'react';
import PropTypes from 'prop-types';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsProgress.module.scss";


class EmployeeStatsProgress extends React.Component {


    static propTypes = {
        bookingHours: PropTypes.number.isRequired
    };


    get progressWidth() { return `${this.props.bookingHours * 100 / store.totalHoursGoal}%` };


    render() {
        return (
            <div className={ styles.employeeStatsProgress }>
                <div style={{ width: this.progressWidth }}
                     className={ styles.employeeStatsProgressInner } />
            </div>
        );
    }
}


export default observer(EmployeeStatsProgress);
