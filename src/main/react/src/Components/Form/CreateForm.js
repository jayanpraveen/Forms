import { Form, Input, message, Space, Divider } from "antd";
import axios from "axios";
import React from "react";
import { listStyle } from "../Styles/ComponentStyle";
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
    saveKey(e);
    if (e.target.value === "") {
      message.warning("Title cannot be empty");
      form.setFieldsValue({
        title: initialValues.title,
      });
    }
  };

  const saveKey = (e) => {
    if (e.key === "s" && e.metaKey) {
      e.preventDefault();
      const val = form.getFieldsValue();
      onFinish(val);
    }
  };

  return (
    <>
      <div onKeyDown={saveKey}>
        <Form
          form={form}
          name="dync_form"
          onFinish={onFinish}
          initialValues={initialValues}
          layout="vertical"
        >
          <Space style={listStyle} direction="vertical">
            <div className="site-page-wrapper">
              <SiteHeader title="batman begins" subTitle="the movie" />
            </div>
            <Divider style={{ margin: "48px" }} />
            <TitleField
              title={<Title onChange={onChange} />}
              about={<About />}
            />
            <FormField style={listStyle} />
          </Space>
        </Form>
      </div>
    </>
  );
}
