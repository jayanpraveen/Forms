import React from "react";
import { Result, Button } from "antd";

export default function ErrorPage({ error }) {
  return (
    <>
      <Result
        status={error}
        title={error}
        subTitle="Sorry, the page does not exist or not you are not authorized."
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </>
  );
}
