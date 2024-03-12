import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position:'none',
    },
    title: {
      display: false,
      
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      backgroundColor: '#E9D1FF',
    },
    {
      
      data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      backgroundColor: '#A946FF',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} className='w-full ' />;
}
