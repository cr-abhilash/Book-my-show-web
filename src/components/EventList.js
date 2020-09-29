import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllValue,
  findByTitleValue,
  removeAllValue,
  changeEvent,
  changeIndex,
  searchTitleValue,
} from "../actions/action_list";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEvent = this.setActiveEvent.bind(this);
    this.removeAllEvents= this.removeAllEvents.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
  }

  componentDidMount() {
    this.props.getAllFetchValue();
  }

  // get called whenever input value cahnged inside search bar
  onChangeSearchTitle(e) {
    const searchTitleValue = e.target.value;
    this.props.searchTitleFunc(searchTitleValue);
  }

  refreshList() {
    this.props.getAllFetchValue();
    this.props.changeEventValueFromList(null);
    this.props.changeIndexValueFromList(-1);
  }

  // when clicked on any event set that event information inside currentTutorial
  setActiveEvent(tutorial, index) {
    this.props.changeEventValueFromList(tutorial);
    this.props.changeIndexValueFromList(index);
  }

  // when clicked on removealll button
  removeAllEvents() {
    this.props.removeAllValue();
    this.refreshList();
  }

  // called when click on search button 
  searchTitle(value) {
    console.log(value, "value");
    this.props.oneFetchValue(value);
  }

  render() {
    console.log(this.props.searchTitle, "allprops");
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={this.props.searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => this.searchTitle(this.props.searchTitle)}
              >
                Search
              </button>
            </div>
          </div>
          <div id="head">
            {" "}
            <h1>Enjoy your day at fullest..</h1>{" "}
          </div>
        </div>
        <div className="col-md-6">
          <h4 id="head-name"> Events List</h4>

          <ul className="list-group" id="createEvent">
            {this.props.events &&
              this.props.events.map((event, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === this.props.currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveEvent(event, index)}
                  key={index}
                >
                  {event.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllEvents}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6" id="test">
          {this.props.currentEvent ? (
            <div>
              <h4>Events</h4>
              <div>
                <label>
                  <strong>Event Status:</strong>
                </label>{" "}
                {this.props.currentEvent.available}
              </div>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {this.props.currentEvent.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {this.props.currentEvent.description}
              </div>
              <div>
                <label>
                  <strong>Booking:</strong>
                </label>{" "}
                {this.props.currentEvent.published ? "Confirm" : "Pending"}
              </div>

              <Link
                to={"/Events/" + this.props.currentEvent.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps1 = (state) => {
  console.log(state, "state");
  return {
    events: state.eventListReducer.events,
    currentEvent: state.eventListReducer.currentEvent,
    currentIndex: state.eventListReducer.currentIndex,
    searchTitle: state.eventListReducer.searchTitle,
  };
};

const mapDispatchToProps1 = (dispatch) => {
  return {
    getAllFetchValue: () => {
      dispatch(getAllValue());
    },
    oneFetchValue: (Title) => {
      dispatch(findByTitleValue(Title));
    },
    removeAllValueFromList: () => {
      dispatch(removeAllValue());
    },
    changeEventValueFromList: (val) => {
      dispatch(changeEvent(val));
    },
    changeIndexValueFromList: (val1) => {
      dispatch(changeIndex(val1));
    },
    searchTitleFunc: (val1) => {
      dispatch(searchTitleValue(val1));
    },
  };
};

export default connect(mapStateToProps1, mapDispatchToProps1)(EventList);
