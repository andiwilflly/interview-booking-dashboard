import env from "env";
import { types } from "mobx-state-tree";
import { runInAction } from "mobx";


const BookingDashboard = {
    status: types.string,
    availableRooms: types.maybe(types.number),
    reservedRooms: types.maybe(types.number),
    checkedIn: types.maybe(types.number)
};

const actions = (self)=> {
    return {

        fetch: async ()=> {
            let response = await window.fetch(`${env.API_URL}/booking-snapshot`);
            response = await response.json();
            self.create(response);
        },


        create(bookingSnapshot = {}) {
            runInAction(`BOOKING-DASHBOARD-CREATE-SUCCESS`, ()=> {
                self.status = "fulfilled";
                self.availableRooms = bookingSnapshot.availableRooms;
                self.reservedRooms = bookingSnapshot.reservedRooms;
                self.checkedIn = bookingSnapshot.checkedIn;
            })
        }
    };
};


export default types.model("BookingDashboard", BookingDashboard).actions(actions);
