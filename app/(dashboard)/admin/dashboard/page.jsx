"use client"
import React, { useState, useEffect } from 'react';
import DashboardHeader from './_components/DashboardHeader';
import StatsCard from './_components/StatsCard';
import LineChart from './_components/LineChart';
import DonutChart from './_components/DonutChart';
import ApexCharts from "apexcharts";
import Link from 'next/link';

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

/* newwwww */
const performanceOptions = {
  colors: ["#7638ff", "#fda600"],
  chart: {
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "التحصيل الدراسي",
      type: "column",
      data: [85, 90, 78, 88, 92, 85, 91, 76, 89, 82],
    },
    {
      name: "التقارير المعلقة",
      type: "column",
      data: [10, 15, 8, 12, 10, 7, 5, 13, 8, 6],
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
    ],
  },
  yaxis: {
    title: {
      text: "عدد الحالات",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " حالة";
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const feedbackOptions = {
  colors: ["#7638ff", "#ff737b", "#fda600", "#1ec1b0"],
  chart: {
    fontFamily: "Poppins, sans-serif",
    height: 350,
    type: "donut",
  },
  series: [40, 30, 20, 10],
  labels: ["إيجابي", "محايد", "سلبي", "غير محدد"],
  legend: { show: false },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

useEffect(() => {
  const performanceColumn = document.getElementById("performance_chart");
  const performanceChart = new ApexCharts(performanceColumn, performanceOptions);
  performanceChart.render();

  const feedbackColumn = document.getElementById("feedback_chart");
  const feedbackChart = new ApexCharts(feedbackColumn, feedbackOptions);
  feedbackChart.render();

  return () => {
    performanceChart.destroy();
    feedbackChart.destroy();
  };
}, []);
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

			{/* cards new */}
      <div className="row">
      <div className="col-xl-7 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">تحليل الأداء الدراسي</h5>
              <div className="dropdown" data-bs-toggle="dropdown">
                <Link href="#" className="btn btn-white btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  شهري
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link href="#" className="dropdown-item">أسبوعي</Link>
                  <Link href="#" className="dropdown-item">شهري</Link>
                  <Link href="#" className="dropdown-item">سنوي</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
              <div className="w-md-100 d-flex align-items-center mb-3 flex-wrap">
                <div>
                  <span>عدد الطلاب المجتهدين</span>
                  <p className="h3 text-primary me-5">350</p>
                </div>
                <div>
                  <span>عدد التقارير المعلقة</span>
                  <p className="h3 text-warning me-5">45</p>
                </div>
                <div>
                  <span>عدد الطلاب المحتاجين للدعم</span>
                  <p className="h3 text-danger me-5">20</p>
                </div>
                <div className='flex'>
                  <span>عدد الطلاب الناجحين</span>
                  <p className="h3 text-success me-5">300</p>
                </div>
              </div>
            </div>

            <div id="performance_chart"></div>
          </div>
        </div>
      </div>
      <div className="col-xl-5 d-flex">
        <div className="card flex-fill">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">تحليل الملاحظات</h5>
              <div className="dropdown" data-bs-toggle="dropdown">
                <Link href="#" className="btn btn-white btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  شهري
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link href="#" className="dropdown-item">أسبوعي</Link>
                  <Link href="#" className="dropdown-item">شهري</Link>
                  <Link href="#" className="dropdown-item">سنوي</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div id="feedback_chart"></div>
            <div className="text-center text-muted">
              <div className="row">
                <div className="col-4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="fas fa-circle text-primary me-1"></i> إيجابي
                    </p>
                    <h5>600</h5>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="fas fa-circle text-warning me-1"></i> محايد
                    </p>
                    <h5>300</h5>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <i className="fas fa-circle text-danger me-1"></i> سلبي
                    </p>
                    <h5>100</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




      {/* <div className="row">
        <div className="col-md-8 col-12">
          <LineChart chartOptions={chartOptions} chartSeries={chartSeries} />
        </div>
        <div className="col-md-4 col-12">
          <DonutChart chartOptions={donutChartOptions} chartSeries={donutChartSeries} />
        </div>
      </div> */}
    </section>
  );
};

export default Dashboard;
