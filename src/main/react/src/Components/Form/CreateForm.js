import React from "react";
import { Card, Form, Input, Space } from "antd";
import { MinusCircleTwoTone } from "@ant-design/icons";
import AddButton from "./Utils/AddButton";
import SubmitButton from "./Utils/SubmitButton";
import TitleField from "./Utils/TitleField";
import {
  cardBody,
  cardHead,
  cardStyle,
  listStyle,
} from "../Response/Styles/ReponseStyle";

export default function CreateForm() {
  const onFinish = (value) => console.log(value);

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
                      title={<Input placeholder="input goes here..." />}
                    >
                      <Input disabled />
                    </Card>
                  </Form.Item>
                  <MinusCircleTwoTone
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                    onClick={() => remove(name)}
                  />
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
        <TitleField />
        <Fun />
        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </>
  );
}
