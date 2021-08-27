import React from "react";
import "./css/SiteHeader.css";
import { Form, Space, Input, PageHeader, Card } from "antd";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import TitleField from "../Utils/TitleField";
import SiteHeader from "./Utils/SiteHeader";
const { TextArea } = Input;

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

  const Title = () => {
    return (
      <Form.Item name="title">
        <Input
          bordered={false}
          style={{ fontSize: "28px" }}
          placeholder="Form title"
        />
      </Form.Item>
    );
  };
  const About = () => {
    return (
      <Form.Item name="about">
        <TextArea
          bordered={false}
          placeholder="Form description"
          autoSize={{ minRows: 3 }}
        />
      </Form.Item>
    );
  };

  return (
    <>
      <div className="site-page-wrapper">
        <SiteHeader title="batman begins" subTitle="the movie" />
      </div>
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
