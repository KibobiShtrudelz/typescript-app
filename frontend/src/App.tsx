import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import MainContentGrid from "./app/components/MainContentGrid";
import pathnames from "./pathnames";

const App = () => {
  return (
    <AppWrapper className="App_wrapper">
      <Header />

      <MainContentGrid>
        <Router>
          <Switch>
            <Route exact path={pathnames.root}></Route>
          </Switch>
        </Router>
      </MainContentGrid>

      <Footer />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 50px;

  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
