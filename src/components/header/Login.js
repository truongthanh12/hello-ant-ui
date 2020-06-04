import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Divider />
        <Menu.Item key="1">
          <Link to="/dang-nhap">
            <LogoutOutlined />
            Dang xuat
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          login1 <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}
export default Login;
