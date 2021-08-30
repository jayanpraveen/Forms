import { Divider, Form, Space, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import TitleField from "../Utils/TitleField";
import ReponseField from "./Utils/ResponseField";
import LoadingButton from "../Utils/LoadingButton";

export default function ResponseSchema({ formId }) {
  const [APIData, setAPIData] = useState({ questions: {} });
  const [Loading, setLoading] = useState(true);
  formId = "612bb595ba652b7464b6eac4";
  const url = `form/${formId}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setAPIData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [setAPIData, url]);

  const onFinish = (values) => {
    let payload = {
      formId: "612bb595ba652b7464b6eac4",
      response: [values],
    };

    console.log(payload);

    axios.put(`/res/`, payload).then(
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

  const Response = ({ APIData }) => (
    <div>
      <TitleField title={APIData.title} about={APIData.about} />
      <Divider style={{ padding: "0px", margin: "8px" }} />
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <ReponseField APIData={APIData} />
          <SubmitButton value={"Submit"} />
        </Space>
      </Form>
    </div>
  );
  return <>{Loading ? <LoadingButton /> : <Response APIData={APIData} />}</>;
}
