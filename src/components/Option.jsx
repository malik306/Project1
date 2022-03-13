import React from 'react';
import { Select } from 'antd';

function OptionJSX(props) {
  return (
    <Select
      placeholder={props.placeholder}
      style={{ width: '100%' }}
      onChange={props.onChange}
    >
      {props.data.map((item) => (
        <Select.Option value={item} key={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
}

export default OptionJSX;
