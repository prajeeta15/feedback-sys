import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function SentimentChart({ feedback }) {
  const sentimentCount = { positive: 0, neutral: 0, negative: 0 };
  feedback.forEach(f => sentimentCount[f.sentiment]++);

  const data = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      label: 'Sentiment Trends',
      data: [
        sentimentCount.positive,
        sentimentCount.neutral,
        sentimentCount.negative
      ],
      backgroundColor: ['green', 'gray', 'red']
    }]
  };

  return <Bar data={data} />;
}
