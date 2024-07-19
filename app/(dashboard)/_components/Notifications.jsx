import React from 'react';
import Link from 'next/link';

const Notifications = () => {
  return (
    <div className="dropdown stopevent">
      <Link
        className="btn btn-light btn-icon rounded-circle indicator indicator-primary"
        href="#"
        role="button"
        id="dropdownNotification"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fe fe-bell"></i>
      </Link>
      <div
        className="dropdown-menu dropdown-menu-end dropdown-menu-lg"
        aria-labelledby="dropdownNotification"
      >
        <div>
          <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
            <span className="h4 mb-0 tajawal-medium">إشعارات</span>
            <Link href="#">
              <span className="align-middle">
                <i className="fe fe-settings me-1"></i>
              </span>
            </Link>
          </div>
          <div className="border-top px-3 pt-3 pb-0">
            <Link
              href="https://geeksui.codescandy.com/geeks-rtl/pages/notification-history.html"
              className="text-link tajawal-bold"
            >
              اطلع على جميع الإشعارات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
