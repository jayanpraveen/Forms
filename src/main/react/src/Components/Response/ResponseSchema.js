import { Form, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { listStyle } from "../Styles/ComponentStyle";
import SubmitButton from "../Utils/SubmitButton";
import ReponseField from "./Utils/ResponseField";
import TitleField from "../Utils/TitleField";

export default function ResponseSchema() {
  const [APIData, setAPIData] = useState([{ response: [] }]);
  const [Loading, setLoading] = useState(true);
  const formId = "6126ec3c9962d125f7a27a68";
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

  return (
    <>
      <TitleField title={<h2>{APIData.title}</h2>} />
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <ReponseField APIData={APIData} />
          <SubmitButton value={"Submit"} />
        </Space>
      </Form>
    </>
  );
}
