import React, { forwardRef } from "react";
import { Input, Form } from "antd";
const { TextArea } = Input;

const FormHeaderField = ({ restField, name, fieldKey }, ref) => {
  return (
    <>
      <Form.Item
        {...restField}
        name={name}
        fieldKey={[fieldKey, "value"]}
        style={{ padding: "0px", marginBottom: "0px" }}
      >
        <TextArea
          ref={ref}
          bordered={false}
          placeholder="input goes here..."
          autoSize={{ minRows: 1, maxRows: 7 }}
        />
      </Form.Item>
    </>
  );
};

export default forwardRef(FormHeaderField);
