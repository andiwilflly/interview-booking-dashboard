import { spy } from "mobx";
// Models
import RootModel from "models/Root.model";


const store = RootModel.create({
    bookings: {},
    bookingSnapshot: {
        availableRooms: 0,
        reservedRooms: 0,
        checkedIn: 0,
        weekAvailabilityPercent: 0
    }
});

// MobX spy goes here
spy((event)=> {
	switch(event.type) {
		case 'action':
			if(event.name.match('@reaction')) return console.log('%c' + event.name, 'color: gray');
			if(event.name.match('-PENDING')) return console.log('%c' + event.name, 'color: darkorange');
			if(event.name.match('-ERROR')) return console.log('%c' + event.name, 'color: darkred');
			if(event.name.match('-SUCCESS')) return console.log('%c' + event.name, 'color: green');
			break;
		default :
			break;
	}
});


export default store;