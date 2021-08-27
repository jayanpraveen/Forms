import React from "react";
import { Space, Form, Card, Input, List } from "antd";
import { MinusCircleTwoTone } from "@ant-design/icons";
import AddButton from "./AddButton";
import {
  cardBody,
  cardHead,
  cardStyle,
  listStyle,
} from "../../Styles/ComponentStyle";
import FormHeaderField from "./FormHeaderField";

const MinusCircleStyle = {
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
};

export default function FormField() {
  return (
    <>
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} style={listStyle}>
                <Form.Item
                  {...restField}
                  name={[name, "value"]}
                  fieldKey={[fieldKey, "value"]}
                  style={{ margin: "7px" }}
                >
                  <List.Item style={{ padding: "0px" }}>
                    <Card
                      headStyle={cardHead}
                      bodyStyle={cardBody}
                      style={cardStyle}
                      size="small"
                      title={<FormHeaderField />}
                    >
                      <Input placeholder="response goes here" disabled />
                    </Card>
                  </List.Item>
                </Form.Item>
                <MinusCircleTwoTone
                  style={MinusCircleStyle}
                  onClick={() => remove(name)}
                />
              </div>
            ))}
            <Form.Item>
              <AddButton add={add} />
            </Form.Item>
          </div>
        )}
      </Form.List>
    </>
  );
}
