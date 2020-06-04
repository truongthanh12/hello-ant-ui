import React from "react";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

class TableGroupAccount extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên nhóm</th>
            <th scope="col">Quyền hạn</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Quản trị viên</td>
            <td>
              <a href="">Xem chi tiết</a>
            </td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Nhân viên an ninh </td>
            <td>
              <a href="">Xem chi tiết</a>
            </td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>
              <a href="">Xem chi tiết</a>
            </td>
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
export default TableGroupAccount;
