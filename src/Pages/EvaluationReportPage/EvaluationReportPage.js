import React from "react";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  LineChartOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  StockOutlined,
  RiseOutlined,
  FallOutlined
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
          <StockOutlined  className="icon" />
          <div className="content">
            <h3>Avg. Grade</h3>
            <h2>86.9</h2>
            {/* <span className="positive">+15%</span> */}
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <RiseOutlined  className="icon" />
          <div className="content">
            <h3>Highest Grade</h3>
            <h2>98</h2>
            {/* <span className="negative">-3.5%</span> */}
            <a href="#">View Report</a>
          </div>
        </Card>
        <Card className="stat-card">
          <FallOutlined   className="icon" />
          <div className="content">
            <h3>Lowest Grade</h3>
            <h2>75</h2>
            {/* <span className="positive">+15%</span> */}
            <a href="#">View More</a>
          </div>
        </Card>
      </div>
 

      <div className="charts-section">
      <div className="chart-container">
        <ChartCard />
      </div>
      <div className="chart-container">
        <HistogramChart />
      </div>
      
    </div>
    <section className="analysis-section">
  <h1>Class Performance Insights</h1>
  <div className="analysis-content">
    <h2>Strengths:</h2>
    <div className="analysis-item">
      <strong>1. Understanding of Economic Concepts:</strong>
      <ul>
        <li>Most students have demonstrated a clear understanding of fundamental economic principles.</li>
        <li>Many students effectively applied these principles to real-world scenarios, showing practical knowledge.</li>
      </ul>
    </div>
    <div className="analysis-item">
      <strong>2. Critical Thinking and Insight:</strong>
      <ul>
        <li>Students like Ethan Clark and Sofia Müller exhibited strong critical thinking, providing insightful analysis and strategic recommendations.</li>
        <li>Many responses included considerations of broader market implications and competitive dynamics.</li>
      </ul>
    </div>
    <div className="analysis-item">
      <strong>3. Clarity and Organization:</strong>
      <ul>
        <li>The majority of the students structured their answers logically and clearly, enhancing readability and comprehension.</li>
      </ul>
    </div>

    <h2>Areas for Improvement:</h2>
    <div className="analysis-item">
      <strong>1. Depth of Economic Analysis:</strong>
      <ul>
        <li>Several students, including Avery Thompson and Kofi Adebayo, need to deepen their economic analysis by integrating more comprehensive metrics and theories.</li>
        <li>Explicitly mentioning economic models and metrics can demonstrate a deeper understanding.</li>
      </ul>
    </div>
    <div className="analysis-item">
      <strong>2. Practical Application and Examples:</strong>
      <ul>
        <li>Incorporating more real-world examples and case studies could strengthen the arguments and provide practical context.</li>
        <li>Students should consider the inclusion of specific examples to support their points, enhancing the practical relevance of their analysis.</li>
      </ul>
    </div>
    <div className="analysis-item">
      <strong>3. Addressing All Parts of Questions:</strong>
      <ul>
        <li>Some students missed addressing all aspects of the questions comprehensively. Ensuring thorough responses to all parts of a question is crucial for higher scores.</li>
        <li>It's important to cover each part of the question in detail to provide a complete and well-rounded answer.</li>
      </ul>
    </div>
    <div className="analysis-item">
      <strong>4. Improving Clarity and Cohesion:</strong>
      <ul>
        <li>While most responses were clear, there is room for improvement in terms of conciseness and coherence. Minor grammatical and typographical errors need attention.</li>
        <li>Ensuring that all points are directly relevant to the question and logically connected can improve the overall quality of the answers.</li>
      </ul>
    </div>

    <h2>Recommendations for the Class:</h2>
    <div className="analysis-item">
      <strong>1. Depth of Economic Analysis:</strong>
      <p><strong>Action:</strong> Allocate more class time to in-depth discussions of key economic models and metrics. Ensure that students understand how to apply these concepts practically.</p>
      <p><strong>Effort Focus:</strong> Conduct workshops or practical sessions where students can practice applying economic theories to real-world scenarios. Use case studies from various industries to demonstrate how to integrate these principles into their analyses.</p>
    </div>
    <div className="analysis-item">
      <strong>2. Incorporating Real-World Examples:</strong>
      <p><strong>Action:</strong> Integrate more real-world examples and case studies into lectures. Highlight successful and unsuccessful applications of economic strategies in different industries.</p>
      <p><strong>Effort Focus:</strong> Provide assignments that require students to research and present case studies. This will help them understand the practical implications of theoretical concepts.</p>
    </div>
    <div className="analysis-item">
      <strong>3. Addressing All Parts of Questions:</strong>
      <p><strong>Action:</strong> Emphasize the importance of thoroughly addressing all components of a question. Teach students how to break down complex questions into manageable parts.</p>
      <p><strong>Effort Focus:</strong> Offer detailed feedback on assignments, specifically pointing out any missed components. Conduct review sessions where students can learn how to structure their responses to cover all necessary aspects.</p>
    </div>
    <div className="analysis-item">
      <strong>4. Improving Clarity and Cohesion:</strong>
      <p><strong>Action:</strong> Focus on improving students' writing skills, particularly in organizing and articulating their thoughts clearly.</p>
      <p><strong>Effort Focus:</strong> Incorporate writing workshops into the curriculum where students can practice structuring their answers logically. Provide examples of well-structured responses and highlight common pitfalls to avoid.</p>
    </div>
    <p className="conclusion">By focusing on these areas, the class can improve their overall performance, achieving a deeper understanding and better articulation of economic concepts and their applications.</p>
  </div>
</section>
    </div>
  );
};

export default EvaluationReportPage;
