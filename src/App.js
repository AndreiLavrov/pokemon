import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homePage/HomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathAfterLogin } = this.state;

    return (
      <div className="root-wrapper">
        <React.Suspense fallback={<div>loading...</div>}>
          <HomePage />
        </React.Suspense>
      </div>
    );
  }
}

export default withRouter(App);
