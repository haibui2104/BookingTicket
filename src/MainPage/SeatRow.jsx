import React, { Component} from "react";
import {connect} from 'react-redux';
import { seatBookingAction } from "../Redux/Actions/BookingTicketActions";
class SeatRow extends Component {
  seatRender = () => {
    return this.props.seatRow.danhSachGhe.map((seat, index) => {
      let bookedSeatCss = "";
      let disabled = false;
      if (seat.daDat) {
        bookedSeatCss = "gheDuocChon";
        disabled = true;
      }
      let pendingSeatCss = '';
      let pendingSeatIndex = this.props.bookedSeatList.findIndex(pendingSeat => pendingSeat.soGhe === seat.soGhe);
      if ( pendingSeatIndex !== -1){
        pendingSeatCss = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${bookedSeatCss} ${pendingSeatCss}  `}
          key={index}
          onClick={()=>{
            this.props.seatBooking(seat)
          }}
        >
          {seat.soGhe}
        </button>
      );
    });
  };
  rowNumberRender = () => {
    return this.props.seatRow.danhSachGhe.map((row, index) => {
      return <button className="rowNumber">{row.soGhe}</button>; 
    });
  };
  rowRender = () => {
    if (this.props.soHang === 0) {
      return (
        <div className="ml-4">
          {this.props.seatRow.hang} {this.rowNumberRender()}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.seatRow.hang} {this.seatRender()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-3"
        style={{ fontSize: "30px" }}
      >
        {this.rowRender()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookedSeatList : state.bookingTicketReducer.bookedSeatList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    seatBooking : (seat) =>{
      dispatch(seatBookingAction(seat))
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(SeatRow)