import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainGrid from "./app/components/MainGrid";
import Header from "./app/components/Header";
import Main from "./app/components/Main";
import pathnames from "./pathnames";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <MainGrid>
      <Header />

      <Main />

      <Router>
        <Switch>
          <Route exact path={pathnames.root}></Route>
        </Switch>
      </Router>
    </MainGrid>
  );
};

export default App;
