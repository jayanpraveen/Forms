import React from "react";
import { Form, Space, Input } from "antd";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import TitleField from "../Utils/TitleField";
const { TextArea } = Input;

// TODO: enable hide/show Title

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

  const Title = () => {
    return (
      <Input
        bordered={false}
        style={{ fontSize: "28px" }}
        placeholder="Form title"
      />
    );
  };
  const About = () => {
    return (
      <TextArea
        bordered={false}
        placeholder="Form description"
        autoSize={{ minRows: 3 }}
      />
    );
  };
  return (
    <>
      <Form style={listStyle} name="dync_form" onFinish={onFinish}>
        <Space direction="vertical">
          <TitleField title={<Title />} about={<About />} />
          <FormField />
          <SubmitButton value={"Save"} />
        </Space>
      </Form>
    </>
  );
}
