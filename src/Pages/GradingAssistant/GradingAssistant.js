import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import techimage from '../../assests/seniordss.svg'
import './GradingAssistant.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';

const GradingAssistant = () => {
const navigate=useNavigate()
const handlenavigate=()=>{
  navigate('/modify-assignment')
}
  return (<>
    <Header></Header>
    <div className="grading-assistant">
      <div className="content">
        <h1>Simplify your</h1>
        <h1> grading process</h1>
        <h1>effortlessly</h1>
        <p>
          Intelligent Grading Assistant leads the way in educational
          technology with innovative grading solutions.
        </p>
        <div className="buttons">
          <Button type="primary" onClick={handlenavigate}>Create Assignment</Button>
          <Button type="primary">Modify Assignment</Button>
          <Button icon={<PlayCircleOutlined />}>Demo Video</Button>
        </div>
      </div>
      <div className="illustration">
        <img src={require('../../assests/liustaration.png')} alt="Grading illustration" />
      </div>
      <div className="teacher-image">
        <img src={techimage} alt="Teacher using tablet" />
      </div>
    </div>
    </>
  );
};

export default GradingAssistant;



