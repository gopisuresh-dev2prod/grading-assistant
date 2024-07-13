import React, { useState } from 'react';
import { Input, Button, Upload, message, Skeleton } from 'antd';
import { UploadOutlined, EditOutlined, BellOutlined } from '@ant-design/icons';
import './ModifyAssignmentPage.scss';
import Header from '../common/Header';
import EvaluationReportPage from '../EvaluationReportPage/EvaluationReportPage';
import IndividualEvaluationReport from '../IndividualEvaluationReport/IndividualEvaluationReport';

const ModifyAssignmentPage = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [startGrading, setStartGrading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setFilesUploaded(true);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleStartGrading = () => {
    setLoading(true);
    setTimeout(() => {
      setStartGrading(true);
      setLoading(false);
    }, 5000); // Show the EvaluationReportPage and IndividualEvaluationReport after 5 seconds
  };

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleUpload,
  };

  return (
    <>
      <Header />
      <div className="modify-assignment-page">
        <div className="content">
          <div className="assignment-name">
            <Input
              placeholder="Enter Assignment Name"
              value={assignmentName}
              onChange={handleNameChange}
            />
            <Button type="primary" disabled={!assignmentName}>Create</Button>
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
          <Button
            type="primary"
            className="start-grading"
            onClick={handleStartGrading}
            disabled={!filesUploaded}
          >
            START GRADING
          </Button>
        </div>
        {loading ? (
          <Skeleton active />
        ) : startGrading ? (
          <>
            <EvaluationReportPage />
            <IndividualEvaluationReport />
          </>
        ) : null}
      </div>
    </>
  );
};

export default ModifyAssignmentPage;
