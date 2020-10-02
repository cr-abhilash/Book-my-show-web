import React, { Component } from "react";
import "./BookingPage.css";
import TutorialDataService from "../../services/tutorial.service";
export default class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theatreName: "",
      shoeTime: "",
      Date: "",
      NoOfSeats: 0,
      Amount: 0,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get("date"));
    //TutorialDataService.Booking(data);
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
              <option value="PVR">PVR, Kormangala Bengaluru Karnataka</option>
              <option value="INOX">
                INOX, Mantri Square Bengaluru Karnataka
              </option>
              <option value="Urvashi" required>
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
