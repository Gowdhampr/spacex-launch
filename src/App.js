import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Home from "./views/home";

/*
   App
 */
class App extends Component {
  render() {
    return (
      <div>
        <div className="routeSection">
          <Router>
            <Switch>
              <DefaultLayout
                exact
                name="Home"
                path="/"
                component={Home}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
