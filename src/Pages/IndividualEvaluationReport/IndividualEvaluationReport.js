import React from 'react';
import { Table, Avatar } from 'antd';
import { FileTextOutlined, SyncOutlined, ExportOutlined } from '@ant-design/icons';
import './IndividualEvaluationReport.scss';

const IndividualEvaluationReport = () => {
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
      render: () => (
        <div className="actions">
          <a href="#" className="action-link">
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

  const data = Array(10).fill().map((_, index) => ({
    key: index,
    student: 'Nicholas Patrick',
    grade: '2540.58',
    avatar: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
  }));

  return (
    <div className="individual-evaluation-report">
      <h1>Individual Evaluation Report</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default IndividualEvaluationReport;