import React from "react";
import "antd/dist/antd.css";
import { Layout, Button, Select, Input } from "antd";
import TableEmployee from "./Table";
import { PlusOutlined } from "@ant-design/icons";
import ModalAccount from "./Modal";

const { Content } = Layout;
const { Option } = Select;
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
            <ModalAccount />
            <div className="search-employee">
              <div className="search-employee">
                <p>Nhom tai khoan:</p>
                <Select defaultValue="Tat ca" style={{ width: 200 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>

                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
            </div>
            <TableEmployee />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Account;
