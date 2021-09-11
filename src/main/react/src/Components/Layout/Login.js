import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";

export default function Login() {
  const onFinish = (data) => {
    axios.post(`/register`, data).then({}, (error) => {
      console.log(error);
    });
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
          <Input prefix={<UserOutlined />} type="text" placeholder="Username" />
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
