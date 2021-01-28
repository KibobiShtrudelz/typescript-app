import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./app/components/header";
import Main from "./app/components/Main";
import pathnames from "./pathnames";

import { useAppDispatch } from "./app/redux/store";
import userStore from "./app/redux/userStore";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userStore.actions.fetchUser());
  }, [dispatch]);

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
