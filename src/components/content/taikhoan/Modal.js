import React from "react";
import "antd/dist/antd.css";
import { Button, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const Option = Select;
class ModalAccount extends React.Component {
  render() {
    return (
      <div>
        <Button
          icon={<PlusOutlined />}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Them
        </Button>

        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thêm tài khoản
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Nhóm tài khoản :</p>
                  <Select style={{ width: "100%" }}>
                    <Option value="jack">Jack</Option>
                  </Select>
                  <p>Nhân viên :</p>
                  <Select style={{ width: "100%" }}>
                    <Option value="jack">Jack</Option>
                  </Select>
                  <p>Tên đăng nhập :</p>
                  <Input />
                  <p>Mật khẩu :</p>
                  <Input type="password" />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Huy
                  </button>
                  <button type="button" className="btn btn-primary">
                    Luu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalAccount;
