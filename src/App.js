import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddEvent from "./components/AddEvent";
import Event from "./components/Event";
import EventList from "./components/EventList";
import HomePage from "./components/HomePage";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.myName);
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/homePage" className="navbar-brand">
            MyFunShow
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Event
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path="/Events" component={EventList} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route path="/Events/:id" component={Event} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mamStateToProps = (state) => {
  return {
    myName: state.name,
  };
};
export default connect(mamStateToProps)(App);
