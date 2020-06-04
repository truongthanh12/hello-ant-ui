import React, { useState } from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";

const treeData = [
  {
    title: "An ninh",
    key: "1",
    children: [
      {
        title: "Xem camera",
        key: "1.1",
      },
      {
        title: "Xem báo cáo",
        key: "1.2",
      },
    ],
  },
  {
    title: "Danh sách",
    key: "2",
    children: [
      {
        title: "Phòng ban",
        key: "2.1",
        children: [
          {
            title: "Xem danh sách",
            key: "2.1.1",
          },
          {
            title: "Thêm, sửa, xóa",
            key: "2.1.2",
          },
        ],
      },
      {
        title: "Nhân viên",
        key: "2.2",
        children: [
          {
            title: "Xem danh sách",
            key: "2.2.1",
          },
          {
            title: "Thêm, sửa, xóa",
            key: "2.2.2",
          },
        ],
      },
    ],
  },
  {
    title: "Hệ thống",
    key: "3",
    children: [
      {
        title: "Nhóm tài khoản",
        key: "3.1",
        children: [
          {
            title: "Xem danh sách",
            key: "3.1.1",
          },
          {
            title: "Thêm, sửa, xóa",
            key: "3.1.2",
          },
        ],
      },
      {
        title: "Tài khoản",
        key: "3.2",
        children: [
          {
            title: "Xem danh sách",
            key: "3.2.1",
          },
          {
            title: "Thêm, sửa, xóa",
            key: "3.2.2",
          },
        ],
      },
    ],
  },
  {
    title: "Cài đặt",
    key: "4",
    children: [
      {
        title: "Danh sách camera",
        key: "4.1",
      },
      {
        title: "Cấu hình hệ thống",
        key: "4.2",
      },
    ],
  },
];

const PermissionTree = () => {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeys) => {
    console.log("onExpand", expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeys) => {
    console.log("onCheck", checkedKeys);
    setCheckedKeys(checkedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeys);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default PermissionTree;
