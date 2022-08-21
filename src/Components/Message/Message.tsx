import { message } from "antd";

type MessageProps = {
  type?: "success" | "error" | "warning";
  text: string;
};

type MessageFn = (args: MessageProps) => any;

const Message: MessageFn = ({ type = "error", text }) => message[type](text);

export default Message;
