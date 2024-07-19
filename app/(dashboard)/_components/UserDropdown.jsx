import React from 'react';
import Link from 'next/link';

const UserDropdown = ({ handleShow }) => {
  const user = {
    name: "Badr",
    email: "test@gmail.com"
  };

  return (
    <div className="dropdown ms-2">
      <Link
        className="rounded-circle"
        href="#"
        role="button"
        id="dropdownUser"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar avatar-md avatar-indicators avatar-online">
          <img
            alt="avatar"
            src="../../assets/images/avatar/avatar-8.jpg"
            className="rounded-circle"
          />
        </div>
      </Link>
      <div
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownUser"
      >
        <div className="dropdown-item">
          <div className="d-flex">
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <img
                alt="avatar"
                src="../../assets/images/avatar/avatar-8.jpg"
                className="rounded-circle"
              />
            </div>
            <div className="ms-3 lh-1">
              <h5 className="mb-1">{user?.name}</h5>
              <p className="mb-0">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <ul className="list-unstyled">
          <li className="dropdown-submenu dropstart-lg">
            <Link
              className="dropdown-item dropdown-list-group-item dropdown-toggle"
              href="#"
            >
              <i className="fe fe-circle me-2"></i>
              Status
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  <span className="badge-dot bg-success me-2"></span>
                  Online
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  <span className="badge-dot bg-secondary me-2"></span>
                  Offline
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  <span className="badge-dot bg-warning me-2"></span>
                  Away
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  <span className="badge-dot bg-danger me-2"></span>
                  Busy
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="../profile-edit.html"
            >
              <i className="fe fe-user me-2"></i>
              Profile
            </a>
          </li>
          <li>
            <Link
              className="dropdown-item"
              href="../student-subscriptions.html"
            >
              <i className="fe fe-star me-2"></i>
              Subscription
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              <i className="fe fe-settings me-2"></i>
              Settings
            </Link>
          </li>
        </ul>
        <div className="dropdown-divider"></div>
        <ul className="list-unstyled">
          <li>
            <Link className="dropdown-item" href='#' onClick={handleShow}>
              <i className="fe fe-power me-2"></i>
              تسجيل خروج
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
