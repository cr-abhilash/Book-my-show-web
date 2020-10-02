import React, { Component } from "react";
import BookingCard from "./UserBooking";
import TutorialDataService from "../services/tutorial.service";
export default class UserPage extends Component {
  render() {
    return (
      <div className="userContainer">
        <h3 className="userTitle">Booking Deatils</h3>
        <div className="userMovieContainer">
          {/* {this.state.movies.map((movie) => {
            return (
              <BookingCard
                key={movie.id}
                movie={movie}
                NavigateToCatagory={this.NavigateToMovie}
              />
            );
          })} */}
        </div>
      </div>
    );
  }
}
