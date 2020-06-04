import React from "react";
import "antd/dist/antd.css";
import { Layout, Button } from "antd";
import TableDepartment from "./Table";
import ModalDepartment from "./Modal";
import { PlusOutlined } from "@ant-design/icons";
const { Content } = Layout;

class Department extends React.Component {
  render() {
    return (
      <div>
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
              <Button
                icon={<PlusOutlined />}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Them
              </Button>
              <ModalDepartment />
              <TableDepartment />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Department;
