import React from "react";
import { Select } from "antd";
import "../select/select.css"
import { DownOutlined } from "@ant-design/icons";

const Buyselect = ({ defaultValue, options, onChange }) => {
  return (
    <Select
      defaultValue={defaultValue} // 기본값
      options={options} // 옵션 리스트 전달
      onChange={onChange} // 값 변경 핸들러
      className="cartselect"
      suffixIcon={<DownOutlined style={{ color: "#333", fontSize: "14px" }} />}
    />
  );
};

export default Buyselect;