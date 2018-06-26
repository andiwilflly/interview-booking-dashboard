// MobX
import { runInAction } from "mobx";
import { types } from 'mobx-state-tree';


const Booking = {
    bookingHours: types.number,
    firstName: types.string,
    lastName: types.string,
    profileImageUrl: types.string
};


// let interval = null;
const actions = (self)=> {
    return {
    };
};


export default types.model('Booking', Booking).actions(actions);
