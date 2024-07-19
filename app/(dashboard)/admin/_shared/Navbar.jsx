import React from 'react';
import Link from 'next/link';
import DarkModeToggle from '../../_helpers/DarkModeToggle';
import Notifications from '../../_components/Notifications';
import UserDropdown from '../../_components/UserDropdown';

const Navbar = ({ handleToggleClick, handleShow }) => {
  return (
    <div className="header">
      <nav className="navbar-default navbar navbar-expand-lg">
        <Link id="nav-toggle" href="#" onClick={handleToggleClick}>
          <i className="fe fe-menu"></i>
        </Link>
        <div className="ms-lg-3 d-md-none d-lg-block">
          <form className="d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search"></i>
            </span>
            <input
              type="search"
              className="form-control ps-6 tajawal-medium"
              placeholder="البحث في لوحة التحكم "
            />
          </form>
        </div>
        <div className="d-flex" style={{ marginRight: "auto" }}>
          <DarkModeToggle />
          <Notifications />
          <UserDropdown handleShow={handleShow} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
