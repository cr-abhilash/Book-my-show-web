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
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="BodyContent">
          <Switch>
            <Route exact path={["/", "/homePage"]} component={HomePage} />
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
