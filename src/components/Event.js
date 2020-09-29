import React, { Component } from "react";
import ContactUs from "../services/mail";
import { connect } from "react-redux";
import {
  getTutorialValue,
  changeTitle,
  changeDescription,
  changeAvailable,
  updateBookingValue,
  updateTutorialValue,
  deleteTutorialValue,
} from "../actions/action_update";
import "../App.css";
class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAvailable = this.onChangeAvailable.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);
  }

  componentDidMount() {
    this.props.getTutorial(this.props.match.params.id);
  }

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
      id: this.props.currentTutorial.id,
      available: this.props.currentTutorial.available,
      title: this.props.currentTutorial.title,
      description: this.props.currentTutorial.description,
      Booking: status,
    };

    this.props.updateBooking1(this.props.currentTutorial.id, data);
  }

  deleteTutorial(id) {
    console.log("id", id);
    this.props.deleteTutorial1(id);
    this.props.history.push("/tutorials");
  }

  render() {
    console.log(this.props, "valueprops");
    return (
      <div>
        {this.props.currentTutorial ? (
          <div className="edit-form">
            <h3>Event's Description</h3>
            <form>
              <div className="form-group">
                <label htmlFor="available">Event Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="available"
                  value={this.props.currentTutorial.available}
                  onChange={this.onChangeAvailable}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.props.currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.props.currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Booking Status:</strong>
                </label>
                {this.props.currentTutorial.Booking ? "Confirm" : "Pending"}
              </div>
            </form>

            {this.props.currentTutorial.Booking ? (
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
              onClick={() => this.deleteTutorial(this.props.currentTutorial.id)}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={() =>
                this.props.updateTutorial(
                  this.props.currentTutorial.id,
                  this.props.currentTutorial
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

const mamStateToProps4 = (state) => {
  return {
    currentTutorial: state.r4.currentTutorial,

    message: state.r4.message,
  };
};

const mapDispatchToProps4 = (dispatch) => {
  return {
    getTutorial: (value1) => {
      dispatch(getTutorialValue(value1));
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
    updateTutorial: (value, value1) => {
      dispatch(updateTutorialValue(value, value1));
    },
    deleteTutorial1: (value) => {
      dispatch(deleteTutorialValue(value));
    },
  };
};
export default connect(mamStateToProps4, mapDispatchToProps4)(Tutorial);
