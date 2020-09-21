import React, { Component } from "react";
// import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getAllValue,findByTitleValue,removeAllValue,changeTutorial,changeIndex,searchTitleValue} from "../actions/action_list";



  class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    // this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    
  }

  componentDidMount() {
    // this.retrieveTutorials();
    this.props.getAllFetchValue();
  }

  onChangeSearchTitle(e) {
    const searchTitleValue = e.target.value;

      this.props.searchTitleFunc(searchTitleValue);
  }

  // retrieveTutorials() {

  //   this.props.getAllFetchValue();
  //   console.log("props.tutorials");

    // TutorialDataService.getAll()
    //   .then(response => {
    //     this.setState({
    //       tutorials: response.data
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  // }

  refreshList() {
    // this.retrieveTutorials();
    this.props.getAllFetchValue();
    
    //   this.props.currentTutorial=null,
    //   this.props.currentIndex= -1
    this.props.changeTutorialValueFromList(null)
    this.props.changeIndexValueFromList(-1)
    
  }

  setActiveTutorial(tutorial, index) {
    
    // this.props.currentTutorial= tutorial,
    // this.props.currentIndex= index
    this.props.changeTutorialValueFromList(tutorial)
    this.props.changeIndexValueFromList(index)
    
  }

  removeAllTutorials() {
this.props.removeAllValue()
    this.refreshList();
    // TutorialDataService.deleteAll()
    //   .then(response => {
    //     console.log(response.data);
    //     this.refreshList();
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }

  searchTitle(value)
  {
    console.log(value,"value")
    this.props.oneFetchValue(value)

  }

  // searchTitle() {
    // TutorialDataService.findByTitle(this.state.searchTitle)
    //   .then(response => {
    //     this.setState({
    //       tutorials: response.data
    //     });
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  // }

  render() {
    // const {  this.props.currentTutorial, this.props.currentIndex } = this.state;
    // const {tutorials}=this.props;
    console.log(this.props.searchTitle,"allprops");
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
                onClick={()=>this.searchTitle(this.props.searchTitle)}
                // onClick={()=>this.props.oneFetchValue(this.props.searchTitle)}
              >
                Search
              </button>
            </div>
          </div>
          <div id="head"> <h1>Enjoy your day at fullest..</h1> </div>
        </div>
        <div className="col-md-6" >
          <h4 id ="head-name"> Events List</h4>

          <ul className="list-group" id ="createEvent">
            {this.props.tutorials &&
              this.props.tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === this.props.currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6" id ="test">
          {this.props.currentTutorial ? (
            <div>
              <h4>Events</h4>
              <div>
                <label>
                  <strong>Event Status:</strong>
                </label>{" "}
                {this.props.currentTutorial.available}
              </div>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {this.props.currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {this.props.currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Booking:</strong>
                </label>{" "}
                {this.props.currentTutorial.published ? "Confirm" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + this.props.currentTutorial.id}
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

const mamStateToProps1=(state)=>{
  console.log(state,"state")
  return {
    tutorials:state.r3.tutorials,
    currentTutorial: state.r3.currentTutorial,
    currentIndex: state.r3.currentIndex,
    searchTitle: state.r3.searchTitle
  }
}

const mapDispatchToProps1=(dispatch)=>{
return{
  getAllFetchValue:()=>{dispatch(getAllValue())} ,
  oneFetchValue:(Title)=>{dispatch(findByTitleValue(Title))} ,
  removeAllValueFromList:()=>{dispatch(removeAllValue())} ,
  changeTutorialValueFromList:(val)=>{dispatch(changeTutorial(val))} ,
  changeIndexValueFromList:(val1)=>{dispatch(changeIndex(val1))} ,
  searchTitleFunc:(val1)=>{dispatch(searchTitleValue(val1))} 
}
  
}

export default connect(mamStateToProps1,mapDispatchToProps1)(TutorialsList);
