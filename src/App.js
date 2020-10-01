import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Contract from "./services/mail";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import HomePage from "./components/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import TutorialDataService from "./services/tutorial.service";
import MoviesPage from "./components/Movies/MoviesPage";
import SingleMoviePage from "./components/Movies/SingleMovie";
import Booking from "./components/Movies/Booking";
import SearchPage from "./components/Search";
class App extends Component {
  constructor(props) {
    super(props);
    //this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.state = {
      moviesData: [],
      search: "",
    };
  }
  componentDidMount() {
    this.retrieveTutorials();
  }
  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response) => {
        this.setState({
          moviesData: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="BodyContent">
          <Switch>
            <Route
              exact
              path={["/", "/homePage"]}
              render={(props) => (
                <HomePage {...props} movies={this.state.moviesData} />
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <SearchPage
                  {...props}
                  movies={this.state.moviesData}
                  search={this.state.search}
                />
              )}
            />
            <Route
              exact
              path="/movies/:id/booking"
              render={(props) => <Booking />}
            />
            <Route
              exact
              path="/movies/:id"
              render={(props) => <SingleMoviePage {...props} />}
            />
            <Route
              exact
              path="/movies"
              render={(props) => (
                <MoviesPage {...props} movies={this.state.moviesData} />
              )}
            />
            <Route exact path="/tutorials" component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
