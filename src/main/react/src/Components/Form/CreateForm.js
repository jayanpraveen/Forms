import React from "react";
import axios from "axios";
import "./css/SiteHeader.css";
import { Form, Space, Input, message } from "antd";

import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import TitleField from "../Utils/TitleField";
import SiteHeader from "./Utils/SiteHeader";
const { TextArea } = Input;

export default function CreateForm() {
  const onFinish = (data) => {
    let payload = {
      title: data.title,
      about: data.about,
      questions: {},
    };

    for (let i = 0; i < data.questions.length; i++) {
      payload.questions[i] = data.questions[i];
    }

    console.log(payload);

    axios.post("/form", payload).then(
      (response) => {
        console.log(response.data);
        message.success("Saved successfully!");
      },
      (error) => {
        console.log(error);
        message.error("Something wrong, try again");
      }
    );
  };
  const [form] = Form.useForm();

  const onChange = (e) => {
    if (e.target.value === "") {
      message.warning("Title cannot be empty");
      form.setFieldsValue({
        title: "Untitled Form",
      });
    }
  };
  const Title = () => {
    return (
      <Form.Item name="title">
        <Input
          onBlur={onChange}
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

  const initialValues = {
    title: "Untitled Form",
    about: "",
    questions: [""],
  };

  return (
    <>
      <div className="site-page-wrapper">
        <SiteHeader title="batman begins" subTitle="the movie" />
      </div>
      <Form
        form={form}
        style={listStyle}
        name="dync_form"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Space direction="vertical">
          <TitleField title={<Title />} about={<About />} />
          <FormField />
          <SubmitButton value={"Save"} />
        </Space>
      </Form>
    </>
  );
}
