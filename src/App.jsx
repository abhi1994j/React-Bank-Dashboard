import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registering required Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const App = () => {
  // Initial financial data with sliders' values
  const [financialData, setFinancialData] = useState({
    savings: 50,
    investments: 30,
    expenses: 15,
    debt: 5,
  });

  const [chartData, setChartData] = useState({
    labels: ['Savings', 'Investments', 'Expenses', 'Debt'],
    datasets: [
      {
        label: 'Financial Allocation',
        data: [50, 30, 15, 5], // Example values in percentages
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCD56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  });

  // Update chart data when sliders change
  const updateSliderValue = (category, value) => {
    const newData = { ...financialData, [category]: value };
    setFinancialData(newData);

    // Ensure total percentage does not exceed 100
    const total = newData.savings + newData.investments + newData.expenses + newData.debt;
    if (total > 100) {
      // Distribute the excess proportionally
      const excess = total - 100;
      let newValues = { ...newData };

      // Adjust the values if the total is more than 100
      if (newValues.savings > excess) newValues.savings -= excess;
      else newValues.savings = 0;

      if (newValues.investments > excess) newValues.investments -= excess;
      else newValues.investments = 0;

      if (newValues.expenses > excess) newValues.expenses -= excess;
      else newValues.expenses = 0;

      if (newValues.debt > excess) newValues.debt -= excess;
      else newValues.debt = 0;

      setFinancialData(newValues);
    }

    // Update chart data
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [newData.savings, newData.investments, newData.expenses, newData.debt],
        },
      ],
    });
  };

  return (
    <div className="App">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Bank Dashboard</h1>

        <div className="financial-data">
          <h2>Financial Allocation</h2>
          <Pie data={chartData} />
        </div>

        <div className="sliders">
          <div className="slider-container">
            <label>Savings: {financialData.savings}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={financialData.savings}
              onChange={(e) => updateSliderValue('savings', parseInt(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>Investments: {financialData.investments}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={financialData.investments}
              onChange={(e) => updateSliderValue('investments', parseInt(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>Expenses: {financialData.expenses}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={financialData.expenses}
              onChange={(e) => updateSliderValue('expenses', parseInt(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>Debt: {financialData.debt}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={financialData.debt}
              onChange={(e) => updateSliderValue('debt', parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
