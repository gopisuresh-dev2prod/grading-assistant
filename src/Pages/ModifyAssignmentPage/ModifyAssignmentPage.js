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
  const [gradingComplete, setGradingComplete] = useState(true);

  const isStartGradingEnabled = assignmentName.trim() !== '' &&
    Object.values(files).some(fileList => fileList.length > 0);

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleStartGrading = () => {
    setIsGrading(true);
    setGradingComplete(false);
    setTimeout(() => {
      setIsGrading(false);
      setGradingComplete(true);
    }, 3000);
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
    // message.success(`${info.file.name} uploaded successfully`);
  };

  const uploadProps = (type) => ({
    accept: '.jpg,.png,.gif,.pdf',
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
          <p className="file-types">JPG, PNG, GIF, PDF</p>
          <Button icon={<UploadOutlined />}>Browse</Button>
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
              { title: 'Upload Assignment', type: 'assignment' },
              { title: 'Upload Grading Rubric', type: 'rubric' },
              { title: 'Upload Course Content', type: 'content' },
              { title: 'Assignment to Student Mapping', type: 'mapping' }
            ].map(({ title, type }) => (
              <div key={title} className="upload-card">
                <h3>{title}
                 {/* <EditOutlined /> */}
                 </h3>
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
            disabled={isGrading || !isStartGradingEnabled}
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
              <EvaluationReportPage assignmentName={assignmentName} />
              <IndividualEvaluationReport assignmentName={assignmentName}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModifyAssignmentPage;