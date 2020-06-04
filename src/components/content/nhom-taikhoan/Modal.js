import React from "react";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PermissionTree from "./PermissionTree";

class ModalGroupAccount extends React.Component {
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
                    Thêm nhóm tài khoản
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
                  <p>Tên nhóm :</p>
                  <Input />
                  <p>Quyền hạn :</p>
                  <PermissionTree />
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
export default ModalGroupAccount;
