import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './LoginPage.scss';

const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1 className="title">{isLogin ? 'LOGIN' : 'REGISTER'}</h1>
        <Form form={form} onFinish={onFinish} className="form">
          {!isLogin && (
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" className="input" />
            </Form.Item>
          )}
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" className="input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" className="input" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button">
              {isLogin ? 'Login Now' : 'Register Now'}
            </Button>
          </Form.Item>
        </Form>
      
        <div className="social-login">
        <h2>Login with Others</h2>
        <div className="social-buttons">
          <div className="social-button google">
            <img src="path/to/google-icon.png" alt="Google" />
            <span>Login with Google</span>
          </div>
          <div className="social-button facebook">
            <img src="path/to/facebook-icon.png" alt="Facebook" />
            <span>Login with Facebook</span>
          </div>
        </div>
      </div>
      <div className="toggle">
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'New here? Register' : 'Already have an account? Login'}
          </p>
        </div>
      </div>
      <div className="info-container">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default LoginPage;
