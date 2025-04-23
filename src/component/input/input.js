import React from "react";
import { InputNumber } from "antd";
import "../input/input.css";

const CustomInput = ({ defaultValue = 1, min = 1, max = 100, onChange }) => {
  return (
    <InputNumber
      min={min} // 최소값
      max={max} // 최대값
      defaultValue={defaultValue} // 기본값
      onChange={onChange} // 값 변경 핸들러
      className="custom-input" // 커스텀 스타일 클래스
    />
  );
};

export default CustomInput;
