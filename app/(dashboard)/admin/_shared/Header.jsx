import DarkModeToggle from '@/components/DarkModeToggle'
import React, { useState } from 'react'
import Link from 'next/link';
import { logout } from "@/actions/logout";

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled);
  };

  const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signout = () => {
		logout();
	};
  return (
    <div className="header">
      <nav className="navbar-default navbar navbar-expand-lg">
        <Link id="nav-toggle" href="#" onClick={handleToggleClick}>
          <i className="fe fe-menu"></i>
        </Link>
        <div className="ms-lg-3 d-md-none d-lg-block">
          {/* Form */}
          <form className="d-flex align-items-center">
            <span className="position-absolute ps-3 search-icon">
              <i className="fe fe-search"></i>
            </span>
            <input
              type="search"
              className="form-control ps-6"
              placeholder="البحث في لوحة التحكم "
            />
          </form>
        </div>
        {/*Navbar nav */}
        <div className="d-flex" style={{ marginRight: "auto" }}>
          <DarkModeToggle />
          <ul className="navbar-nav navbar-right-wrap ms-2 d-flex nav-top-wrap">
            <li className="dropdown stopevent">
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
                  {/* List group */}

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
            </li>
            {/* List */}
            <li className="dropdown ms-2">
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
                    src="../../assets/images/avatar/avatar-1.jpg"
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
                        src="../../assets/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">محمد علي</h5>
                      <p className="mb-0">mohamed@gmail.com</p>
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
                    <Link className="dropdown-item" onClick={handleShow}>
                      <i className="fe fe-power me-2"></i>
                      تسجيل خروج
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Model Popup */}
			{show && <div className="fade modal-backdrop show"></div>}
			<div
				role="dialog"
				aria-modal="true"
				className={`fade modal ${show ? "show" : ""}`}
				tabIndex="-1"
				style={{ paddingRight: "17px", display: show ? "block" : "none", marginTop: "18%" }}
			>
				<div className="modal-dialog">
					<div className="modal-content text-start">
						<div className="modal-header">
							<div className="modal-title tajawal-bold">تسجيل الخروج</div>
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={handleClose}
							></button>
						</div>
						<div className="modal-body">
							<form className="">
								<div className="row">
									<div className="col-12">
										<h2>هل تريد تسجيل الخروج ؟</h2>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer" dir='ltr'>
							<button
								type="button"
								className="btn btn-secondary w-20"
								onClick={handleClose}
							>
								إغلاق
							</button>
							<button
								type="button"
								className="btn btn-danger w-20"
								onClick={signout}
							>
								تأكيد
							</button>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Header