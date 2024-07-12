import React, { useState } from 'react';
import { Input, Button, Upload, message } from 'antd';
import { UploadOutlined, EditOutlined, BellOutlined } from '@ant-design/icons';
import './ModifyAssignmentPage.scss';

const ModifyAssignmentPage = () => {
  const [assignmentName, setAssignmentName] = useState('');

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleStartGrading = () => {
    console.log('Start grading');
  };

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleUpload,
  };

  return (
    <div className="modify-assignment-page">
      <header>
        <div className="logo">STEPS AI</div>
        <div className="user-info">
          <BellOutlined />
          <img src="path-to-user-avatar.jpg" alt="User" />
          <span>Danielle Campbell</span>
        </div>
      </header>
      <div className="content">
        <div className="assignment-name">
          <Input
            placeholder="Enter Assignment Name"
            value={assignmentName}
            onChange={handleNameChange}
          />
          <Button type="primary">Create</Button>
        </div>
        <h2>Intelligent Grading Assistant</h2>
        <div className="upload-section">
          {['Upload Assignment', 'Upload Grading Rubric', 'Upload Content', 'Assignment to Student Mapping'].map((title) => (
            <div key={title} className="upload-card">
              <h3>{title} <EditOutlined /></h3>
              <Upload {...uploadProps}>
                <div className="upload-area">
                  <img src="path-to-upload-icon.png" alt="Upload" />
                  <p>Drag and drop images here</p>
                  <p className="file-types">Files supported: JPG, PNG, GIF, PDF</p>
                  <Button icon={<UploadOutlined />}>Browse</Button>
                </div>
              </Upload>
            </div>
          ))}
        </div>
        <Button type="primary" className="start-grading" onClick={handleStartGrading}>
          START GRADING
        </Button>
      </div>
    </div>
  );
};

export default ModifyAssignmentPage;