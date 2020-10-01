import React, { Component } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

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

  render() {
    const movies = this.props.movies;
    return (
      <div className="HomePage">
        <div className="Ncontainer">
          <div className="HomePage-title">
            <h2 onClick={this.featchData}>Movies</h2>
            <Link>view all</Link>
          </div>
        </div>
        <div className="Ncontainer">
          <div className="HomePage-title">
            <h2>Events</h2>
            <Link>view all</Link>
          </div>
          <div className="HomePage-Events"></div>
        </div>
      </div>
    );
  }
}
