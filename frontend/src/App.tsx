import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import Header from "./app/components/header/Header";
import Content from "./app/components/content/Content";
import Footer from "./app/components/footer/Footer";
import Sider from "./app/components/signup/Sider";
import SignUp from "./app/pages/signUp/SignUp";

import "./App.css";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Content>
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
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;
