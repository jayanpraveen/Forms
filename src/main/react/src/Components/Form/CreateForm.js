import React from "react";
import { Card, Form, Input, Space } from "antd";
import SubmitButton from "./Utils/SubmitButton";
import TitleField from "./Utils/TitleField";
import FormField from "./Utils/FormField";

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

  return (
    <>
      <Form name="dync_form" onFinish={onFinish}>
        <TitleField />
        <FormField />
        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </>
  );
}
