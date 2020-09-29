import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  createTitle,
  createTableValue,
  newTutorial,
  changeAvailableAnother,
  changeDescriptionAnother,
} from "../actions/action_add";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAvailable = this.onChangeAvailable.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
  }

  onChangeTitle(e) {
    this.props.createTitleValue(e.target.value);
  }

  onChangeDescription(e) {
    this.props.onChangeDescription1(e.target.value);
  }

  onChangeAvailable(e) {
    this.props.onChangeAvailable1(e.target.value);
  }

  saveTutorial() {
    var data = {
      available: this.props.available,
      title: this.props.title,
      description: this.props.description,
    };

    this.props.createTableValue1(data);
  }
  render() {
    console.log(this.props, "props");
    return (
      <div className="submit-form">
        {this.props.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button
              className="btn btn-success"
              onClick={this.props.newTutorialValue}
            >
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="available">Event Status</label>
              <input
                type="text"
                className="form-control"
                id="available"
                required
                value={this.props.available}
                onChange={this.onChangeAvailable}
                name="available"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.props.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.props.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mamStateToProps = (state) => {
  return {
    id: state.r2.id,
    title: state.r2.title,
    description: state.r2.description,
    available: state.r2.r2available,
    Booking: state.r2.Booking,

    submitted: state.r2.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTitleValue: (tittle) => {
      dispatch(createTitle(tittle));
    },
    createTableValue1: (value) => {
      dispatch(createTableValue(value));
    },
    newTutorialValue: () => {
      dispatch(newTutorial());
    },
    onChangeAvailable1: (value) => {
      dispatch(changeAvailableAnother(value));
    },
    onChangeDescription1: (value) => {
      dispatch(changeDescriptionAnother(value));
    },
  };
};
export default connect(mamStateToProps, mapDispatchToProps)(AddTutorial);