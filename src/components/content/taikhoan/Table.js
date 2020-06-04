import React from "react";
import "antd/dist/antd.css";
import { Badge } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
class TableAccount extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Nhóm tài khoản</th>
            <th scope="col">Nhân viên</th>
            <th scope="col">Tên đăng nhập</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TableAccount;
