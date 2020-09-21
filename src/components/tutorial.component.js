import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import ContactUs from "../services/mail";
import {connect} from 'react-redux';
// import { Switch, Route, Link } from "react-router-dom";
import {getTutorialValue,changeTitle,changeDescription,changeAvailable,updateBookingValue} from './../actions/action_update'
import "../App.css";
 class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAvailable = this.onChangeAvailable.bind(this);
    // this.getTutorial = this.getTutorial.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);
  
    // this.state = {
    //   currentTutorial: {
    //     id: null,
    //     title: "",
    //     description: "",
    //     Booking: false,
    //     available: "",
    //   },
    //   message: "",
    // };
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
    this.props.onChangeAvailable1(available)
    
  }

  onChangeDescription(e) {
    const description = e.target.value;
    this.props.onChangeDescription1(description)
   
  }

  // getTutorial(id) {
  //   TutorialDataService.get(id)
  //     .then(response => {
  //       this.setState({
  //         currentTutorial: response.data
  //       });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  updateBooking(status) {
    var data = {
      id: this.props.currentTutorial.id,
      available:this.props.currentTutorial.available,
      title: this.props.currentTutorial.title,
      description: this.props.currentTutorial.description,
      Booking: status
    };

    this.props.updateBooking1(this.props.currentTutorial.id, data)
    // TutorialDataService.update(this.state.currentTutorial.id, data)
    //   .then(response => {
    //     this.setState(prevState => ({
    //       currentTutorial: {
    //         ...prevState.currentTutorial,
    //         Booking: status
    //       }
    //     }));
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Event was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
        console.log(this.props.history);
        
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        
        {currentTutorial ? (
          <div className="edit-form">
            <h3>Event's Description</h3>
            <form>
            <div className="form-group">
                <label htmlFor="available">Event Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="available"
                  value={currentTutorial.available}
                  onChange={this.onChangeAvailable}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Booking Status:</strong>
                </label>
                {currentTutorial.Booking ? "Confirm" : "Pending"}
              </div>
            </form>

            {currentTutorial.Booking ? (
              <button id="publish"
                className="badge badge-primary mr-2"
                onClick={() => this.updateBooking(false)}
              >
                Pending
              </button>
            ) : (
              <button id="notPublish"
                className="badge badge-primary mr-2"
                onClick={() => this.updateBooking(true)}
              >
                Confirm
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on for Detail the Event...</p>
          </div>
        )}
        <div id="contract">
        <ContactUs/>
        </div>
        
      </div>
    );
  
  }
}

const mamStateToProps4=(state)=>{
  return {
    currentTutorial:state.r4.currentTutorial
  }
}

const mapDispatchToProps4=(dispatch)=>{
return{
  getTutorial:(value1)=>{dispatch(getTutorialValue(value1))} ,
  onChangeTitle1:(value)=>{dispatch(changeTitle(value))} ,
  onChangeAvailable1:(value)=>{dispatch(changeAvailable(value))} ,
  onChangeDescription1:(value)=>{dispatch(changeDescription(value))} ,
  updateBooking1:(value)=>{dispatch(updateBookingValue(value))} 
}
  
}
export default connect(mamStateToProps4,mapDispatchToProps4)(Tutorial);

