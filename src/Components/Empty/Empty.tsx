import { Button, Empty } from "antd";
import React from "react";
import { StyledSpan } from "./Empty.styled";

interface Props {
  addButton: boolean;
  buttonText: string;
  description: string;
  children: React.ReactNode;
  onBtnClick: () => void;
}

const EmptyContainer: React.FC<Partial<Props>> = ({
  addButton,
  buttonText,
  description,
  children,
  onBtnClick,
}) => {
  return (
    <Empty description={<StyledSpan>{description}</StyledSpan>}>
      {addButton && (
        <Button type="primary" onClick={onBtnClick}>
          {buttonText}
        </Button>
      )}
      {children}
    </Empty>
  );
};

export default EmptyContainer;
