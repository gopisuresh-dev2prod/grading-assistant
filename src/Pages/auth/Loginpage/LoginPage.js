import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>LOGIN</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Login Now
            </Button>
          </Form.Item>
        </Form>
        <div className="login-options">
          <p>Login with Others</p>
          <Button icon={<GoogleOutlined />} className="google-button">Login with Google</Button>
          <Button icon={<FacebookOutlined />} className="facebook-button">Login with Facebook</Button>
        </div>
      </div>
      <div className="login-info-container">
        <div className="info-box">
          <h2>Intelligent Grading Assistant is designed to redefine educational innovation with</h2>
          <h1>Our Powerful Grading Tool</h1>
          <div className="icon-container">
            <img src="/path-to-your-icon.png" alt="Grading tool icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;