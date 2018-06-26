import { types } from "mobx-state-tree";
// Models
import BookingSnapshotModel from "models/BookingSnapshot.model";
import BookingsModel from "models/bookings/Bookings.model";


const RootModel = {
    bookings: BookingsModel,
    bookingSnapshot: BookingSnapshotModel
};


export default types.model(RootModel);
