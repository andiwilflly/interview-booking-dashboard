import env from "env";
import { types } from "mobx-state-tree";
import { runInAction } from "mobx";


const BookingSnapshot = {
    availableRooms: types.number,
    reservedRooms: types.number,
    checkedIn: types.number,
    weekAvailabilityPercent: types.number
};

const actions = (self)=> {
    return {

        fetch: async ()=> {
            let response = await window.fetch(`${env.API_URL}/booking-snapshot`);
            response = await response.json();
            console.log(response, "BBS");
            self.create(response);
        },


        create(bookingSnapshot = {}) {
            runInAction(`BOOKING-SNAPSHOT-CREATE-SUCCESS`, ()=> {
                self.availableRooms = bookingSnapshot.availableRooms;
                self.reservedRooms = bookingSnapshot.reservedRooms;
                self.checkedIn = bookingSnapshot.checkedIn;
                self.weekAvailabilityPercent = bookingSnapshot.weekAvailabilityPercent;
            })
        }
    };
};


export default types.model("BookingSnapshot", BookingSnapshot).actions(actions);
