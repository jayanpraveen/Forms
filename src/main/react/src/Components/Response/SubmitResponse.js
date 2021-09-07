import { Divider, Form, message, Space } from "antd";
import axios from "axios";
import React from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import TitleField from "../Utils/TitleField";
import ReponseField from "./Utils/ResponseField";

export default function SubmitResponse({ formId, APIData }) {
  const onFinish = (values) => {
    let payload = {
      formId: formId,
      response: [values],
    };

    console.log(payload);

    axios.put(`/res/${formId}`, payload).then(
      (response) => {
        console.log(response.data);
        message.success("Response Submitted!");
      },
      (error) => {
        console.log(error);
        message.error("Something wrong, try again");
      }
    );
  };

  return (
    <>
      <TitleField
        title={
          <div style={{ fontSize: 28, paddingLeft: "10px" }}>
            {APIData.title}
          </div>
        }
        about={<div style={{ margin: "12px" }}>{APIData.about}</div>}
      />

      <Divider style={{ padding: "0px", margin: "8px" }} />
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <ReponseField APIData={APIData} />
          <SubmitButton value={"Submit"} />
        </Space>
      </Form>
    </>
  );
}
