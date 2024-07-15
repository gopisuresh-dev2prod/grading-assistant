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
      data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
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
      data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
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
        name: 'Q1',
        type: 'boxplot',
        data: [
          [19, 27.5, 30.0, 31.25, 34],
          [],
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
        name: 'Q2',
        type: 'boxplot',
        data: [
          [],
          [22, 28.0, 30.5, 31.75, 34],
          [],
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
        name: 'Q3',
        type: 'boxplot',
        data: [
          [],
          [],
          [21, 22.75, 30.0, 31.25, 35],
          [],
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
        name: 'Q4',
        type: 'boxplot',
        data: [
          [],
          [],
          [],
          [23, 28.0, 29.0, 30.25, 35],
          [],
          []
        ],
        itemStyle: { 
          color: '#ee6666',
          borderWidth: 2
        },
        boxWidth: ['40%', '40%']
      },
      {
        name: 'Q5',
        type: 'boxplot',
        data: [
          [],
          [],
          [],
          [],
          [29, 31.0, 33.0, 34.0, 35],
          []
        ],
        itemStyle: { 
          color: '#73c0de',
          borderWidth: 2
        },
        boxWidth: ['40%', '40%']
      },
      {
        name: 'Q6',
        type: 'boxplot',
        data: [
          [],
          [],
          [],
          [],
          [],
          [24, 28.0, 29.0, 32.0, 35]
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