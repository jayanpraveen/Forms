import React from "react";
import { Card } from "antd";
import {
  listStyle,
  cardStyle,
  headerStripeStyle,
} from "../../Styles/ComponentStyle";

export default function ResponseTitleField({ title, about }) {
  return (
    <>
      <div style={listStyle}>
        <Card style={cardStyle} title={<h2>{title}</h2>}>
          <div style={headerStripeStyle}></div>
          <div>{about}</div>
        </Card>
      </div>
    </>
  );
}
