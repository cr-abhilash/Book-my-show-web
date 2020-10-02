import React, { Component } from "react";
import BookingCard from "./UserBooking";
import TutorialDataService from "../services/tutorial.service";
// import data from "./Userdetails.json";
import "./UserPage.css";
export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Bookingdata: [],
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("userId");
    console.log("user page rendered");
    TutorialDataService.getBooking(id)
      .then((res) => {
        console.log(res.data);
        if (res.statusText == "OK") {
          this.setState({
            Bookingdata: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  NavigateToMovie = (e, movie) => {
    this.props.history.push(`/movies/${movie.id}`);
  };
  render() {
    const data = [
      {
        bookingID: 1,
        userID: "srikanta@gmail.com",
        theaterID: "1",
        movieID: "4",
        paymentStatus: "paid",
        seatNumber: 4,
        time: 10,
        createdAt: "2020-09-30T08:47:22.000Z",
        updatedAt: "2020-09-30T08:47:22.000Z",
        theatre_id: 1,
        theatre_Name: "PVR",
        theatre_Location: "Kormangala Bengaluru Karnataka",
        city_Id: "1",
        id: 1,
        Title: "inception",
        Director: "Christopher Nolan",
        Runtime: "148 minutes",
        Genre: "science fiction",
        Rating: "9.9",
        Metascore:
          "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
        Votes: "4.5M",
        releasDate: " 16 July 2010",
        movie_img_url:
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/inception-et00004883-24-03-2017-20-09-10.jpg",
      },
    ];
    return (
      <div className="userContainer">
        <h3 className="userTitle">Booking details</h3>
        <div className="userMovieContainer">
          {this.state.Bookingdata.map((movie) => {
            return (
              <BookingCard
                key={movie.id}
                movie={movie}
                NavigateToCatagory={this.NavigateToMovie}
              />
            );
          })}
          {/* <BookingCard /> */}
        </div>
      </div>
    );
  }
}
