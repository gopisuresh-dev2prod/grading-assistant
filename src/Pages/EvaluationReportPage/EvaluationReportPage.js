import React from 'react';
import { Card } from 'antd';
import { ShoppingCartOutlined, LineChartOutlined, FileTextOutlined, ShoppingOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import './EvaluationReportPage.scss';

const EvaluationReportPage = () => {
  const chartOption = {
    xAxis: {
      type: 'category',
      data: ['2015', '2016', '2017', '2018', '2019', '2020'],
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        name: 'Approved',
        data: [30, 40, 10, 40, 15, 50],
        type: 'line',
        smooth: true,
        symbolSize: 0,
        lineStyle: { width: 5, color: '#FF9999' },
        areaStyle: { color: '#FFE6E6' },
      },
      {
        name: 'Submitted',
        data: [20, 20, 15, 45, 15, 30],
        type: 'line',
        smooth: true,
        symbolSize: 0,
        lineStyle: { width: 5, color: '#8080FF' },
        areaStyle: { color: '#E6E6FF' },
      }
    ],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Approved', 'Submitted'],
      bottom: 0,
    },
  };

  return (
    <div className="evaluation-report-page">
      <h1>Overall Evaluation Report</h1>
      <div className="stats-cards">
        <Card className="stat-card">
          <ShoppingCartOutlined className="icon" />
          <div className="content">
            <h3>Avg. Grade</h3>
            <h2>05.5k</h2>
            <span className="positive">+15%</span>
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <LineChartOutlined className="icon" />
          <div className="content">
            <h3>Highest Grade</h3>
            <h2>$2,435k</h2>
            <span className="negative">-3.5%</span>
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <FileTextOutlined className="icon" />
          <div className="content">
            <h3>Lowest Grade</h3>
            <h2>3.5M</h2>
            <span className="positive">+15%</span>
            <a href="#">View More</a>
          </div>
        </Card>
      </div>
      <div className="charts-section">
        <Card className="chart-card">
          <h3>Claims Over the Years</h3>
          <ReactECharts option={chartOption} style={{height: '300px'}} />
        </Card>
        <Card className="sales-target">
          <h3>Sales team target</h3>
          <h2>82%</h2>
          <p>Achieved</p>
          <div className="team-avatars">
            <img src="avatar1.jpg" alt="Team member" />
            <img src="avatar2.jpg" alt="Team member" />
            <img src="avatar3.jpg" alt="Team member" />
            <span>+4</span>
          </div>
          <ShoppingOutlined className="icon" />
          <h3>Cleared Queue</h3>
          <h2>1.4k</h2>
          <p>No. of Bills <span className="positive">+15%</span></p>
        </Card>
      </div>
    </div>
  );
};

export default EvaluationReportPage;