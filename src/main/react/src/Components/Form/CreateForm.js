import {
  Divider,
  Form,
  Input,
  message,
  Space,
  BackTop,
  Typography,
} from "antd";
import axios from "axios";
import React from "react";
import { listStyle } from "../Styles/ComponentStyle";
import TitleField from "../Utils/TitleField";
import "./css/SiteHeader.css";
import FormField from "./Utils/FormField";
import SiteHeader from "./Utils/SiteHeader";
const { TextArea } = Input;
const { Text } = Typography;

export default function CreateForm({ formId, initialValues }) {
  const Title = () => {
    return (
      <Form.Item name="title" style={{ margin: "0px" }}>
        <Input
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
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
          autoSize={{ minRows: 1 }}
        />
      </Form.Item>
    );
  };

  const [form] = Form.useForm();

  const onFinish = (data) => {
    let payload = {
      formId: formId,
      title: data.title,
      about: data.about,
      questions: {},
    };

    for (let i = 0; i < data.questions.length; i++) {
      payload.questions[i] = data.questions[i];
    }

    axios.put(`/form/${formId}`, payload).then(
      (response) => {
        message.success("Saved successfully!");
      },
      (error) => {
        console.log(error.response.data.errors);
        message.error(error.response.data.errors);
      }
    );
  };

  const onChange = (e) => {
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
      <BackTop visibilityHeight="20" />
      <div onKeyDown={saveKey}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          form={form}
          name="dync_form"
          onFinish={onFinish}
          initialValues={initialValues}
          layout="vertical"
        >
          <div className="site-page-wrapper">
            <SiteHeader formId={formId} title="batman begins" />
          </div>
          <Space style={listStyle} direction="vertical">
            <Divider style={{ margin: "48px" }} />
            <TitleField
              title={<Title />}
              about={<About />}
              onChange={onChange}
            />
            <FormField style={listStyle} />
          </Space>
        </Form>
        <Divider>
          <Text type="secondary">End of Page</Text>
        </Divider>
      </div>
    </>
  );
}
