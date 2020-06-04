import React from "react";
import "antd/dist/antd.css";
import { Button, Input, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
class ModalEmployee extends React.Component {
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
                    Thêm phòng ban
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
                  <p>Phòng ban :</p>
                  <Select defaultValue="lucy" style={{ width: "100%" }}>
                    <Option value="lucy">Tat ca</Option>
                  </Select>
                  <p>Mã nhân viên :</p>
                  <Input />
                  <p>Họ và tên :</p>
                  <Input />
                  <p>Ngày sinh :</p>
                  <DatePicker
                    defaultValue={moment("2015/01/01", dateFormat)}
                    format={dateFormat}
                    style={{ width: "100%" }}
                  />
                  <p>Số điện thoại :</p>
                  <Input />
                  <p>Email :</p>
                  <Input />
                  <p>Địa chỉ :</p>
                  <Input />
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
export default ModalEmployee;
