import { SEAT_BOOKING, SEAT_REMOVE } from "../Type/BookingTickerType";


const stateDefault = {
    bookedSeatList:[
        // {soGhe: "A1",gia:1000}
    ]
}

const bookingTicketReducer = (state = stateDefault, action) => {
        switch(action.type){
            case SEAT_BOOKING: {
                let bookedSeatListUpdate = [...state.bookedSeatList];
                let index = bookedSeatListUpdate.findIndex(pendingSeat => pendingSeat.soGhe === action.seat.soGhe);
                if( index !== -1){
                    bookedSeatListUpdate.splice(index,1);
                }
                else{
                    bookedSeatListUpdate.push(action.seat);
                }
                state.bookedSeatList = bookedSeatListUpdate;
                return {...state}
            }
            case SEAT_REMOVE:{
                let bookedSeatListUpdate = [...state.bookedSeatList];
                let index = bookedSeatListUpdate.findIndex(pendingSeat => pendingSeat.soGhe === action.soGhe);
                if( index !== -1){
                    bookedSeatListUpdate.splice(index,1);
                }
                state.bookedSeatList = bookedSeatListUpdate;
                return {...state}
            }
            default: return {...state}
        }
}

export default bookingTicketReducer;