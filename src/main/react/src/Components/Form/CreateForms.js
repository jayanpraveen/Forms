import React from "react";
import { Button, Form, Input, Space, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { cardBody, cardHead, cardStyle, listStyle } from "./Styles/FormStyle";

// TODO: break into components

export default function CreateForms() {
  const onFinish = (data) => console.log(data);

  return (
    <>
      <Form name="dync_form" onFinish={onFinish}>
        <div style={{ textAlign: "center" }}>
          <h1>Enter title</h1>
          <Form.Item name="title">
            <Input />
          </Form.Item>
        </div>
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
                <Button
                  type="primary"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="danger" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
