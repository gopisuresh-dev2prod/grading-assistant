import React from 'react';
import { Avatar, Dropdown, Space } from 'antd';
import { BellFilled, CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import './Header.scss';

// Import your logo image
// import logoImage from './path-to-your-logo.png'; // Update this path

const Header = () => {
  const menu = [
    {
      key: '1',
      label: 'Profile',
    },
    {
      key: '2',
      label: 'Settings',
    },
    {
      key: '3',
      label: 'Logout',
    },
  ];

  return (
    <header className="custom-header">
      <div className="logo">
        {/* <img src={'logoImage'} alt="STEPS AI Logo" /> */}
      </div>
      <div className="user-actions">
        <BellFilled className="notification-icon" />
        <Dropdown menu={{ items: menu }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <span className="user-name">Danielle Campbell</span>
              <CaretDownOutlined className="dropdown-icon" />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;