import React, { Component } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import MediaCard from "./Card";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
    };
  }
  componentDidMount() {
    console.log("component rendered");
    console.log("props", this.props);
  }
  NavigateToMovie = (e, movie) => {
    console.log(e, movie);
    this.props.history.push(`/movies/${movie.id}`);
  };
  render() {
    const movies = this.props.movies;
    return (
      <div className="HomePage">
        <div className="Ncontainer">
          <div className="HomePage-title">
            <h2>Movies</h2>
            <Link to="/movies">view all</Link>
          </div>
          <div className="HomePage-movies">
            {movies.map((movie) => {
              if (movie.id < 4) {
                return (
                  <MediaCard
                    movie={movie}
                    NavigateToCatagory={this.NavigateToMovie}
                  />
                );
              }
            })}
          </div>
        </div>
        {/* <div className="Ncontainer">
          <div className="HomePage-title">
            <h2>Events</h2>
            <Link>view all</Link>
          </div>
          <div className="HomePage-Events">
            {/* <MediaCard />
            <MediaCard />
            <MediaCard /> */}
        {/* <h2>event details</h2> 
          </div>
        </div>  */}
      </div>
    );
  }
}
