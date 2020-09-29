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
          <Link to="/">
            <h1 className="navbar-brand">MyFunShow</h1>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Events"} className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addEvent"} className="nav-link">
                Add Event
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path= "/" component={HomePage} />
            <Route exact path="/Events" component={EventList} />
            <Route exact path="/addEvent" component={AddEvent} />
            <Route path="/Events/:id" component={Event} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myName: state.name,
  };
};
export default connect(mapStateToProps)(App);
