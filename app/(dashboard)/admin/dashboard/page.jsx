"use client"
import React, { useState } from 'react';
import DashboardHeader from './_components/DashboardHeader';
import StatsCard from './_components/StatsCard';
import LineChart from './_components/LineChart';
import DonutChart from './_components/DonutChart';

const Dashboard = () => {
/* Show model Start */
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
/* Show model End */


// Function to generate random data for the series
const generateRandomData = () => {
	const data1 = [];
	const data2 = [];
	for (let i = 0; i < 12; i++) {
		data1.push(Math.floor(Math.random() * 20000)); // Random number between 0 and 20000 for Series 1
		data2.push(Math.floor(Math.random() * 20000)); // Random number between 0 and 20000 for Series 2
	}
	return { data1, data2 };
};
// Generate initial random data for both series
const initialData = generateRandomData();
const chartOptions = {
	chart: {
		height: 280,
		type: 'line',
		zoom: {
			enabled: false
		},
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 4,
	},
	xaxis: {
		type: 'category',
		categories: [
			'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
		],
		labels: {
			style: {
				fontSize: '13px',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 400,
				colors: '#6b6b6b'
			},
			offsetX: 0,
			offsetY: 0
		}
	},
	yaxis: {
		labels: {
			style: {
				fontSize: '13px',
				fontFamily: 'Inter, sans-serif',
				fontWeight: 400,
				colors: '#6b6b6b',
			},
			offsetX: -15,
			offsetY: 0
		}
	},
	tooltip: {
		x: {
			format: 'MMM',
		},
		y: {
			formatter: function (value) {
				return value + 'k';
			}
		}
	},
	grid: {
		borderColor: '#e0e0e0',
		strokeDashArray: 5,
		padding: {
			top: -15,
			bottom: -15,
			left: 35,
			right: 10
		}
	}
};

// State to hold current data for the chart
const [chartSeries, setChartSeries] = React.useState([
	{
		name: 'Series 1',
		data: initialData.data1,
		color: '#008ffb'
	},
	{
		name: 'Series 2',
		data: initialData.data2,
		color: '#1bd5b5'
	}
]);

// Function to update chart data
const updateChartData = () => {
	const newData = generateRandomData();
	setChartSeries([
		{ ...chartSeries[0], data: newData.data1 },
		{ ...chartSeries[1], data: newData.data2 }
	]);
};

React.useEffect(() => {
	const interval = setInterval(updateChartData, 10000); // Update data every 5 seconds
	return () => clearInterval(interval); // Cleanup interval on component unmount
}, []);

// Donut chart data and options
const donutChartOptions = {
	chart: {
		type: 'donut',
	},
	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					width: 200,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
};

const donutChartSeries = [44, 55, 41, 17, 15]; // Example data for the donut chart

  return (
    <section className={sectionClassName} style={sectionStyle}>
      <DashboardHeader />
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-12 col-12">
          <StatsCard title="المداخيل" value="$10,800" icon="user-check" trend="success" trendText="20.9%" />
        </div>
        <div className="col-xl-3 col-lg-6 col-md-12 col-12">
          <StatsCard title="تسجيلات" value="10,000" icon="users" trend="success" trendText="5.86%" />
        </div>
        <div className="col-xl-3 col-lg-6 col-md-12 col-12">
          <StatsCard title="الطلاب" value="5,789" icon="book-open" trend="danger" trendText="1.02%" />
        </div>
        <div className="col-xl-3 col-lg-6 col-md-12 col-12">
          <StatsCard title="الأساتذة" value="300" icon="user-check" trend="success" trendText="9.45%" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-12">
          <LineChart chartOptions={chartOptions} chartSeries={chartSeries} />
        </div>
        <div className="col-md-4 col-12">
          <DonutChart chartOptions={donutChartOptions} chartSeries={donutChartSeries} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
