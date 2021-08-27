import { Card, Form, Input, List } from "antd";
import React from "react";
import { cardBody, cardHead, cardStyle } from "../../Styles/ComponentStyle";
const { TextArea } = Input;

export default function ResponseField({ APIData }) {
  return (
    <div>
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
    </div>
  );
}
