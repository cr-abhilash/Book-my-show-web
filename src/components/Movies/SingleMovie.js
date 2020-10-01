import React, { Component } from "react";
import "./SingleMoviePage.css";

import TutorialDataService from "../../services/tutorial.service";
export default class SingleMoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: {},
    };
  }

  componentDidMount() {
    this.featchMovieDataById(this.props.match.params.id);
  }

  NavigateToMovie = (e) => {
    console.log("click");
    this.props.history.push(`/movies/123/Booking`);
  };
  featchMovieDataById(id) {
    TutorialDataService.get(id)
      .then((response) => {
        this.setState({
          movieData: { ...response.data },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const movie = this.state.movieData;

    return (
      <div class="SingleMovieContainer">
        <div className="MovieImage">
          <img
            src
            className="media"
            src={movie.movie_img_url}
            className="SingleMovieImage"
          ></img>
        </div>
        <div className="MovieDetails">
          <div className="MovieTitleInfo">
            <div>
              <h5>{movie.Title}</h5>
              <p>{`${movie.Genre} | ${movie.Runtime} | ${movie.Rating}`}</p>
            </div>
            <div>
              <button className="BookingButton" onClick={this.NavigateToMovie}>
                Book Tickets
              </button>
            </div>
          </div>
          <hr className="HorizontalLine" />
          <p>
            Watch on your nearest theatre | <span>&#8377;</span> 299
          </p>
          <hr className="HorizontalLine" />
          <p>Director Name: {movie.Director}</p>
          <p>StoryLine: {movie.Metascore}</p>
        </div>
      </div>
    );
  }
}
