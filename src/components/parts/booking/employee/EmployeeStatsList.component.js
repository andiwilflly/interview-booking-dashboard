import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsList.module.scss";
// Components
import EmployeeStatsItem from "components/parts/booking/employee/EmployeeStatsItem.component"


class EmployeeStatsList extends React.Component {

   static propTypes = {
       employeeList: PropTypes.array.isRequired
   };


    render() {
        return (
            <ul className={ styles.employee_stats_list }>
                { this.props.employeeList.map((employee)=> {
                    return <EmployeeStatsItem employee={ employee } key={employee.lastName}/>
                })}
            </ul>
        );
    }
}


export default observer(EmployeeStatsList);
