import {Chart as ChartJS, ArcElement, Tooltip, Legend, registerables} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement, 
  ...registerables
);

const DoughnutChart = () => {

  const data = {
    labels: ['Delivered', 
    'Ready To Deliver', 
    'Processing', 
    'Pending', 
    'Cancelled'],
    datasets: [{
        label: 'Orders Quantity',
        data: [345, 263, 99, 202, 40],
        backgroundColor: [
            'rgb(0,131,255)',
            'rgb(45,206,138)',
            'rgb(250,173,65)',
            'rgb(130,146,170)',
            'rgb(243,54,92)',
        ],
        hoverOffset: 6
    }]
};

const options = {
  maintainAspectRatio : false,
};


  return (
    <div>
      <Doughnut
        height={400}
        data={data}
        options={options}
      />
    </div>
  )
}

export default DoughnutChart;