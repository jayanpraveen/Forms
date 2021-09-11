import { Button, Card, Divider, notification, Popconfirm, Tag } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function FormCard({ item, setRefresh }) {
  const onDelete = async (formId) => {
    await axios.delete(`form/${formId}`).then(
      notification.success({
        message: <h4>Form deleted</h4>,
        description: `Form:  ${item.title} has been deleted`,
      })
    );
    setRefresh({});
  };

  const Delete = ({ formId }) => {
    return (
      <>
        <Popconfirm
          title="Are you sure you want to delete this form?"
          onConfirm={() => onDelete(formId)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      </>
    );
  };

  return (
    <>
      <Card
        style={{ width: 300, border: "1px solid #C8C8C8" }}
        extra={<Delete formId={item.formId} />}
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
