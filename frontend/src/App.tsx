import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import Header from "./app/components/header/Header";
import Content from "./app/components/content/Content";
import Footer from "./app/components/footer/Footer";
import SiderMenu from "./app/components/sider/Sider";

import "./App.css";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderMenu>
        <Header />
      </SiderMenu>

      <Content>
        <Router>
          <Switch>
            <Route exact path="/"></Route>

            <Route path="/cart"></Route>

            <Route path="/settings"></Route>
          </Switch>
        </Router>
      </Content>

      <Footer />
    </Layout>
  );
};

export default App;
