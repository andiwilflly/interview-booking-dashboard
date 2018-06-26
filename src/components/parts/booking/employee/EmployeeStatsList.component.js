import React from 'react';
import store from "store";
// MobX
import { values } from "mobx";
import { observer } from "mobx-react";
// Styles
import styles from "./EmployeeStatsList.module.scss";


class EmployeeStatsList extends React.Component {

    componentDidMount() {
        store.employee.fetchBookings();
    }


    get employeeList() { return values(store.employee.all); }


    render() {
        if(store.employee.status !== 'fulfilled') return <div>Loading...</div>;

        return (
            <ul>
                { this.employeeList.map((employee)=> {
                    console.log(employee);
                    return (
                        <li key={employee.lastName}>
                            <img src={ employee.profileImageUrl }
                                 alt={`${employee.firstName} ${employee.lastName}`} />

                            <p>{ employee.lastName } { employee.lastName.charAt(0) }.</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
}


export default observer(EmployeeStatsList);
