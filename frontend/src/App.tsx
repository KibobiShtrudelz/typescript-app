import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./app/components/header";
import Main from "./app/components/Main";
import pathnames from "./pathnames";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useEffect(() => {
    // TODO: Add cms call to "/me"
  }, []);

  return (
    <Router>
      <Header />

      <Main>
        <Switch>
          <Route exact path={pathnames.root}></Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
