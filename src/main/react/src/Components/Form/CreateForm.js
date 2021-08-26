import React from "react";
import { Button, Form, Input, Space, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  cardBody,
  cardHead,
  cardStyle,
  listStyle,
} from "../Response/Styles/ReponseStyle";

// TODO: break into components

export default function CreateForm() {
  const onFinish = (data) => console.log(data);

  const SubmitButton = () => (
    <Button type="danger" htmlType="submit" block>
      Submit
    </Button>
  );

  const Title = () => (
    <div style={{ textAlign: "center" }}>
      <h1>Enter title</h1>
      <Form.Item name="title">
        <Input />
      </Form.Item>
    </div>
  );

  const AddButton = ({ add }) => (
    <>
      <Button
        type="primary"
        onClick={() => add()}
        block
        icon={<PlusOutlined />}
      >
        Add fields
      </Button>
    </>
  );

  const Fun = () => (
    <>
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={listStyle}>
                <Space>
                  <Form.Item
                    {...restField}
                    name={[name, "value"]}
                    fieldKey={[fieldKey, "value"]}
                  >
                    <Card
                      headStyle={cardHead}
                      bodyStyle={cardBody}
                      style={cardStyle}
                      size="small"
                      title={<Input />}
                    >
                      <Input disabled />
                    </Card>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              </div>
            ))}
            <Form.Item>
              <AddButton add={add} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );

  return (
    <>
      <Form name="dync_form" onFinish={onFinish}>
        <Title />
        <Fun />
        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </>
  );
}
