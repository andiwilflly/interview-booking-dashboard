// MobX
import { types } from 'mobx-state-tree';


const Booking = {
    bookingHours: types.number,
    firstName: types.string,
    lastName: types.string,
    profileImageUrl: types.string
};


export default types.model('Booking', Booking);
