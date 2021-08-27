import React from "react";
import { Button } from "antd";

export default function SubmitButton() {
  return (
    <div style={{ padding: "0px", paddingLeft: "15px" }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  );
}
