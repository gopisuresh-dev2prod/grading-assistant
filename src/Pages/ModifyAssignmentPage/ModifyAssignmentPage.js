import React, { useState } from 'react';
import { Input, Button, Upload, message, Skeleton } from 'antd';
import { UploadOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import './ModifyAssignmentPage.scss';
import Header from '../common/Header';
import EvaluationReportPage from '../EvaluationReportPage/EvaluationReportPage';
import IndividualEvaluationReport from '../IndividualEvaluationReport/IndividualEvaluationReport';

const ModifyAssignmentPage = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [files, setFiles] = useState({
    assignment: [],
    rubric: [],
    content: [],
    mapping: []
  });
  const [isGrading, setIsGrading] = useState(false);
  const [gradingComplete, setGradingComplete] = useState(false);

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleFileChange = (info, type) => {
    const { file } = info;
    file.status = 'done';
    setFiles(prev => ({
      ...prev,
      [type]: [...prev[type], file]
    }));
    message.success(`${file.name} uploaded successfully`);
  };

  const handleStartGrading = () => {
    setIsGrading(true);
    setGradingComplete(false);
    // Simulate grading process
    setTimeout(() => {
      setIsGrading(false);
      setGradingComplete(true);
    }, 3000);
  };

  const uploadProps = (type) => ({
    accept: '.jpg,.png,.gif,.pdf',
    multiple: true,
    beforeUpload: (file) => {
      handleFileChange({ file }, type);
      return false; // Prevent default upload behavior
    },
    fileList: files[type],
  });

  return (
    <>
      <Header />
      <div className="modify-assignment-page">
        <div className="content-wrapper">
          <div className="assignment-header">
            <Input
              className="assignment-name-input"
              placeholder="Enter Assignment Name"
              value={assignmentName}
              onChange={handleNameChange}
            />
          </div>
          <h1 className="page-title">Intelligent Grading Assistant</h1>
          <div className="upload-grid">
            {[
              { title: 'Upload Assignment', type: 'assignment' },
              { title: 'Upload Grading Rubric', type: 'rubric' },
              { title: 'Upload Content', type: 'content' },
              { title: 'Assignment to Student Mapping', type: 'mapping' }
            ].map(({ title, type }) => (
              <div key={title} className="upload-card">
                <h3>{title} <EditOutlined /></h3>
                <Upload {...uploadProps(type)} className="upload-area">
                  <div className="upload-content">
                    {files[type].length ? (
                      <div className="success-icon">
                        <CheckCircleOutlined style={{ color: 'green', fontSize: '24px' }} />
                        <p>Upload Successful</p>
                      </div>
                    ) : (
                      <>
                        <UploadOutlined className="upload-icon" />
                        <p>Drag and drop files here</p>
                        <p className="file-types">JPG, PNG, GIF, PDF</p>
                        <Button icon={<UploadOutlined />}>Browse</Button>
                      </>
                    )}
                  </div>
                </Upload>
              </div>
            ))}
          </div>
          <Button
            type="primary"
            size="large"
            className="start-grading-btn"
            onClick={handleStartGrading}
            disabled={isGrading}
          >
            {isGrading ? 'GRADING...' : 'START GRADING'}
          </Button>

          {isGrading && (
            <div className="loading-skeletons">
              <Skeleton active />
              <Skeleton active />
            </div>
          )}

          {gradingComplete && (
            <div className="evaluation-reports">
              <EvaluationReportPage />
              <IndividualEvaluationReport />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifyAssignmentPage;
