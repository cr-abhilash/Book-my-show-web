import React, { Component } from "react";
import ContactUs from "../services/mail";
import { connect } from "react-redux";
import {
  getEventValue,
  changeTitle,
  changeDescription,
  changeAvailable,
  updateBookingValue,
  updateEventValue,
  deleteEventValue,
} from "./../actions/action_update";
import "../App.css";
class Event extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAvailable = this.onChangeAvailable.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.deleteEvents = this.deleteEvents.bind(this);
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }

  // get called whenever clicked on search button
  onChangeTitle(e) {
    const title = e.target.value;
    this.props.onChangeTitle1(title);
  }

  onChangeAvailable(e) {
    const available = e.target.value;
    this.props.onChangeAvailable1(available);
  }

  onChangeDescription(e) {
    const description = e.target.value;
    this.props.onChangeDescription1(description);
  }

  updateBooking(status) {
    var data = {
      id: this.props.currentEvent.id,
      available: this.props.currentEvent.available,
      title: this.props.currentEvent.title,
      description: this.props.currentEvent.description,
      Booking: status,
    };

    this.props.updateBooking1(this.props.currentEvent.id, data);
  }

  deleteEvents(id) {
    console.log("id", id);
    this.props.deleteEvent(id);
    this.props.history.push("/tutorials");
  }

  render() {
    console.log(this.props, "valueprops");
    return (
      <div>
        {this.props.currentEvent ? (
          <div className="edit-form">
            <h3>Event's Description</h3>
            <form>
              <div className="form-group">
                <label htmlFor="available">Event Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="available"
                  value={this.props.currentEvent.available}
                  onChange={this.onChangeAvailable}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.props.currentEvent.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.props.currentEvent.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Booking Status:</strong>
                </label>
                {this.props.currentEvent.Booking ? "Confirm" : "Pending"}
              </div>
            </form>

            {this.props.currentEvent.Booking ? (
              <button
                id="publish"
                className="badge badge-primary mr-2"
                onClick={() => this.updateBooking(false)}
              >
                Pending
              </button>
            ) : (
              <button
                id="notPublish"
                className="badge badge-primary mr-2"
                onClick={() => this.updateBooking(true)}
              >
                Confirm
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={() => this.deleteEvents(this.props.currentEvent.id)}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={() =>
                this.props.updateEvent(
                  this.props.currentEvent.id,
                  this.props.currentEvent
                )
              }
            >
              Update
            </button>
            <p>{this.props.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on for Detail the Event...</p>
          </div>
        )}
        <div id="contract">
          <ContactUs />
        </div>
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    currentEvent: state.eventInfoReducer.currentEvent,
    message: state.eventInfoReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvent: (value1) => {
      dispatch(getEventValue(value1));
    },
    onChangeTitle1: (value) => {
      dispatch(changeTitle(value));
    },
    onChangeAvailable1: (value) => {
      dispatch(changeAvailable(value));
    },
    onChangeDescription1: (value) => {
      dispatch(changeDescription(value));
    },
    updateBooking1: (value, value1) => {
      dispatch(updateBookingValue(value, value1));
    },
    updateEvent: (value, value1) => {
      dispatch(updateEventValue(value, value1));
    },
    deleteEvent: (value) => {
      dispatch(deleteEventValue(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Event);
