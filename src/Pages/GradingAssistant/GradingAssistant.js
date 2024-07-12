import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import './GradingAssistant.scss';

const GradingAssistant = () => {
  return (
    <div className="grading-assistant">
      <div className="content">
        <h1>Simplify your grading process effortlessly</h1>
        <p>
          Intelligent Grading Assistant leads the way in educational
          technology with innovative grading solutions.
        </p>
        <div className="buttons">
          <Button type="primary">Modify Assignment</Button>
          <Button type="primary">Modify Assignment</Button>
          <Button icon={<PlayCircleOutlined />}>Demo Video</Button>
        </div>
      </div>
      <div className="image-container">
        <img src="/path-to-your-image.jpg" alt="Teacher using tablet" />
      </div>
      <div className="illustration">
        {/* Add your SVG illustration here */}
      </div>
    </div>
  );
};

export default GradingAssistant;