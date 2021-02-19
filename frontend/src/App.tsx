import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import React, { useEffect } from "react";

import "./App.css";

import FallbackComponent from "./app/components/fallbackComponent";
import FiltersNav from "./app/components/FiltersNav";
import PublicRoute from "./routes/PublicRoute";
import Header from "./app/components/header";
import Main from "./app/components/Main";
import Root from "./app/pages/root";
import routes from "./routes";

import { useAppDispatch } from "./app/redux/store";
import userStore from "./app/redux/userStore";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userStore.actions.fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Header />
      </ErrorBoundary>

      <FiltersNav />

      <Main>
        <Switch>
          <PublicRoute exact path={routes.public.root}>
            <Root />
          </PublicRoute>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
