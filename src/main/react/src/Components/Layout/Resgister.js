import { Button, Form, Input, message } from "antd";
import React from "react";
import axios from "axios";
import {
  LockOutlined,
  MailOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Register() {
  const onFinish = (data) => {
    console.log(data);

    axios.post(`/register`, data).then(
      (response) => {
        message.success("Registration Done!");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <Form name="reg_form" className="antd-login" onFinish={onFinish}>
        <Form.Item name="name">
          <Input
            prefix={<SmileOutlined />}
            required
            type="text"
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item name="username">
          <Input
            prefix={<UserOutlined />}
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
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
