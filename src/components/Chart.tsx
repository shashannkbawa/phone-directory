import { ChartOptions } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useCovidData } from '../hooks/useCovidData';

// Component for Chart
const CovidChart: React.FC = () => {
  const { historicalData, isLoadingHistorical, isErrorHistorical } = useCovidData();

  // To check if data is loading or an error occurred
  if (isLoadingHistorical) {
    return <div>Loading historical data...</div>;
  }

  if (isErrorHistorical || !historicalData) {
    return <div>Error loading historical data</div>;
  }

  if (!historicalData.cases || !historicalData.deaths || !historicalData.recovered) {
    return <div>Incomplete data</div>;
  }

  // Chart data JSON
  const chartData = {
    labels: Object.keys(historicalData.cases).map(date => new Date(date)),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(historicalData.cases),
        borderColor: 'rgba(234, 239, 44, 1)',
        backgroundColor: 'rgba(234, 239, 44, 0.2)',
        fill: true,
      },
      {
        label: 'Deaths',
        data: Object.values(historicalData.deaths),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Recovered',
        data: Object.values(historicalData.recovered),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  // Implemented scales for chart
  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Covid-19 Data',
      },
    },
  };
 
  return (
    <div>
      <h2>Covid-19 Cases Data (Worldwide)</h2>
    <Line data={chartData} options={options} />
    </div>
  );
};

export default CovidChart;
