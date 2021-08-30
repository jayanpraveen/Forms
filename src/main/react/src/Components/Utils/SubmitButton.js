import React from "react";
import { Button, Tooltip, Tag } from "antd";

export default function SubmitButton({ value }) {
  return (
    <div style={{ padding: "0px", paddingLeft: "15px" }}>
      <Tooltip
        mouseEnterDelay="1"
        title={
          <div style={{ color: "black" }}>
            <Tag>{"Ctrl"}</Tag>
            {"+ s"}
          </div>
        }
        color="#fff"
      >
        <Button type="primary" htmlType="submit">
          {value}
        </Button>
      </Tooltip>
    </div>
  );
}
