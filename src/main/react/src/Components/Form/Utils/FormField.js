import { DeleteTwoTone } from "@ant-design/icons";
import { Card, Form, Input, List, Tag, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { cardBody, cardHead, cardStyle } from "../../Styles/ComponentStyle";
import AddButton from "./AddButton";
import FormHeaderField from "./FormHeaderField";

const deleteIconStyle = {
  marginTop: "20px",
  fontSize: "20px",
};

export default function FormField({ style }) {
  const scrollRef = useRef(null);
  const fosRef = useRef(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (state !== null) {
      onAddFocus();
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);

  const onDeleteFocus = (key) => {
    document.getElementById(`dync_form_questions_${key}`).focus();
  };
  const onAddFocus = () => {
    fosRef.current.focus();
  };

  return (
    <div style={style}>
      <Form.List name="questions">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div
                key={key}
                onKeyDown={(e) => {
                  if (e.key === "j" && e.metaKey) {
                    e.preventDefault();
                    add();
                    setState(Math.random());
                  }
                  if (e.key === "k" && e.metaKey) {
                    e.preventDefault();
                    remove(name);
                    onDeleteFocus(name - 1);
                  }
                }}
              >
                <List.Item style={{ padding: "0px", margin: "10px" }}>
                  <Card
                    headStyle={cardHead}
                    bodyStyle={cardBody}
                    style={cardStyle}
                    size="small"
                    title={
                      <FormHeaderField
                        ref={fosRef}
                        restField={restField}
                        name={name}
                        fieldKey={fieldKey}
                      />
                    }
                  >
                    <Input
                      bordered={false}
                      placeholder="response goes here"
                      disabled
                    />
                    <span
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Tooltip
                        mouseEnterDelay="0.5"
                        title={
                          <div style={{ color: "red" }}>
                            <Tag color="red">{"Ctrl"}</Tag>
                            {"+ k"}
                          </div>
                        }
                        color={"#fff"}
                      >
                        {key > 0 ? (
                          <DeleteTwoTone
                            style={deleteIconStyle}
                            twoToneColor="crimson"
                            onClick={() => {
                              remove(name);
                              onDeleteFocus(name - 1);
                            }}
                          />
                        ) : (
                          <div style={{ marginTop: "45px" }} />
                        )}
                      </Tooltip>
                    </span>
                  </Card>
                </List.Item>
              </div>
            ))}
            <Form.Item>
              <AddButton setState={setState} add={add} />
            </Form.Item>
          </div>
        )}
      </Form.List>
      <div ref={scrollRef} />
    </div>
  );
}
