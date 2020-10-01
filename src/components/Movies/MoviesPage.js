import React, { Component } from "react";
import "./MoviePage.css";
import MediaCard from "../Card";
import { Link, Route } from "react-router-dom";

export default class MoviesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 9,
      movies: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.setState({
      movies: this.props.movies,
    });
  }

  PrepareData = (genre) => {
    console.log(genre);
  };
  // let moviesList = this.props.filter(movie =>{

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
      </div>
    );
  }
}
