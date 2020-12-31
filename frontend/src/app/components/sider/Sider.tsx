import styled from "styled-components";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
// import Header from "../header/Header";

const {
  // Header,
  // Content,
  // Footer,
  Sider,
} = Layout;

const SiderMenu = (props: any): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout>
      <StyledSider
        breakpoint="xs"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />

        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>

          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>

          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>

          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>

          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>

          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>

          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>

          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>

          <Menu.Item key="9" icon={<ShopOutlined />}>
            nav 9
          </Menu.Item>
        </Menu>
      </StyledSider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        {props.children}

        {/* 
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <h1>Sider here</h1>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default SiderMenu;

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  background-color: #fff;
`;
