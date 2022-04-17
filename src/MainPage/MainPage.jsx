import React, { Component, Fragment } from "react";
import "./CSS/BaiTapBookingTicket.css";
import danhSachGheData from '../Data/danhSachGhe.json'
import SeatRow from "./SeatRow";
import BookingInfo from "./BookingInfo";
export default class MainPage extends Component {
    seatRowRender= () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <Fragment key={index} >
                <SeatRow seatRow={hangGhe} soHang={index}/>
            </Fragment>
        })
    }
  render() {
    return (
      <div className="bookingMovie" style={{ width: "100vw", height: "100vh" }}>
        <div
          className="darkLayer"
          style={{ backgroundColor: "rgba(0,0,0,0.7", height: "100vh" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <h1
                  className="display-4"
                  style={{ color: "orange", textAlign: "center" }}
                >
                  {" "}
                  DAT VE XEM PHIM <br />
                  CYBERLEARN.NV
                </h1>
                <h3
                  className="mt-2"
                  style={{ textAlign: "center", color: "white" }}
                >
                  Man hinh
                </h3>
                <div className="mt-2, display-flex, flex-direction: column, justtify-content: center">
                  <div className="screen"></div>
                </div>
                {this.seatRowRender()}
              </div>
              <div className="col-4">
                  <div className="text-light mt-2" style={{fontSize: '35px'}}>DANH SACH GHE BAN CHON</div>
                  <BookingInfo/>
              </div>
            </div>
          </div>
        </div>
        {/* <img src="./image/bgmovie.jpg"/> => ở file html thì mới đến folder image ở public  */}
      </div>
    );
  }
}
