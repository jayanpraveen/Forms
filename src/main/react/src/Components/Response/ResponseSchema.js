import { Form, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import TitleField from "../Utils/TitleField";
import ReponseField from "./Utils/ResponseField";

export default function ResponseSchema() {
  const [APIData, setAPIData] = useState({ questions: {} });
  const [Loading, setLoading] = useState(true);
  const formId = "";
  const url = `http://localhost:8080/form/${formId}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setAPIData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [setAPIData, url]);

  const onFinish = (values) => console.log(values);

  const Comp = ({ APIData }) => (
    <div>
      <TitleField title={APIData.title} about={APIData.about} />
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <ReponseField APIData={APIData} />
          <SubmitButton value={"Submit"} />
        </Space>
      </Form>
    </div>
  );
  return <>{Loading ? "Loading..." : <Comp APIData={APIData} />}</>;
}
