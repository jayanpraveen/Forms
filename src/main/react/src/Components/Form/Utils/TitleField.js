import { Form, Input } from "antd";
import React from "react";

export default function TitleField() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Enter title</h1>
        <Form.Item name="title">
          <Input size="large" placeholder="title goes here..." />
        </Form.Item>
      </div>
    </div>
  );
}
