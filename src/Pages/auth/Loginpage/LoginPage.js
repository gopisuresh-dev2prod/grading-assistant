import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './LoginPage.scss';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);
const navigate=useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    // Perform your login or registration logic here
    // After successful login/registration, set the authToken in localStorage and navigate
    localStorage.setItem('authToken', 'your-auth-token');
    localStorage.setItem('username', values.username);
    navigate('/grading-assistant');
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
        <h2> {isLogin ? 'Login' : 'Register'} with Others</h2>
        <div className="social-buttons">
          <div className="social-button google">
            <img src={require('../../../assests/google.png')} alt="Google" />
            <span>Login with Google</span>
          </div>
          {/* <div className="social-button facebook">
            <img src={require('../../../assests/facebook.png')} alt="Facebook" />
            <span>Login with Facebook</span>
          </div> */}
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
