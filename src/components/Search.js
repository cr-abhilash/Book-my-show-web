import React, { Component } from "react";
import "./searchPage.css";
import MediaCard from "../components/Card";
export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      movies: [],
    };
  }
  componentDidMount() {
    console.log("compomnent mounted");
    this.setState({
      searchText: this.props.search,
    });
  }
  NavigateToMovie = (e, movie) => {
    console.log(e, movie);
    this.props.history.push(`/movies/${movie.id}`);
  };
  onChangeProps = () => {
    const filterData = this.props.movies.filter((movie) => {
      if (movie.Title.toLowerCase().indexOf(this.props.search) != -1) {
        return movie;
      }
    });
    console.log(filterData);
    this.setState({
      searchText: this.props.search,
      movies: filterData,
    });
  };
  render() {
    if (this.state.searchText != this.props.search) {
      this.onChangeProps();
    }
    console.log("search page", this.props);
    return (
      <div className="searchContainer">
        <h3 className="searchTitle">Search result</h3>
        <div className="searchMovieContainer">
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
