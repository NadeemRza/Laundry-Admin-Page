import React from 'react';
import DoughnutChart from './DonutChart';
import './chartSection.css';

const ChartSection = () => {
  return (
    <div className='chart-block'>
      <h2 className='chart-heading'>Overview</h2>
      <DoughnutChart />
    </div>
  )
}

export default ChartSection
