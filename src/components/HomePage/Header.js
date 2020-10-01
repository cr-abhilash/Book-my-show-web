import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signinStatus: false,
      signupStatus: false,
    };
  }

  render() {
    const data =
      this.state.signinStatus || this.state.signupStatus ? (
        <div className="userDetails">
          <AccountCircleOutlinedIcon />
          <p>Hi Abhilash </p>
        </div>
      ) : (
        <div className="signin-Block">
          {/* <Link>
            <SignInDialog></SignInDialog>
          </Link>
          <Link>
            <SignUpDialog></SignUpDialog>
          </Link> */}
        </div>
      );
    console.log(data);
    return (
      <div className="Header-Container">
        <div className="header">
          <Link to="/homePage">
            <div className="title">
              <span>book</span>
              <span>
                <img
                  src={require("../Images/logo3.webp")}
                  style={{ width: 30, height: 30, margin: 7 }}
                />
              </span>
              <span>show</span>
            </div>
          </Link>
          <Link className="searchBarLink" to="/search">
            <div className="searchBar">
              <SearchOutlinedIcon />
              <input
                type="text"
                placeholder="search for movies, Events..."
                onChange={(e) => {
                  this.props.searchHandler(e);
                }}
              ></input>
            </div>
          </Link>
          {data}
        </div>
        <div className="navBar">
          <div className="events-category">
            <Link to="/movies">Movies</Link>
            <Link to="/tutorials">Events</Link>
            <Link>Plays</Link>
            <Link>Sports</Link>
          </div>
          <div className="events-regestred">
            <Link>ListYourShow</Link>
            <Link>Offers</Link>
          </div>
        </div>
      </div>
    );
  }
}
