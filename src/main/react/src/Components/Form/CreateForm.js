import React from "react";
import { Form, Space, Input } from "antd";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import ResponseTitleField from "../Utils/ResponseTitleField";
const { TextArea } = Input;

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

  return (
    <>
      <Form style={listStyle} name="dync_form" onFinish={onFinish}>
        <Space direction="vertical">
          <ResponseTitleField
            title={<Input placeholder="Form title" />}
            about={
              <TextArea
                placeholder="Form description"
                autoSize={{ minRows: 3 }}
              />
            }
          />
          <FormField />
          <SubmitButton value={"Save"} />
        </Space>
      </Form>
    </>
  );
}
