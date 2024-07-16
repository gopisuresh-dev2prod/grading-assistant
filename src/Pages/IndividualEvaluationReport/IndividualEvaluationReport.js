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
    setModalContent({ leftDocx: null, rightDocx: null })
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
      render: (text, record) => {
        if (record.status !== 'review') {
          return <span className="grade">{text}</span>;
        }
        return null; // or return a placeholder for review status
      }
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
      grade: '76',
      avatar: 'https://ui-avatars.com/api/?name=Avery',
      leftDocx: require('../../assests/Avery_Thompson_question_answers.docx'),
      rightDocx: require('../../assests/avan_results_grades.docx'),
    },
    {
      key: 2,
      student: 'Ethan Clark',
      grade: '97',
      avatar: 'https://ui-avatars.com/api/?name=Ethan+Clark',
      leftDocx: require('../../assests/Ethan_Clark_answers.docx'),
      rightDocx: require('../../assests/ethanresults.docx'),
    },
 
    {
        key: 4,
        student: 'Madison Parker',
        grade: '95',
        avatar: 'https://ui-avatars.com/api/?name=Madison+Parker',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 5,
        student: 'Jackson Carter',
        grade: '82',
        avatar: 'https://ui-avatars.com/api/?name=Jackson+Carter',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 6,
        student: 'Aarav Patel',
        grade: '75',
        avatar: 'https://ui-avatars.com/api/?name=Aarav+Patel',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 7,
        student: 'Priya Sharma',
        grade: '85',
        avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 8,
        student: 'Wei Zhang',
        grade: '85',
        avatar: 'https://ui-avatars.com/api/?name=Wei+Zhang',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 9,
        student: 'Lian Chen',
        grade: '89',
        avatar: 'https://ui-avatars.com/api/?name=Lian+Chen',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 10,
        student: 'Sofia Müller',
        grade: '85',
        avatar: 'https://ui-avatars.com/api/?name=Sofia+Müller',
        leftDocx: '',
        rightDocx: '',
    },
    {
        key: 11,
        student: 'Kofi Adebayo',
        grade: '98',
        avatar: 'https://ui-avatars.com/api/?name=Kofi+Adebayo',
        leftDocx: '',
        rightDocx: '',
        // status: 'review',
    },
    {
        key: 12,
        student: 'Isla Singh',
        grade: '89',
        avatar: 'https://ui-avatars.com/api/?name=Isla+Singh',
        leftDocx: '',
        rightDocx: '',

        status: 'review',
    },
];

  return (
    <div className="individual-evaluation-report">
      <div style={{
        display:'flex',
        justifyContent:'space-between'
      }}>
      <h1 className='page-title'>Individual Evaluation Report {">"} {assignmentName}{" "}</h1>
      <div>
      <Button> Export All</Button>
      </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        // showHeader={false}
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
          <DocxViewer docxUrl={modalContent.leftDocx?modalContent.leftDocx:undefined} />
          <DocxViewer docxUrl={modalContent.rightDocx?modalContent.rightDocx:undefined} />
        </div>
      </Modal>
    </div>
  );
};

export default IndividualEvaluationReport;
