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
  const formId = "6128ebd4a8863835d205a35a";
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

  const str =
    "Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.";

  return (
    <>
      <TitleField title={APIData.title} about={APIData.about} />
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <ReponseField APIData={APIData} />
          <SubmitButton value={"Submit"} />
        </Space>
      </Form>
    </>
  );
}
