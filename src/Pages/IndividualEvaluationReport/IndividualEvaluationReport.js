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
      leftDocx: record.leftDocx, // Replace with actual DOCX URL
      rightDocx: record.rightDocx, // Replace with actual DOCX URL
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
        <>
       {record?.status !=='review'? <div className="actions">
          <a onClick={() => showModal(record)} className="action-link">
            <FileTextOutlined /> View Report
          </a>
          <a href="#" className="action-link">
            <SyncOutlined /> Reevaluate
          </a>
          <a href="#" className="action-link">
            <ExportOutlined /> Export
          </a>
        </div>:<a href="#" className="action-link">
           review assignment
          </a>}
        </>
      ),
    },
  ];

  const data = [
  
    {
      key: 1,
      student: 'Avery',
      grade: '3000.00',
      avatar: 'https://ui-avatars.com/api/?name=Avery', 
      leftDocx:require('../../assests/Avery_Thompson_question_answers.docx'),
      rightDocx:require('../../assests/avan_results_grades.docx')
    },
    {
      key: 2,
      student: 'Ethan Clark',
      grade: '2750.25',
      avatar: 'https://ui-avatars.com/api/?name=Ethan+Clark',
      leftDocx:require('../../assests/Ethan_Clark_answers.docx'),
      rightDocx:require('../../assests/ethanresults.docx')
    },
    {
      key: 3,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick', // Replace with actual avatar URL
      leftdocx:'',
      rightDocx:'',
      status:'review'
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
          <DocxViewer docxUrl={modalContent.leftDocx} />
          <DocxViewer docxUrl={modalContent.rightDocx} />
        </div>
      </Modal>
    </div>
  );
};

export default IndividualEvaluationReport;
