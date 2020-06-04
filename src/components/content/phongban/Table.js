import React from "react";
import "antd/dist/antd.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ModalDepartment from "./Modal";
class TableDepartment extends React.Component {
  // deleteNote(index) {
  //   let notesArr = this.state.notes;
  //   notesArr.splice(index, 1);
  //   this.setState({ notes: notesArr });
  // }
  constructor(props, context) {
    super(props, context);
    this.state = {
      department: [],
    };
    this.handler = this.handler.bind(this);
  }
  handler(element) {
    this.setState({ department: [...this.state.department, element] });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Ten phong ban</th>
            <th scope="col">Thao tac</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <ModalDepartment handler={this.handler} />
              {this.state.departmentname}
            </td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              <a href=""> {<EditOutlined />}</a>
              <a href=""> {<DeleteOutlined />}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
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
export default TableDepartment;
