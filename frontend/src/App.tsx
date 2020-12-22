import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from "./app/pages/signup/Signup";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <h1>My new TS app</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
