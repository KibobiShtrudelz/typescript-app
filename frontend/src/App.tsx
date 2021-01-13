import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import MainGrid from "./app/components/MainGrid";
import Header from "./app/components/Header";
import Sider from "./app/components/Sider";
import Main from "./app/components/Main";
import Footer from "./app/components/Footer";
import pathnames from "./pathnames";

const App = () => {
  return (
    <MainGrid>
      <Header />

      <Sider column="1 / 2" row="2 / 12" borderRadius="0 10px 10px 0" />

      <Main />

      <Sider column="12 / 13" row="2 / 12" borderRadius="10px 0 0 10px" />

      <Router>
        <Switch>
          <Route exact path={pathnames.root}></Route>
        </Switch>
      </Router>

      <Footer />
    </MainGrid>
  );
};

export default App;
