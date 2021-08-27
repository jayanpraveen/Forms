import React from "react";
import { Card } from "antd";
import {
  listStyle,
  cardStyle,
  cardHead,
  cardBody,
  headerStripeStyle,
} from "../Styles/ComponentStyle";

export default function ResponseTitleField({ title, about }) {
  return (
    <>
      <div style={listStyle}>
        <Card
          style={cardStyle}
          headStyle={cardHead}
          bodyStyle={cardBody}
          title={<h2>{title}</h2>}
        >
          <div style={headerStripeStyle}></div>
          <div>{about}</div>
        </Card>
      </div>
    </>
  );
}
