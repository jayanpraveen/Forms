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
        title={
          <h2>
            <div style={{ whiteSpace: "pre-line" }}>{title}</div>
          </h2>
        }
      >
        <div style={headerStripeStyle}></div>
        <div>{about}</div>
      </Card>
    </div>
  );
}
