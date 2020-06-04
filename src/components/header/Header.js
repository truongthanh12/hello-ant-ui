import React from "react";
import "antd/dist/antd.css";
import "../../App.css";
import { Layout, Menu } from "antd";
import { Route, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ProjectOutlined,
  PartitionOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
  BranchesOutlined,
  UngroupOutlined,
} from "@ant-design/icons";
import Login from "./Login";
import Employee from "../content/nhanvien/Employee";
import Deparment from "../content/phongban/Department";
import GroupAccount from "../content/nhom-taikhoan/GroupAccount";
import Account from "../content/taikhoan/Account";
import LoginPage from "../content/LoginPage";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <h6>Hệ thông giám sát qua camera</h6>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Danh sách">
              <Menu.Item key="1">
                <Link to="/">
                  <UsergroupAddOutlined />
                  Phong ban
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/nhan-vien">
                  <UserOutlined />
                  Nhan vien
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ProjectOutlined />} title="Hệ thống">
              <Menu.Item key="5">
                <Link to="/nhom-tai-khoan">
                  <UsergroupAddOutlined />
                  Nhóm tài khoản
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/tai-khoan">
                  <UserOutlined />
                  Tài khoản
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<PartitionOutlined />} title="An ninh">
              <Menu.Item key="11">
                <Link to="/xem-camera">
                  <VideoCameraOutlined />
                  Xem camera
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/bao-cao">
                  <BranchesOutlined />
                  Xem báo cáo
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Cài đặt">
              <Menu.Item key="9">
                <Link to="/danh-sach-camera">
                  <VideoCameraOutlined />
                  Danh sách camera
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/cau-hinh-he-thong">
                  <UngroupOutlined />
                  Cấu hình hệ thống
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <span className="login">
              <Login />
            </span>
          </Header>
          <Route exact path="/" component={Deparment} />
          <Route path="/nhan-vien" component={Employee} />
          <Route path="/nhom-tai-khoan" component={GroupAccount} />
          <Route path="/tai-khoan" component={Account} />
          <Route path="/dang-nhap" component={LoginPage} />
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
