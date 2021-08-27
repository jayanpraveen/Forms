import React from "react";
import { Button } from "antd";
import { submitStyle } from "../../Styles/ComponentStyle";

export default function SubmitButton() {
  return (
    <>
      <div style={{ padding: "0px", paddingLeft: "15px" }}>
        <Button style={submitStyle} type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </>
  );
}
