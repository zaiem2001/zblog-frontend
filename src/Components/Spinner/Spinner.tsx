import { Spin } from "antd";
import React from "react";

interface Props {
  loading: boolean;
  size?: "small" | "default" | "large";
  delay?: number;
}

const Spinner: React.FC<Props> = ({ loading, size = "default", delay = 0 }) => (
  <Spin size={size} spinning={loading} delay={delay} />
);

export default Spinner;
