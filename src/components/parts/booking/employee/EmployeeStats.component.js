import React from 'react';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStats.module.scss";
// Components
import EmployeeStatsList from "components/parts/booking/employee/EmployeeStatsList.component";


class EmployeeStatsItem extends React.Component {

    render() {
        return (
            <div>
                <h3>Employee Stats</h3>
                <EmployeeStatsList />
            </div>
        );
    }
}


export default observer(EmployeeStatsItem);
