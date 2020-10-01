import React, { Component } from "react";
import "./MoviePage.css";
import MediaCard from "../Card";
import { Link, Route } from "react-router-dom";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({
      movies: this.props.movies,
    });
  }
  NavigateToMovie = (e, movie) => {
    console.log(e, movie);
    this.props.history.push(`/movies/${movie.id}`);
  };
  PrepareData = (genre) => {
    console.log(genre);
    if (genre === "All") {
      this.setState({
        movies: this.props.movies,
      });
    } else {
      const movieList = this.props.movies.filter((movie) => {
        if (movie.Genre === "science fiction") {
          movie.Genre = "sci-fi";
        }
        if (movie.Genre === genre) {
          return movie;
        }
      });
      this.setState({
        movies: movieList,
      });
    }
  };

  render() {
    return (
      <div className="CatagoryPage">
        <div className="MoviesPageTitle">
          <h2>Movies</h2>
          <div className="movieGenres">
            <Link to="/movies">
              <span
                onClick={() => {
                  this.PrepareData("All");
                }}
              >
                All
              </span>
            </Link>
            <Link to="/movies">
              <span
                onClick={() => {
                  this.PrepareData("Drama/Action");
                }}
              >
                Action
              </span>
            </Link>

            <Link to="/movies">
              <span
                onClick={() => {
                  this.PrepareData("Drama/Comedy");
                }}
              >
                Comedy
              </span>
            </Link>
            <Link to="/movies">
              <span
                onClick={() => {
                  this.PrepareData("biopic");
                }}
              >
                biopic
              </span>
            </Link>
            <Link to="/movies">
              <span
                onClick={() => {
                  this.PrepareData("sci-fi");
                }}
              >
                science/fiction
              </span>
            </Link>
          </div>
        </div>
        <div className="listOfMovies">
          {this.state.movies.map((movie) => {
            return (
              <MediaCard
                key={movie.id}
                movie={movie}
                NavigateToCatagory={this.NavigateToMovie}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
