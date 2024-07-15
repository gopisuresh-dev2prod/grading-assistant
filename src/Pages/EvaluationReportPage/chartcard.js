import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartCard = () => {
  const chartOption = {
    title: {
      text: 'Question-wise Marks Distribution',
      left: 'center',
      top: 0,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    legend: {
      data: ['Question 1', 'Question 2', 'Question 3', 'Question 5', 'Question 6'],
      top: 25,
      textStyle: {
        fontSize: 12
      }
    },
    grid: {
      top: 60,
      bottom: 40,
      left: 40,
      right: 20,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Question 1', 'Question 2', 'Question 3', 'Question 5', 'Question 6'],
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      min: 19,
      max: 36,
      interval: 3,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: 'Question 1',
        type: 'boxplot',
        data: [
          [26, 27, 30, 31.5, 34.5],
          [],
          [],
          [],
          []
        ],
        itemStyle: { 
            color: '#5470c6',
            borderWidth: 2
          },
          boxWidth: ['35%', '35%']
      },
      {
        name: 'Question 2',
        type: 'boxplot',
        data: [
          [],
          [21, 24, 30.5, 32, 34.5],
          [],
          [],
          []
        ],
        itemStyle: { 
            color: '#91cc75',
            borderWidth: 2
          },
          boxWidth: ['40%', '40%']
  
      },
      {
        name: 'Question 3',
        type: 'boxplot',
        data: [
          [],
          [],
          [23, 27.5, 30, 32.5, 35],
          [],
          []
        ],
        itemStyle: { 
            color: '#fac858',
            borderWidth: 2
          },
          boxWidth: ['40%', '40%']
      },
      {
        name: 'Question 5',
        type: 'boxplot',
        data: [
          [],
          [],
          [],
          [27, 28, 32.5, 34.5, 35],
          []
        ],
        itemStyle: { 
            color: '#ee6666',
            borderWidth: 2
          },
          boxWidth: ['40%', '40%']
      },
      {
        name: 'Question 6',
        type: 'boxplot',
        data: [
          [],
          [],
          [],
          [],
          [24, 27, 30, 34.5, 35]
        ],
        itemStyle: { 
            color: '#73c0de',
            borderWidth: 2
          },
          boxWidth: ['40%', '40%']
      }
    ]
  };

  return (
    <div className="chart-card" style={{
      backgroundColor: 'white',
      // borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    //   padding: '20px',
    //   margin: '20px'
    }}>
      <ReactECharts option={chartOption} style={{height: '400px', width: '100%'}} />
    </div>
  );
};

export default ChartCard;