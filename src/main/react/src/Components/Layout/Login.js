import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { Redirect } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({ username: "", password: "" });
  const [loggiedIn, isLoggedIn] = React.useState(false);

  const onFinish = (data) => {
    setLoading(true);
    axios
      .post(`/login`, data)
      .then(
        (result) => {
          setLoading(false);
          if (result.status === 200) {
            isLoggedIn(true);
          }
        },
        (error) => {
          setError(error.response.data);
        }
      )
      .finally(setLoading(false));
  };

  if (loggiedIn) return <Redirect to="/home" />;
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
        <>
          <div style={{ color: "#DC143C" }}>
            {error.username}
            {error.password}
          </div>
        </>
      </Form>
    </>
  );
}
