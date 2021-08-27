import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

export default function FormHeaderField() {
  return (
    <div>
      <TextArea
        bordered={false}
        placeholder="input goes here..."
        autoSize={{ minRows: 2, maxRows: 7 }}
      />
    </div>
  );
}
