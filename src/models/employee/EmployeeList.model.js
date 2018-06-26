import env from "env";
import moment from "moment";
// MobX
import { runInAction } from "mobx";
import { types } from 'mobx-state-tree';
// Models
import EmployeeModel from "models/employee/Employee.model";


const Bookings = {
    all: types.optional(types.map(EmployeeModel), {}),
    status: types.string
};


const actions = (self)=> {
    return {

        fetchBookings: async ()=> {
            let response = await window.fetch(`${env.API_URL}/bookings`);
            response = await response.json();
            runInAction(`BOOKINGS-FETCH-SUCCESS`, ()=> {
                self.setStatus("fulfilled");
                self.format(response);
            });
        },


        setStatus(status = "pending") {
            self.status = status;
        },


        format(bookings = []) {
            const employeeList = {};

            bookings.forEach((booking)=> {
                if(!booking.employee) return;
                const checkInDate =  moment(booking.checkInDate, 'DD:MM:YYYY').toDate().valueOf();
                const checkOutDate =  moment(booking.checkOutDate, 'DD:MM:YYYY').toDate().valueOf();
                const bookingHours = (checkOutDate - checkInDate) / 1000 / 60 / 60;

                employeeList[booking.employee.lastName] = {
                    firstName: booking.employee.firstName,
                    lastName: booking.employee.lastName,
                    profileImageUrl: booking.employee.profileImageUrl,
                    bookingHours: employeeList[booking.employee.lastName] ?
                        employeeList[booking.employee.lastName].bookingHours + bookingHours
                        :
                        bookingHours
                };
            });

            for(const employeeName in employeeList) {
                if(employeeList.hasOwnProperty(employeeName)) {
                    self.create(employeeList[employeeName]);
                }
            }
        },


        create(employee = {}) {
            runInAction(`EMPLOYEE-CREATE-SUCCESS ${employee.firstName} ${employee.lastName}`, ()=> {
                self.all.set(employee.lastName, employee);
            });
        }
    };
};


export default types.model('Bookings', Bookings).actions(actions);
