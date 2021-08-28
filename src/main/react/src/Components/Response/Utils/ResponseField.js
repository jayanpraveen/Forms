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
          <Form.Item name={item} style={{ margin: "10px" }}>
            <List.Item style={{ padding: "0px" }}>
              <Card
                headStyle={cardHead}
                bodyStyle={cardBody}
                style={cardStyle}
                size="small"
                title={
                  <div style={{ whiteSpace: "pre-line" }}>
                    {questions[item]}
                  </div>
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
    </div>
  );
}
