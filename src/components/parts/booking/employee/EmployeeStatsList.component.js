import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from "mobx-react";
// Components
import EmployeeStatsItem from "components/parts/booking/employee/EmployeeStatsItem.component";


class EmployeeStatsList extends React.Component {

   static propTypes = {
       employeeList: PropTypes.array.isRequired
   };


    render() {
        return (
            <div className="col-xs-8">
                { this.props.employeeList.map((employee)=> {
                    return <EmployeeStatsItem employee={ employee } key={employee.lastName}/>
                })}
            </div>
        );
    }
}


export default observer(EmployeeStatsList);
