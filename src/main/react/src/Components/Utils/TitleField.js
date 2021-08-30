import { Form, Input, Card } from "antd";
import React from "react";
import {
  cardStyle,
  headerStripeStyle,
  listStyle,
} from "../Styles/ComponentStyle";
const { TextArea } = Input;

export default function TitleField({ title, about }) {
  return (
    <>
      <div style={listStyle}>
        <div style={{ padding: "0px", margin: "10px" }}>
          <Card
            style={cardStyle}
            headStyle={{ padding: "12px" }}
            bodyStyle={{ padding: "12px" }}
            title={<h2 style={{ whiteSpace: "pre-line" }}>{title}</h2>}
          >
            <div style={headerStripeStyle}></div>
            <div>{about}</div>
          </Card>
        </div>
      </div>
    </>
  );
}
