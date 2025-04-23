import React from 'react';
import { DatePicker, Space } from 'antd';
import "../date/date.css";

const { RangePicker } = DatePicker;

const Datepicker = ({ onChange }) => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onChange={onChange}  placeholder={['시작 날짜', '종료 날짜']} />
    </Space>
  );
};

export default Datepicker;
