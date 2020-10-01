import { Button } from "@material-ui/core";
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

    return <div class="SingleMovieContainer">hai</div>;
  }
}
