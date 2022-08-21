import { Spin } from "antd";
import React from "react";

interface Props {
  loading: boolean;
  size?: "small" | "default" | "large";
}

const Spinner: React.FC<Props> = ({ loading, size = "default" }) => (
  <Spin size={size} spinning={loading} />
);

export default Spinner;
