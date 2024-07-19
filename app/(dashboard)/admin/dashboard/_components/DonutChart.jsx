import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ chartOptions, chartSeries }) => (
  <div className="card mb-4 flex-grow-1">
    <div className="card-header align-items-center card-header-height d-flex justify-content-between align-items-center">
      <div>
        <h4 className="mb-0 tajawal-bold">المنخرطين</h4>
      </div>
      <div>
        <div className="dropdown dropstart">
          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fe fe-more-vertical"></i>
          </a>
          <div className="dropdown-menu" aria-labelledby="courseDropdown1">
            <span className="dropdown-header">الإعدادات</span>
            <a className="dropdown-item" href="#">
              <i className="fe fe-external-link dropdown-item-icon"></i>
              Export
            </a>
            <a className="dropdown-item" href="#">
              <i className="fe fe-mail dropdown-item-icon"></i>
              Email Report
            </a>
            <a className="dropdown-item" href="#">
              <i className="fe fe-download dropdown-item-icon"></i>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div id="chart">
        <ReactApexChart options={chartOptions} series={chartSeries} type="donut" height={300} />
      </div>
    </div>
  </div>
);

export default DonutChart;
