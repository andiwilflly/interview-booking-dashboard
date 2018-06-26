import { types } from "mobx-state-tree";
// Models
import BookingDashboardModel from "models/BookingDashboard.model";
import EmployeeListModel from "models/employee/EmployeeList.model";


const RootModel = {
    employee: EmployeeListModel,
    bookingDashboard: BookingDashboardModel
};


export default types.model(RootModel);
