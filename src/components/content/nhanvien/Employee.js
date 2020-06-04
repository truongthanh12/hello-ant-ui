import React from "react";
import "antd/dist/antd.css";
import { Layout, Select, Input } from "antd";
import TableEmployee from "./Table";
import ModalEmployee from "./Modal";

const { Content } = Layout;
const { Option } = Select;
class Employee extends React.Component {
  

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
            <ModalEmployee />
            <div className="search-employee">
              <div className="search-employee">
                <p>Phòng ban:</p>
                <Select defaultValue="lucy" style={{ width: 200 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>

                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="search-employee">
                <p>Nhap từ khóa:</p>
                <Input placeholder="Tim nhan vien, ho ten, so dien thoai..." />
              </div>
            </div>
            <TableEmployee />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Employee;
