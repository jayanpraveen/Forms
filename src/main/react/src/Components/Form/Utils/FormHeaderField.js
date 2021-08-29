import React from "react";
import { Input, Form } from "antd";
const { TextArea } = Input;

export default function FormHeaderField({ restField, name, fieldKey }) {
  return (
    <Form.Item {...restField} name={name} fieldKey={[fieldKey, "value"]}>
      <TextArea
        bordered={false}
        placeholder="input goes here..."
        autoSize={{ minRows: 2, maxRows: 7 }}
      />
    </Form.Item>
  );
}
