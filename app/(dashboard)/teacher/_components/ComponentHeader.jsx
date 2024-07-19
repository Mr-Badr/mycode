import Link from "next/link";
import React from "react";

function ComponentHeader() {
  return (
    <div className="row align-items-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        {/*  Bg  */}
        <div
          className="rounded-top"
          style={{
            background: 'rgb(0,212,255)',
            backgroundImage: 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(5,137,181,1) 100%, rgba(0,212,255,1) 100%)',
            height: "100px",
          }}
        ></div>
        <div className="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                <img
                  src="../assets/images/avatar/avatar-1.jpg"
                  className="avatar-xl rounded-circle border border-4 border-white position-relative"
                  alt="avatar"
                />
                <Link
                  href="#"
                  className="position-absolute top-0 end-0"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Verified"
                >
                  <img
                    src="../assets/images/svg/checked-mark.svg"
                    alt="checked"
                    height="30"
                    width="30"
                  />
                </Link>
              </div>
              <div className="lh-1">
                <h2 className="mb-0 tajawal-bold">محمد</h2>
                <p className="mb-0 d-block">@محمد</p>
              </div>
            </div>
            <div>
              <Link
                href="/teacher/profile-edit"
                className="btn btn-sm btn-outline-primary d-none d-md-block"
              >
                إعدادات الحساب
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentHeader;
