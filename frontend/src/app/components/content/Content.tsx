import { Layout, Avatar } from "antd";
import React from "react";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";

const Content = (props: any): JSX.Element => {
  const { Content } = Layout;

  return <Content>{props.children}</Content>;
};

export default Content;
