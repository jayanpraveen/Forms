import { DeleteTwoTone } from "@ant-design/icons";
import { Card, Form, Input, List } from "antd";
import React from "react";
import { cardBody, cardHead, cardStyle } from "../../Styles/ComponentStyle";
import AddButton from "./AddButton";
import FormHeaderField from "./FormHeaderField";

const deleteIconStyle = {
  marginTop: "20px",
  fontSize: "20px",
};

export default function FormField() {
  return (
    <>
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key}>
                <Form.Item
                  {...restField}
                  name={[name, "value"]}
                  fieldKey={[fieldKey, "value"]}
                  style={{ margin: "10px" }}
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
                      <span
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <DeleteTwoTone
                          style={deleteIconStyle}
                          twoToneColor="crimson"
                          onClick={() => remove(name)}
                        />
                      </span>
                    </Card>
                  </List.Item>
                </Form.Item>
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
