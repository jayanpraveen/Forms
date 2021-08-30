import { Form, Input, message, Space } from "antd";
import axios from "axios";
import React from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import TitleField from "../Utils/TitleField";
import "./css/SiteHeader.css";
import FormField from "./Utils/FormField";
import SiteHeader from "./Utils/SiteHeader";
const { TextArea } = Input;

const Title = ({ onChange }) => {
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

export default function CreateForm({ formId, initialValues }) {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    console.log(data);
    let payload = {
      formId: formId,
      title: data.title,
      about: data.about,
      questions: {},
    };

    for (let i = 0; i < data.questions.length; i++) {
      payload.questions[i] = data.questions[i];
    }

    console.log(payload);
    axios.put(`/form/${formId}`, payload).then(
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

  const onChange = (e) => {
    if (e.target.value === "") {
      message.warning("Title cannot be empty");
      form.setFieldsValue({
        title: "Untitled Form",
      });
    }
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
          <TitleField title={<Title onChange={onChange} />} about={<About />} />
          <FormField />
          <SubmitButton value={"Save"} />
        </Space>
      </Form>
    </>
  );
}
