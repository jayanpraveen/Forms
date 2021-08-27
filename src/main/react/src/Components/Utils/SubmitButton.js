import React from "react";
import { Button } from "antd";

export default function SubmitButton({ value }) {
  return (
    <div style={{ padding: "0px", paddingLeft: "15px" }}>
      <Button type="primary" htmlType="submit">
        {value}
      </Button>
    </div>
  );
}
