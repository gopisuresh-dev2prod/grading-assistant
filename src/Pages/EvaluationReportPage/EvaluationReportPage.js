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

const EvaluationReportPage = ({ assignmentName }) => {
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
      <h1 className='page-title'>
        Overall Evaluation Report {">"} {assignmentName}{" "}
      </h1>
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
      <section className="analysis-section">
        <h1>Detailed Analysis</h1>
        <div className="analysis-content">
          <h2>Depth of Economic Analysis:</h2>
          <div className="analysis-item">
            <strong>Strength:</strong>
            <p>High performers demonstrated detailed cost-benefit analysis, application of economic theories, and comprehensive market evaluations.</p>
          </div>
          <div className="analysis-item">
            <strong>Weakness:</strong>
            <p>Lower scorers often lacked detailed analysis, failing to connect theoretical principles to practical implications.</p>
          </div>

          <h2>Clarity and Organization:</h2>
          <div className="analysis-item">
            <strong>Strength:</strong>
            <p>Top performers wrote well-structured, clear, and concise responses, enhancing readability and argument flow.</p>
          </div>
          <div className="analysis-item">
            <strong>Weakness:</strong>
            <p>Many average and lower performers had issues with organization, leading to unclear arguments and reduced coherence.</p>
          </div>

          <h2>Critical Thinking and Insight:</h2>
          <div className="analysis-item">
            <strong>Strength:</strong>
            <p>Students with higher scores showed strong critical thinking by weighing pros and cons, discussing long-term implications, and providing strategic insights.</p>
          </div>
          <div className="analysis-item">
            <strong>Weakness:</strong>
            <p>Lower scorers often presented basic insights without deeper exploration of implications or alternative perspectives.</p>
          </div>

          <h2>Use of Examples:</h2>
          <div className="analysis-item">
            <strong>Strength:</strong>
            <p>High performers effectively used real-world examples to illustrate points and strengthen arguments.</p>
          </div>
          <div className="analysis-item">
            <strong>Weakness:</strong>
            <p>Lack of specific examples and empirical data in lower-scoring answers weakened the overall impact.</p>
          </div>

          <h2>Feedback Utilization:</h2>
          <div className="analysis-item">
            <h3>High Scorers:</h3>
            <p>Students responded well to feedback, demonstrating improvement in areas highlighted for development.</p>
          </div>
          <div className="analysis-item">
            <h3>Low Scorers:</h3>
            <p>Need to better integrate feedback to enhance depth, clarity, and critical analysis.</p>
          </div>

          <h2>Actionable Recommendations:</h2>
          <div className="analysis-item">
            <strong>Enhance Depth of Analysis:</strong>
            <ul>
              <li>Encourage all students to integrate more detailed economic principles and metrics in their answers.</li>
              <li>Provide training on how to connect theory to practice through specific examples and case studies.</li>
            </ul>
          </div>
          <div className="analysis-item">
            <strong>Improve Clarity and Organization:</strong>
            <ul>
              <li>Conduct workshops focused on effective writing techniques, emphasizing structure and coherence.</li>
              <li>Offer templates and examples of well-organized answers to guide students.</li>
            </ul>
          </div>
          <div className="analysis-item">
            <strong>Strengthen Critical Thinking:</strong>
            <ul>
              <li>Develop critical thinking exercises that require students to analyze different perspectives and long-term implications.</li>
              <li>Encourage the use of strategic insights and holistic views in their answers.</li>
            </ul>
          </div>
          <div className="analysis-item">
            <strong>Utilize Feedback:</strong>
            <ul>
              <li>Implement a structured feedback system that highlights specific areas for improvement and tracks student progress over time.</li>
              <li>Offer one-on-one sessions to discuss feedback and provide personalized guidance.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="charts-section">
      <div className="chart-container">
        <ChartCard />
      </div>
      <div className="chart-container">
        <HistogramChart />
      </div>
    </div>
    </div>
  );
};

export default EvaluationReportPage;
