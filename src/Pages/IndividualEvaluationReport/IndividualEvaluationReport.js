import React, { useState } from 'react';
import { Table, Avatar, Modal, Button } from 'antd';
import { FileTextOutlined, SyncOutlined, ExportOutlined } from '@ant-design/icons';
import DocxViewer from './DocxViewer';
import './IndividualEvaluationReport.scss';

const IndividualEvaluationReport = ({assignmentName}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ leftDocx: null, rightDocx: null });

  const showModal = (record) => {
    setModalContent({
      leftDocx: record.leftDocx,
      rightDocx: record.rightDocx,
    });
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: '',
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
      title: '',
      dataIndex: 'grade',
      key: 'grade',
      render: (text) => <span className="grade">{text}</span>,
    },
    {
      title: '',
      key: 'actions',
      render: (text, record) => (
        <div className="actions">
          {record.status !== 'review' ? (
            <>
              <a onClick={() => showModal(record)} className="action-link">
                <FileTextOutlined /> View Report
              </a>
              <a href="#" className="action-link">
                <SyncOutlined /> Reevaluate
              </a>
              <a href="#" className="action-link">
                <ExportOutlined /> Export
              </a>
            </>
          ) : (
            <a href="#" className="action-link">
              Review Assignment
            </a>
          )}
        </div>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      student: 'Avery',
      grade: '3000.00',
      avatar: 'https://ui-avatars.com/api/?name=Avery',
      leftDocx: require('../../assests/Avery_Thompson_question_answers.docx'),
      rightDocx: require('../../assests/avan_results_grades.docx'),
    },
    {
      key: 2,
      student: 'Ethan Clark',
      grade: '2750.25',
      avatar: 'https://ui-avatars.com/api/?name=Ethan+Clark',
      leftDocx: require('../../assests/Ethan_Clark_answers.docx'),
      rightDocx: require('../../assests/ethanresults.docx'),
    },
    {
      key: 3,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 4,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 5,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 6,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 7,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 8,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 6,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 7,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
    {
      key: 8,
      student: 'Nicholas Patrick',
      grade: '2540.58',
      avatar: 'https://ui-avatars.com/api/?name=Nicholas+Patrick',
      leftDocx: '',
      rightDocx: '',
      status: 'review',
    },
  ];

  return (
    <div className="individual-evaluation-report">
      <h1 className='page-title'>Individual Evaluation Report {">"} {assignmentName}{" "}</h1>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        showHeader={false}
        rowClassName="custom-row"
      />
      <Modal
        title="View Report"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div className="modal-content">
          <DocxViewer docxUrl={modalContent.leftDocx} />
          <DocxViewer docxUrl={modalContent.rightDocx} />
        </div>
      </Modal>
    </div>
  );
};

export default IndividualEvaluationReport;
