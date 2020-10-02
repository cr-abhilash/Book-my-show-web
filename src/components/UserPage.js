import React, { Component } from "react";
import BookingCard from "./UserBooking";
import TutorialDataService from "../services/tutorial.service";
import "./UserPage.css";
export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Bookingdata: [],
    };
  }
  componentDidMount() {
    console.log("user page rendered");
    TutorialDataService.getBooking("abcd");
  }

  render() {
    return (
      <div className="userContainer">
        <h3 className="userTitle">Booking details</h3>
        <div className="userMovieContainer">
          {/* {this.state.movies.map((movie) => {
            return (
              <BookingCard
                key={movie.id}
                movie={movie}
                // NavigateToCatagory={this.NavigateToMovie}
              />
            );
          })} */}
          <BookingCard />
        </div>
      </div>
    );
  }
}
