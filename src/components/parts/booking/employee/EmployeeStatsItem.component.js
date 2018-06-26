import React from 'react';
import store from "store";
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsItem.module.scss";


class EmployeeStatsItem extends React.Component {

    render() {
        return (
            <div>
                EmployeeStatsItem
            </div>
        );
    }
}


export default observer(EmployeeStatsItem);
