import React from "react";
import "antd/dist/antd.css";
import { List, Card, Input, Form, Button } from "antd";
const { TextArea } = Input;

const data = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit pariatur ullam itaque vero alias necessitatibus nulla voluptas minus ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit pariatur ullam iinus ipsa.",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

const cardStyle = {
  background: "white",
  display: "flex",
  justifyContent: "center",
  width: "540px",
  height: "18vw",
  flexDirection: "column",
  padding: "24px",
  border: "1.5px solid #dadce0",
  wordWrap: "breakWord",
  borderRadius: "8px",
};

const listStyle = {
  display: "flex",
  justifyContent: "center",
};

const cardBody = {};
const cardHead = {
  whiteSpace: "pre-line",
};

export default function ListCard({ ques }) {
  return (
    <div style={{ background: "#F0EBF8" }}>
      <Form>
        <List
          bordered
          dataSource={ques}
          renderItem={(item) => (
            <List.Item style={listStyle}>
              <Card
                hoverable
                headStyle={cardHead}
                bodyStyle={cardBody}
                size="small"
                style={cardStyle}
                title={
                  <div style={{ whiteSpace: "pre-line" }}>{item.value}</div>
                }
              >
                <div>
                  <TextArea
                    placeholder="Enter your answer"
                    style={{ width: "70vw", height: "12vh" }}
                  />
                </div>
              </Card>
            </List.Item>
          )}
        />
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
