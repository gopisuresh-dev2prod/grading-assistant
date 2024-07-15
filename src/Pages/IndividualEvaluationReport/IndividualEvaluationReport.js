import React, { useState } from 'react';
import { Table, Avatar, Modal, Button } from 'antd';
import { FileTextOutlined, SyncOutlined, ExportOutlined } from '@ant-design/icons';
import DocxViewer from './DocxViewer';
import './IndividualEvaluationReport.scss';

const IndividualEvaluationReport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ leftDocx: null, rightDocx: null });

  const showModal = (record) => {
    // Simulate loading DOCX content
    setModalContent({
      leftDocx: 'https://docs.google.com/document/d/e/2PACX-1vSXN22hjjiKKJjuEA3Q59aVYIiin0ujO6BpMkQq1H119smILZ9snnt558cK2f7Qv9FxVP2SuZ-vAyJC/pub', // Replace with actual DOCX URL
      rightDocx: 'https://docs.google.com/document/d/e/2PACX-1vSXN22hjjiKKJjuEA3Q59aVYIiin0ujO6BpMkQq1H119smILZ9snnt558cK2f7Qv9FxVP2SuZ-vAyJC/pub', // Replace with actual DOCX URL
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Student',
      dataIndex: 'student',
      key: 'student',
      render: (text, record) => (
        <div className="student-info">
          <Avatar src={record.avatar} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      render: (text) => <span className="grade">{text}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div className="actions">
          <a onClick={() => showModal(record)} className="action-link">
            <FileTextOutlined /> View Report
          </a>
          <a href="#" className="action-link">
            <SyncOutlined /> Reevaluate
          </a>
          <a href="#" className="action-link">
            <ExportOutlined /> Export
          </a>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick', // Replace with actual avatar URL
    },
    {
      key: 2,
      student: 'Avery',
      grade: '3000.00',
      avatar: 'https://ui-avatars.com/api/?name=Avery',
    },
    {
      key: 3,
      student: 'Ethan Clark',
      grade: '2750.25',
      avatar: 'https://ui-avatars.com/api/?name=Ethan+Clark',
    },
  ];

  return (
    <div className="individual-evaluation-report">
      <h1>Individual Evaluation Report</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
      <Modal
        title="View Report"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        // width={1200} // Adjust width as needed
      >
        <div className="modal-content" style={{ display: 'flex', gap: '20px' }}>
          <DocxViewer docxUrl={require('../../assests/evaluation results_grades.docx')} />
          <DocxViewer docxUrl={require('../../assests/evaluation results_grades.docx')} />
        </div>
      </Modal>
    </div>
  );
};

export default IndividualEvaluationReport;
