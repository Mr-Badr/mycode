import React from 'react';

const Breadcrumbs = () => {
  return (
    <div className="mb-2 mb-lg-0">
      <h1 className="mb-1 tajawal-bold">
        الأساتذة
        <span className="fs-5 mx-1">(12,105)</span>
      </h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="admin-dashboard.html">لوحة التحكم</a>
          </li>
          <li className="breadcrumb-item"><a href="#">User</a></li>
          <li className="breadcrumb-item active" aria-current="page">أستاذ</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
