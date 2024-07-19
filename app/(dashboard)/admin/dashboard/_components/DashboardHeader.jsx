import React from 'react';
import Link from 'next/link';
import DatePicker from "./DatePicker"

const DashboardHeader = ({ sectionClassName, sectionStyle }) => (
  <div className="row">
    <div className="col-lg-12 col-md-12 col-12">
      <div className="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
        <div className="mb-3 mb-lg-0">
          <h1 className="mb-0 h2 tajawal-bold">نظرة عامة</h1>
        </div>
        <div className="d-flex">
          <DatePicker />
          <Link href="#" className="btn btn-primary tajawal-medium">
            الإعدادات
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardHeader;
