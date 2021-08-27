import React from "react";
import { Card } from "antd";
import {
  listStyle,
  cardStyle,
  headerStripeStyle,
} from "../Styles/ComponentStyle";

export default function TitleField({ title, about }) {
  return (
    <div style={listStyle}>
      <Card
        style={cardStyle}
        headStyle={{ padding: "12px" }}
        bodyStyle={{ padding: "12px" }}
        title={title}
      >
        <div style={headerStripeStyle}></div>
        <div>{about}</div>
      </Card>
    </div>
  );
}
