"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      setIsLoading(true);
      const result = await axios.post("/api/auth/login", {
        email: values.username,
        password: values.password,
      });

      alert("Login Success");
      localStorage.setItem("token", result.data.token);
      router.push("/");
    } catch (error) {
      alert("Failed to login");
      console.error("Failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: "50%" }}
      >
        <Title style={{ textAlign: "center" }}>Welcome Back!</Title>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            {/* <a href="">Forgot password</a> */}
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={isLoading}>
            Log in
          </Button>
          {/* or <a href="">Register now!</a> */}
        </Form.Item>
      </Form>
    </div>
  );
}
