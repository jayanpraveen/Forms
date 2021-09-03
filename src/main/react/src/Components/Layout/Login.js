import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

export default function Login() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form name="login_form" className="antd-login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please enter your Password!",
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
