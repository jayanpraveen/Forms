import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/SiteHeader.css";
import { Form, Space, Input, message, Button } from "antd";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import FormField from "./Utils/FormField";
import TitleField from "../Utils/TitleField";
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

export default function CreateForm({ formId }) {
  const onFinish = (data) => {
    console.log(data);
    let payload = {
      title: data.title,
      about: data.about,
      questions: [],
    };

    for (let i = 0; i < data.questions.length; i++) {
      payload.questions[i] = data.questions[i];
    }

    // console.log(payload);
    formId = "";

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

  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    title: "Untitled Form",
    about: "about...",
    questions: [],
  });

  useEffect(() => {
    const url = "http://localhost:8080/form/612b271a409b9413e7e4431d";
    const fetchData = async () => {
      const result = await axios.get(url);
      setInitialValues(result.data);
    };
    fetchData();
  }, []);

  console.log(initialValues);

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
