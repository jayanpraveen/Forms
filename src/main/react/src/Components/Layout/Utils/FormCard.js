import React from "react";
import { Card, Button, Divider, Tag } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function FormCard({ item }) {
  return (
    <>
      <Card
        style={{ width: 300, border: "1px solid #C8C8C8" }}
        extra={
          <Button type="link" danger>
            Delete
          </Button>
        }
        title={item.title}
        bodyStyle={{ padding: "18px" }}
      >
        <>
          <Button type="link">
            <Link to={`/form/${item.formId}/edit`}>Edit</Link>
          </Button>
          <Divider type="vertical" />
          <Button type="link">
            <Link to={`/form/${item.formId}/view`}>View</Link>
          </Button>
          <Divider type="vertical" />
          <Button type="link">
            <Link to={`/form/${item.formId}/view`}>Responses</Link>
          </Button>
        </>
        <Divider />
        <Meta
          description={
            <>
              Created on: <Tag color="magenta">{item.createdDateTime}</Tag>
            </>
          }
        />
      </Card>
    </>
  );
}
