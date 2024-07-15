import React from "react";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  LineChartOutlined,
  FileTextOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import ReactECharts from "echarts-for-react";
import "./EvaluationReportPage.scss";
import ChartCard from "./chartcard";
import HistogramChart from "./HistogramChart";

const EvaluationReportPage = ({assignmentName}) => {
  const chartOption = {
    title: {
      text: "Question-wise Marks Distribution",
    },
    legend: {
      data: [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 5",
        "Question 6",
      ],
      right: 0,
    },
    xAxis: {
      type: "category",
      data: [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 5",
        "Question 6",
      ],
    },
    yAxis: {
      type: "value",
      min: 19,
      max: 36,
    },
    series: [
      {
        name: "Question 1",
        type: "boxplot",
        data: [[26, 27, 30, 31.5, 34.5]],
      },
      {
        name: "Question 2",
        type: "boxplot",
        data: [[21, 24, 30.5, 32, 34.5]],
      },
      {
        name: "Question 3",
        type: "boxplot",
        data: [[23, 27.5, 30, 32.5, 35]],
      },
      {
        name: "Question 5",
        type: "boxplot",
        data: [[27, 28, 32.5, 34.5, 35]],
      },
      {
        name: "Question 6",
        type: "boxplot",
        data: [[24, 27, 30, 34.5, 35]],
      },
    ],
  };

  return (
    <div className="evaluation-report-page">
      <h1>Overall Evaluation Report {">"} {assignmentName} </h1>
      <div className="stats-cards">
        <Card className="stat-card">
          <ShoppingCartOutlined className="icon" />
          <div className="content">
            <h3>Avg. Grade</h3>
            <h2>86.9</h2>
            {/* <span className="positive">+15%</span> */}
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <LineChartOutlined className="icon" />
          <div className="content">
            <h3>Highest Grade</h3>
            <h2>98</h2>
            {/* <span className="negative">-3.5%</span> */}
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <FileTextOutlined className="icon" />
          <div className="content">
            <h3>Lowest Grade</h3>
            <h2>75</h2>
            {/* <span className="positive">+15%</span> */}
            <a href="#">View More</a>
          </div>
        </Card>
      </div>

      <div className="charts-section">
  <div className="chart-card">
    <ChartCard />
  </div>
  <div className="histogram-chart">
    <HistogramChart />
  </div>
</div>

    </div>
  );
};

export default EvaluationReportPage;
