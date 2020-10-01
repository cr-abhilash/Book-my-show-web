import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Contract from "./services/mail";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import homePage from "./components/home.page";
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="BodyContent">
          <Switch>
            {/* <Route exact path={["/", "/homePage"]} component={homePage} /> */}
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
