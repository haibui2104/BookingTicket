import React, { Component } from "react";
import { connect } from "react-redux";
import { seatRemoveAction } from "../Redux/Actions/BookingTicketActions";
class BookingInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghe da dat
          </span>{" "}
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghe dang dat
          </span>{" "}
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghe chua dat
          </span>{" "}
        </div>
        <div>
          <table className="table">
            <thead>
              <tr className="text-light">
                <th>So ghe</th>
                <th>Gia</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.bookedSeatList.map((pendingSeat, index) => {
                return (
                  <tr key={index}>
                    <td>{pendingSeat.soGhe}</td>
                    <td>{pendingSeat.gia.toLocaleString()}</td>
                    <td><button onClick={()=>{
                      this.props.dispatch(seatRemoveAction(pendingSeat.soGhe))
                    }}>Remove</button></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-light">
              <td></td>
              <td>Tong tien</td>
              <td>{this.props.bookedSeatList.reduce((totalMoney,pendingSeat,index)=>{
                  return totalMoney += pendingSeat.gia;
              },0).toLocaleString()}</td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bookedSeatList : state.bookingTicketReducer.bookedSeatList
  }
}
export default connect(mapStateToProps)(BookingInfo);
