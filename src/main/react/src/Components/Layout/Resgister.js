import { LockOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

export default function Register() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form name="reg_form" className="antd-login" onFinish={onFinish}>
        <Form.Item>
          <Input
            prefix={<SmileOutlined />}
            required
            type="text"
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter email",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please enter password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm_password"
          rules={[
            {
              type: "string",
              required: true,
              message: "Please re-enter password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
