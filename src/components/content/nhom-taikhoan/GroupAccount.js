import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import TableGroupAccount from "./Table";
import ModalGroupAccount from "./Modal";
const { Content } = Layout;

class Account extends React.Component {
  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <ModalGroupAccount />
            <TableGroupAccount />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Account;
