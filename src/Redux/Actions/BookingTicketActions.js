import { SEAT_BOOKING, SEAT_REMOVE } from "../Type/BookingTickerType"
export const seatBookingAction =  (seat) => {
    return {
        type: SEAT_BOOKING,
        seat
    }
}
export const seatRemoveAction =  (soGhe) => {
    return {
        type: SEAT_REMOVE,
        soGhe
    }
}