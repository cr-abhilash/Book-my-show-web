import React, { Component } from "react";
import "./Header.css";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signinStatus: false,
      signupStatus: false,
      menuState: null,
    };
  }
  handleClick = (event) => {
    this.setState({
      menuState: event.currentTarget,
    });
  };

  handleClose = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    this.setState({
      menuState: null,
      signinStatus: false,
      signupStatus: false,
    });
  };
  ChangeLoginState = () => {
    this.setState({
      signinStatus: true,
    });
  };
  render() {
    const data =
      this.state.signinStatus || this.state.signupStatus ? (
        <div className="userDetails">
          <div>
            <AccountCircleOutlinedIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={this.state.menuState}
              keepMounted
              open={Boolean(this.state.menuState)}
              onClose={this.handleClose}
              style={{ marginTop: 30 }}
            >
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <p>Hi ... </p>
        </div>
      ) : (
        <div className="signin-Block">
          <Link>
            <SignInDialog ChangeState={this.ChangeLoginState}></SignInDialog>
          </Link>
          <Link>
            <SignUpDialog ChangeState={this.ChangeLoginState}></SignUpDialog>
          </Link>
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
            <Link>Events</Link>
            <Link>Plays</Link>
            <Link>Sports</Link>
          </div>
          <div className="events-regestred">
            {this.state.signinStatus ? (
              <Link to="/userBooking">ListYourShow</Link>
            ) : null}
            <Link>Offers</Link>
          </div>
        </div>
      </div>
    );
  }
}
