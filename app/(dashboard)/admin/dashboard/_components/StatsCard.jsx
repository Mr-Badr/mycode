import React from 'react';

const StatsCard = ({ title, value, icon, trend, trendText }) => (
  <div className="card mb-4">
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
        <div>
          <span className="fs-6 text-uppercase tajawal-bold ls-md">{title}</span>
        </div>
        <div>
          <span className={`fe fe-${icon} fs-3 text-primary`}></span>
        </div>
      </div>
      <h2 className="tajawal-bold mb-1">{value}</h2>
      <span className={`text-${trend} tajawal-bold`}>
        <i className={`fe fe-trending-${trend === 'success' ? 'up' : 'down'} me-1`}></i>
        {trendText}
      </span>
      <span className="me-1 tajawal-medium">عدد {title}</span>
    </div>
  </div>
);

export default StatsCard;
