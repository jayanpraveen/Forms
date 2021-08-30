import React from "react";
import { Button, Tooltip, Tag } from "antd";

export default function SubmitButton({ placement, value }) {
  return (
    <div style={{ padding: "0px", paddingLeft: "15px" }}>
      <Tooltip
        mouseEnterDelay="0.5"
        placement={placement}
        title={
          <div style={{ color: "steelblue" }}>
            <Tag color="blue">{"Ctrl"}</Tag>
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
