import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React from "react";
import axios from "axios";

export default function Login() {
  const onFinish = (data) => {
    axios
      .post(`/login`, data)
      .then(message.success("Login success"), (error) => {
        console.log(error.response);
      });

    // const username = "admin";
    // const password = "pass";

    // axios({
    //   method: "post",
    //   url: "/login",
    //   params: {
    //     username: "admin",
    //     password: "pass",
    //   },
    //   config: {
    //     // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     headers: {
    //       authorization: "Basic " + window.btoa(username + ":" + password),
    //     },
    //   },
    // })
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.log(error);
    //     // console.log(error.response);
    //     // var errResp = error.response;
    //     // if (errResp.status === 401) {
    //     //   //Ex: show login page again...
    //     // }
    //   });
  };

  return (
    <>
      <Form name="login_form" className="antd-login" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please enter your username",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            type="text"
            placeholder="Username"
            required
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please enter your Password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
