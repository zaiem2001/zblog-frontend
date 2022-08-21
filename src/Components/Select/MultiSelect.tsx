import { Select } from "antd";
import React from "react";

const { Option } = Select;

interface Props {
  options: string[];
  onChange: (value: string[]) => any;
  [key: string]: any;
}

const MultiSelect: React.FC<Props> = ({ options, onChange, ...props }) => (
  <Select
    mode="tags"
    style={{ width: "100%" }}
    placeholder="Enter Categories"
    onChange={onChange}
    size="large"
    {...props}
  >
    {options.map((option, index) => (
      <Option key={`${option}-${index}`} value={option.toUpperCase()}>
        {option}
      </Option>
    ))}
  </Select>
);

export default MultiSelect;
