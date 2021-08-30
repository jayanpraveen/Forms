import { Card, Form, Input, List } from "antd";
import React from "react";
import { cardBody, cardHead, cardStyle } from "../../Styles/ComponentStyle";
const { TextArea } = Input;

export default function ResponseField({ APIData }) {
  const questions = APIData.questions;
  const keyArray = Object.keys(APIData.questions);
  return (
    <div>
      <List
        bordered={false}
        dataSource={keyArray}
        renderItem={(item) => (
          <List.Item style={{ padding: "0px", margin: "10px" }}>
            <Card
              headStyle={cardHead}
              bodyStyle={cardBody}
              style={cardStyle}
              size="small"
              title={
                <div style={{ whiteSpace: "pre-line", margin: "7px" }}>
                  {questions[item]}
                </div>
              }
            >
              <Form.Item
                name={item}
                style={{ padding: "0px", marginBottom: "0px" }}
                initialValue=""
              >
                <TextArea
                  style={{ border: "none" }}
                  placeholder="Enter your answer"
                  autoSize={{ minRows: 2, maxRows: 4 }}
                />
              </Form.Item>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
