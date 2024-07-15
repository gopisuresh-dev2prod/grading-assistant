import React, { useState, useEffect } from 'react';
import { Input, Button, Upload, Skeleton,notification } from 'antd';
import { UploadOutlined, CheckCircleOutlined } from '@ant-design/icons';
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
  const [countdown, setCountdown] = useState(10);

  const isStartGradingEnabled = assignmentName.trim() !== '' &&
    Object.values(files).some(fileList => fileList.length > 0);

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleStartGrading = () => {
    if (!isStartGradingEnabled) {
      notification.error({
        message: 'Validation Error',
        description: 'Please ensure an assignment name is provided and files are uploaded.',
        placement: 'bottom',
      });
      return;
    }

    setIsGrading(true);
    setGradingComplete(false);
    setCountdown(60); // Reset the countdown

    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 55) {
          return prevCountdown - 1;
        } else if (prevCountdown > 1) {
          // Skip directly to 5 when countdown reaches 55
          return prevCountdown === 52 ? 5 : prevCountdown - 1;
        } else {
          clearInterval(countdownInterval);
          setIsGrading(false);
          setGradingComplete(true);
          return 0;
        }
      });
    }, 1000);
  };


  const handleFileChange = (info, type) => {
    const { fileList } = info;
    setFiles(prev => ({
      ...prev,
      [type]: fileList.map(file => ({
        ...file,
        status: 'done'
      }))
    }));
  };

  const uploadProps = (type) => ({
    accept: '.docx,.pdf,.jpg,.png,',
    multiple: true,
    fileList: files[type],
    onChange: (info) => handleFileChange(info, type),
    onRemove: (file) => {
      const index = files[type].indexOf(file);
      const newFileList = files[type].slice();
      newFileList.splice(index, 1);
      setFiles(prev => ({
        ...prev,
        [type]: newFileList
      }));
    },
  });

  const renderUploadContent = (type) => {
    const fileCount = files[type].length;
    
    if (fileCount === 0) {
      return (
        <>
          <UploadOutlined className="upload-icon" />
          <p>Drag and drop files here</p>
          <p className="file-types">Docx, PDF,JPG, PNG</p>
          <Button icon={<UploadOutlined />}>upload</Button>
        </>
      );
    }
    
    return (
      <div className="file-count">
        <CheckCircleOutlined style={{ color: 'green', fontSize: '24px' }} />
        <span>{fileCount} file{fileCount > 1 ? 's' : ''} uploaded</span>
        <Button icon={<UploadOutlined />} className="add-more-btn">
          Add More
        </Button>
      </div>
    );
  };

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
              { title: ' Assignment', type: 'assignment' },
              { title: ' Grading Rubric', type: 'rubric' },
              { title: ' Course Content', type: 'content' },
              { title: 'Assignment to Student Mapping', type: 'mapping' }
            ].map(({ title, type }) => (
              <div key={title} className="upload-card">
                <h3>{title}</h3>
                <Upload {...uploadProps(type)} className="upload-area">
                  <div className="upload-content">
                    {renderUploadContent(type)}
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
            // disabled={isGrading || !isStartGradingEnabled}
          >
            {isGrading ? 'GRADING...' : 'START GRADING'}
          </Button>

          {isGrading && (
            <div className="grading-message">
              <p>Your report will be ready in {countdown} seconds...</p>
              <div className="loading-skeletons">
                <Skeleton active />
                <Skeleton active />
              </div>
            </div>
          )}

          {gradingComplete && (
            <div className="evaluation-reports">
              <EvaluationReportPage assignmentName={assignmentName} />
              <IndividualEvaluationReport assignmentName={assignmentName} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifyAssignmentPage;
