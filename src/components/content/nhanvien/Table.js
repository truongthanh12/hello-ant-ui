import React from "react";
import "antd/dist/antd.css";
import { Badge } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
class TableEmployee extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Phòng ban</th>
            <th scope="col">Mã nhân viên</th>
            <th scope="col">Họ Tên</th>

            <th scope="col">Ngày sinh</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <Badge color="#f50" />
              Chưa tải lên
            </td>
            <td>
              <a href="">
                <InfoCircleOutlined />
              </a>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <Badge color="#f50" />
              Chưa tải lên
            </td>
            <td>
              <a href="">
                <InfoCircleOutlined />
              </a>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <Badge color="#f50" />
              Chưa tải lên
            </td>
            <td>
              <a href="">
                <InfoCircleOutlined />
              </a>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TableEmployee;
