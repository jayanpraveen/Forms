import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  cardBody,
  cardHead,
  cardStyle,
  listStyle,
  headerStripeStyle,
} from "./Styles/FormStyle";
import { Card, Typography, Button, Input, List, Form, Space } from "antd";
const { TextArea } = Input;

export default function FromList() {
  const [APIData, setAPIData] = useState([{ response: [] }]);
  const [Loading, setLoading] = useState(true);
  const formId = "6126c7d07409fe19e3fc4480";
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

  /**
   * TODO: make buttons, card width, height resposnive and cleaner css, componenets
   */
  return (
    <div style={{ background: "#F0EBF8", fontFamily: "Nunito Sans" }}>
      <div style={listStyle}>
        <Card style={cardStyle} title={<h2>{APIData.title}</h2>}>
          <div style={headerStripeStyle}></div>
          description...
        </Card>
      </div>
      <Form onFinish={onFinish} style={listStyle}>
        <Space direction="vertical">
          <List
            bordered={false}
            dataSource={APIData.questions}
            renderItem={(item) => (
              <Form.Item name={item.id} style={{ margin: "10px" }}>
                <List.Item style={{ padding: "0px" }}>
                  <Card
                    headStyle={cardHead}
                    bodyStyle={cardBody}
                    style={cardStyle}
                    size="small"
                    title={
                      <div style={{ whiteSpace: "pre-line" }}>{item.value}</div>
                    }
                  >
                    <TextArea
                      style={{ border: "none" }}
                      placeholder="Enter your answer"
                      autoSize={{ minRows: 2, maxRows: 4 }}
                    />
                  </Card>
                </List.Item>
              </Form.Item>
            )}
          />
          <List.Item style={{ padding: "0px", paddingLeft: "15px" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </List.Item>
        </Space>
      </Form>
    </div>
  );
}
