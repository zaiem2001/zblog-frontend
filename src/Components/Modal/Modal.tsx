import React from "react";
import { Modal } from "antd";

interface Props {
  visible: boolean;
  onOk: () => any;
  onCancel?: () => any;
  children: React.ReactNode;
  title?: string;
  [key: string]: any;
}

const CustomModal: React.FC<Props> = ({
  visible,
  onOk,
  onCancel,
  children,
  title = "Modal",
  ...props
}) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
