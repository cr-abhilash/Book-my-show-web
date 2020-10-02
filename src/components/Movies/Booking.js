import React, { Component } from "react";
import "./BookingPage.css";
import TutorialDataService from "../../services/tutorial.service";
export default class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Amount: 0,
      count: 0,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("data", data);
    // console.log(
    //   typeof data.get("date"),
    //   data.get("theatre"),
    //   data.get("shows"),
    //   data.get("seat"),
    //   this.state.Amount
    // );
    const BookingData = {
      userID: "gowda@gmail.com",
      theaterID: data.get("theatre"),
      movieID: "4",
      paymentStatus: "paid",
      seatNumber: data.get("seat"),
      time: String(data.get("date")) + "/" + data.get("shows"),
    };
    if (this.state.count == 0) {
      TutorialDataService.Booking(BookingData)
        .then((res) => {
          this.state.count++;
          if (res.statusText == "OK") {
            alert("Booking successful");
          } else {
            alert("Booking failed");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  CalcAmount = (event) => {
    const n = event.target.value;
    this.setState({
      Amount: n * 299,
    });
  };
  render() {
    return (
      <div className="BookingPage">
        <div style={{ color: "#1F2533", paddingBottom: "10px" }}>
          <h3>Movie Booking</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label>Select theatre :</label>
            <select className="theatre" name="theatre" id="theatre" required>
              <option value="" disabled selected hidden>
                {" "}
                Select theatre
              </option>
              <option value="1">PVR, Kormangala Bengaluru Karnataka</option>
              <option value="2">INOX, Mantri Square Bengaluru Karnataka</option>
              <option value="3" required>
                Urvashi, lalbagh Road Bengaluru Karnataka{" "}
              </option>
            </select>
          </div>
          <div className="row">
            <label>Select Date :</label>
            <input
              className="date"
              type="date"
              name="date"
              min="2020-10-01"
              max="2020-10-25"
              required
            ></input>
          </div>
          <div className="row">
            <label>Select Show :</label>
            <select className="show" name="shows" id="shows">
              <option value="" disabled selected hidden>
                Select show time
              </option>
              <option value="10.00">10.00 AM</option>
              <option value="1.00">1.00 AM</option>
              <option value="4.00">4.00 AM</option>
              <option value="7.00">7.00 AM</option>
            </select>
          </div>
          <div className="row">
            <label>Number of seats :</label>
            <input
              className="seats"
              type="number"
              name="seat"
              min="1"
              max="25"
              required
              onChange={this.CalcAmount}
              placeholder="Enter number of seats"
            />
          </div>
          <div className="row">
            <label>Total Amount :</label>
            <span className="Amount">{this.state.Amount}</span>
          </div>

          <input className="row submit" type="submit" value="Make Payment" />
        </form>
      </div>
    );
  }
}
