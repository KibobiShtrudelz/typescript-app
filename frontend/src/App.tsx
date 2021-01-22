import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./app/components/Header";
import SignUp from "./app/pages/register";
import Main from "./app/components/Main";
import pathnames from "./pathnames";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />

      <Main>
        <Switch>
          <Route exact path={pathnames.root}></Route>
          <Route path={pathnames.signin}>
            <SignUp />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
