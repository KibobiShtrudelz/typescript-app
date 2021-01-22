import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import MainGrid from "./app/components/MainGrid";
import Header from "./app/components/Header";
import Main from "./app/components/Main";
import pathnames from "./pathnames";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />

      <Main />

      <Switch>
        <Route exact path={pathnames.root}></Route>
        <Route path={pathnames.signin}>
          <h1>SIGN IN PAGE</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
