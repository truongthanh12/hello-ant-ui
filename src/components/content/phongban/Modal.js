import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
class ModalDepartment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { departmentname: "" };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.departmentname === "") {
      return alert("Please enter the name");
    }
    this.handler(this.state.departmentname);
    console.log(this.state.value);
  };
  render() {
    return (
      <div>
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
                <form onSubmit={this.handleSubmit}>
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
                    <p>Tên phòng ban :</p>
                    <Input
                      type="text"
                      name="departmentname"
                      value={this.state.departmentname}
                      onChange={(value) => this.handleChange(value)}
                      ref={(input) => (this.departmentname = input)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Huy
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      // onClick={this.handleSubmit.bind(this)}
                      onSubmit={this.handleSubmit}
                    >
                      Luu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalDepartment;
