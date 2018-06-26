import env from "env";
// MobX
import { runInAction } from "mobx";
import { types } from 'mobx-state-tree';
// Models
import BookingModel from "models/bookings/Booking.model";


const Bookings = {
    all: types.optional(types.map(BookingModel), {})
};


const actions = (self)=> {
    return {

        fetch: async ()=> {
            let response = await window.fetch(`${env.API_URL}/bookings`);
            response = await response.json();
            runInAction(`BOOKINGS-FETCH-SUCCESS`, ()=> {
                response.map((booking)=> self.create(booking));
            });
        },


        create(booking = {}) {
            runInAction(`BOOKING-CREATE-SUCCESS ${booking.id}`, ()=> {
                self.all.set(booking.id, booking);
            });
        }
    };
};


export default types.model('Bookings', Bookings).actions(actions);
