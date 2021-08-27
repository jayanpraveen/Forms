import { Form, Space } from "antd";
import React from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import TitleField from "./Utils/TitleField";

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

  return (
    <>
      <Form style={listStyle} name="dync_form" onFinish={onFinish}>
        <Space direction="vertical">
          <TitleField />
          <FormField />
          <SubmitButton />
        </Space>
      </Form>
    </>
  );
}
