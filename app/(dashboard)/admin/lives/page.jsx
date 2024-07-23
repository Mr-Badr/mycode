"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

function Lives() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
  const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};

  return (
    <section className={sectionClassName} style={sectionStyle}>

      <div className="row justify-content-md-between mb-4 mb-xl-0">
        {/*  col  */}
        <div className="col-xl-2 col-lg-4 col-md-6 col-12">
          {/*  search  */}
          <div className="mb-2 mb-lg-4">
            <input type="search" className="form-control" placeholder="البحث بواسطة عنوان البث" />
          </div>
        </div>
        <div className="col-xxl-2 col-lg-4 col-md-6 col-12">
          {/*  Custom select  */}
          <select className="form-select">
            <option value="">البحث حسب حالة البث</option>
            <option value="مباشر الآن">مباشر الآن</option>
            <option value="انتظار">انتظار</option>
            <option value="انتهى">انتهى</option>
            <option value="محذوف">محذوف</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div>
                  <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة الرياضيات</a></h4>
                  <span className="fs-6">شعبة علوم فيزيائية</span>
                </div>
                {/*  dropdown */}
                <div className="d-flex align-items-center">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectOne" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectOne">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-3 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>
              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    {/*  avatar  */}
                    <span className="avatar avatar-md">
                      {/*  img  */}
                      <img alt="avatar" src="../../assets/images/avatar/avatar-1.jpg" className="rounded-circle imgtooltip" data-template="one " />
                      <span id="one" className="d-none">
                        <small className="fw-semibold">Paul Haney</small>
                      </span>
                    </span>
                    {/*  avatar  */}
                    <span className="avatar avatar-md">
                      {/*  img  */}
                      <img alt="avatar" src="../../assets/images/avatar/avatar-2.jpg" className="rounded-circle imgtooltip" data-template="two " />
                      <span id="two" className="d-none">
                        <small className="fw-semibold">Gali Linear</small>
                      </span>
                    </span>
                    {/*  avatar  */}
                    <span className="avatar avatar-md">
                      {/*  img  */}
                      <img alt="avatar" src="../../assets/images/avatar/avatar-3.jpg" className="rounded-circle imgtooltip" data-template="three " />
                      <span id="three" className="d-none">
                        <small className="fw-semibold">Mary Holler</small>
                      </span>
                    </span>
                    {/*  avatar  */}
                    <span className="avatar avatar-md">
                      {/*  img  */}
                      <img alt="avatar" src="../../assets/images/avatar/avatar-4.jpg" className="rounded-circle imgtooltip" data-template="nordl" />
                      <span id="nordl" className="d-none">
                        <small className="fw-semibold">Lio Nordal</small>
                      </span>
                    </span>
                    {/*  avatar  */}
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">5+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-info-soft">مباشر الآن</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}
                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                    <span>45%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">1 Jan, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$1,23,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}
                <div>
                  <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة العلوم الفيزيائية</a></h4>
                  <span className="fs-6">شعبة علوم رياضية</span>
                </div>
                {/*  dropdown */}
                <div className="d-flex align-items-center">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectTwo" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectTwo">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-3 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-5.jpg" className="rounded-circle imgtooltip" data-template="four " />
                      <span id="four" className="d-none">
                        <small className="fw-semibold">Gilbert Farr</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md avatar-primary imgtooltip" data-template="textOne">
                      <span className="avatar-initials rounded-circle h6">GK</span>

                      <span id="textOne" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>

                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-6.jpg" className="rounded-circle imgtooltip" data-template="five " />
                      <span id="five" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>

                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">6+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-danger-soft">محذوف</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: "12%" }} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">
                    <span>12%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">-</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div>
                  <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة التربية الفنية</a></h4>
                  <span className="fs-6">Front End Development</span>
                </div>
                {/*  dropdown */}
                <div className="d-flex align-items-center">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectThree" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectThree">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-3 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md avatar-info imgtooltip" data-template="textTwo">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textTwo" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-9.jpg" className="rounded-circle imgtooltip" data-template="eight " />
                      <span id="eight" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-10.jpg" className="rounded-circle imgtooltip" data-template="nine " />
                      <span id="nine" className="d-none">
                        <small className="fw-semibold">Jamie Lusar</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">3+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-success-soft">انتهى</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">1 Sept, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$5,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}
                <div>
                  <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة العلوم الفيزيائية</a></h4>
                  <span className="fs-6">شعبة علوم رياضية</span>
                </div>
                {/*  dropdown */}
                <div className="d-flex align-items-center">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectEight" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectEight">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-3 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-5.jpg" className="rounded-circle imgtooltip" data-template="eighTeen " />
                      <span id="eighTeen" className="d-none">
                        <small className="fw-semibold">Gilbert Farr</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md avatar-primary imgtooltip" data-template="textTen">
                      <span className="avatar-initials rounded-circle fs-6">GK</span>

                      <span id="textTen" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>

                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-6.jpg" className="rounded-circle imgtooltip" data-template="nineTeen " />
                      <span id="nineTeen" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>

                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">6+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-info-soft">مباشر الآن</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">22 Sept, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$400</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div className="d-flex align-items-center">
                  <div className="icon-shape icon-lg rounded-3 border p-4">
                    <i className="fe fe-clipboard fs-3"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة الإقصاد</a></h4>
                    <span className="fs-6">شعبة علوم فيزيائية</span>
                  </div>
                </div>
                {/*  dropdown */}
                <div className="d-flex">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectFour" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectFour">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-4 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md avatar-warning imgtooltip" data-template="textFour">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textFour" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-12.jpg" className="rounded-circle imgtooltip" data-template="eleven " />
                      <span id="eleven" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-13.jpg" className="rounded-circle imgtooltip" data-template="twelve " />
                      <span id="twelve" className="d-none">
                        <small className="fw-semibold">Jamie Lusar</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">2+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-info-soft">مباشر الآن</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="85">
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">25 Jan, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div className="d-flex align-items-center">
                  <div className="icon-shape icon-lg rounded-3 border p-4">
                    <i className="fe fe-message-square fs-3"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة التربية الإسلامية</a></h4>
                    <span className="fs-6">شعبة علوم فيزيائية</span>
                  </div>
                </div>
                {/*  dropdown */}
                <div className="d-flex">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectFive" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectFive">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-4 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-12.jpg" className="rounded-circle imgtooltip" data-template="thirteen " />
                      <span id="thirteen" className="d-none">
                        <small className="fw-semibold">Gilbert Farr</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-13.jpg" className="rounded-circle imgtooltip" data-template="fourteen " />
                      <span id="fourteen" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md avatar-success imgtooltip" data-template="textThree">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textThree" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">4+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-warning-soft">انتظار</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="95">
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">30 May, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div className="d-flex align-items-center">
                  <div className="icon-shape icon-lg rounded-3 border p-4">
                    <i className="fe fe-shopping-cart fs-3"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة التجارة</a></h4>
                    <span className="fs-6">شعبة علوم رياضية</span>
                  </div>
                </div>
                {/*  dropdown */}
                <div className="d-flex">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectSix" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectSix">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-4 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-15.jpg" className="rounded-circle imgtooltip" data-template="sixteen " />
                      <span id="sixteen" className="d-none">
                        <small className="fw-semibold">Gilbert Farr</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md avatar-danger imgtooltip" data-template="textFive">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textFive" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-17.jpg" className="rounded-circle imgtooltip" data-template="eighteen " />
                      <span id="eighteen" className="d-none">
                        <small className="fw-semibold">Jamie Lusar</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">5+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-success-soft">انتهى</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">31 June, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$2,53,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}
              <div className="d-flex align-items-center justify-content-between">
                {/*  text */}

                <div className="d-flex align-items-center">
                  <div className="icon-shape icon-lg rounded-3 border p-4">
                    <i className="fe fe-message-square fs-3"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة التربية الإسلامية</a></h4>
                    <span className="fs-6">شعبة علوم فيزيائية</span>
                  </div>
                </div>
                {/*  dropdown */}
                <div className="d-flex">
                  <div className="dropdown dropstart">
                    <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectEleven" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownProjectEleven">
                      <span className="dropdown-header">Settings</span>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-edit dropdown-item-icon"></i>
                        Edit Details
                      </a>

                      <a className="dropdown-item" href="#">
                        <i className="fe fe-link dropdown-item-icon"></i>
                        Copy project link
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-save dropdown-item-icon"></i>
                        Save as Default
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-copy dropdown-item-icon"></i>
                        Duplicate
                      </a>

                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-upload dropdown-item-icon"></i>
                        Import
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-printer dropdown-item-icon"></i>
                        Export / Print
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-users dropdown-item-icon"></i>
                        Move to another team
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-archive dropdown-item-icon"></i>
                        Archive
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-trash dropdown-item-icon"></i>
                        Delete Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*  para */}
              <div className="mt-4 mb-4">
                <p className="mb-0">هذا البث المباشر يتم تدريسه بواسطة الأستاذ محمحد الخاص بالسنة الثالثة ثانوي</p>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-12.jpg" className="rounded-circle imgtooltip" data-template="twenty " />
                      <span id="twenty" className="d-none">
                        <small className="fw-semibold">Gilbert Farr</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-13.jpg" className="rounded-circle imgtooltip" data-template="twentyone " />
                      <span id="twentyone" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md avatar-success imgtooltip" data-template="textTwelve">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textTwelve" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">4+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-warning-soft">انتظار</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="95">
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">30 May, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$800</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4">
          {/*  card  */}
          <div className="card h-100">
            <img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/background/project-cover-img.jpg" alt="" className="img-fluid rounded-top" />
            <div className="d-flex position-absolute end-0 pe-3 pt-3">
              <div className="dropdown dropstart">
                <a href="#" className="btn-icon btn btn-ghost btn-sm rounded-circle" id="dropdownProjectTen" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-three-dots-vertical"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownProjectTen">
                  <span className="dropdown-header">Settings</span>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-edit dropdown-item-icon"></i>
                    Edit Details
                  </a>

                  <a className="dropdown-item" href="#">
                    <i className="fe fe-link dropdown-item-icon"></i>
                    Copy project link
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-save dropdown-item-icon"></i>
                    Save as Default
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-copy dropdown-item-icon"></i>
                    Duplicate
                  </a>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-upload dropdown-item-icon"></i>
                    Import
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-printer dropdown-item-icon"></i>
                    Export / Print
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-users dropdown-item-icon"></i>
                    Move to another team
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-archive dropdown-item-icon"></i>
                    Archive
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fe fe-trash dropdown-item-icon"></i>
                    Delete Project
                  </a>
                </div>
              </div>
            </div>
            {/*  card body  */}
            <div className="card-body">
              {/*  heading */}

              {/*  text */}

              <div className="mb-4">
                <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة التربية الفنية</a></h4>
                <span className="fs-6">Front End Development</span>
              </div>

              {/*  progress  */}
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  {/*  avatar group  */}
                  <div className="avatar-group">
                    <span className="avatar avatar-md avatar-success imgtooltip" data-template="textThirteen">
                      <span className="avatar-initials rounded-circle">GK</span>

                      <span id="textThirteen" className="d-none">
                        <small className="fw-semibold">Geeks Only</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-13.jpg" className="rounded-circle imgtooltip" data-template="fifteen " />
                      <span id="fifteen" className="d-none">
                        <small className="fw-semibold">Charlie Holland</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <img alt="avatar" src="../../assets/images/avatar/avatar-14.jpg" className="rounded-circle imgtooltip" data-template="seventeen " />
                      <span id="seventeen" className="d-none">
                        <small className="fw-semibold">Jamie Lusar</small>
                      </span>
                    </span>
                    <span className="avatar avatar-md">
                      <span className="avatar-initials rounded-circle bg-light text-dark">9+</span>
                    </span>
                  </div>
                </div>
                {/*  text  */}
                <div>
                  <span className="badge bg-success-soft">انتهى</span>
                </div>
              </div>
              <div>
                {/*  progress bar  */}

                <div className="progress progress-tooltip" style={{ height: "6px" }}>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  card footer  */}
            <div className="card-footer p-0">
              <div className="d-flex justify-content-between">
                <div className="w-50 py-3 px-4">
                  <h6 className="mb-0">التاريخ:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">1 Sept, 2022</p>
                </div>
                <div className="border-start w-50 py-3 px-4">
                  <h6 className="mb-0">السعر:</h6>
                  <p className="text-dark fs-6 fw-semibold mb-0">$5,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Card */}
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-4 cursor-pointer" onClick={handleShow}>
          <div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <i className="fe fe-plus text-secondary mb-3 fs-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

			{/* Model Popup */}
			{show && <div className="fade modal-backdrop show"></div>}
			<div role="dialog" aria-modal="true" className={`fade modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
				<div style={{
					width: "auto",
					margin: "1.75rem",
					transform: "none",
					transition: "transform .3s ease-out",
					marginLeft: "auto",
					marginRight: "auto",
					pointerEvents: "none",
					position: "relative",
					maxWidth: "1000px",
					paddingTop: "8%"
				}}>
					<div className="modal-content">
						<div className="modal-header">
							<div className="modal-title tajawal-bold"> إنشاء بث مباشر</div>
							<button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
						</div>
						<div className="modal-body">
							<form className="">
								<div className="row">
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">المحاضر </label>
										<input
											placeholder="المحاضر "
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">التاريخ </label>
										<div className="input-group">
											<input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readonly="" type="text" style={{
												borderRadius: "0px 5px 5px 0px"
											}} />
											<span className="input-group-text" id="basic-addon2" style={{
												borderRadius: "5px 0px 0px 5px"
											}}>
												<i className="fe fe-calendar"></i>
											</span>
										</div>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label"> المادة</label>
										<select className="form-select">
											<option value="public">الرياضيات</option>
											<option value="private">الإنجليزية</option>
										</select>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label"> رابط البث</label>
										<input
											placeholder="أدخل رابط البث (مثال: https://example.com)" 
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>

									<div className="mb-3 col-lg-12 col-md-12">
										<label className="form-label">الوصف </label>
										<textarea
											placeholder="الوصف الكامل"
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer" dir='ltr'>
							<button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إغلاق</button>
							<button type="button" className="btn btn-primary w-20" onClick={handleClose}>إنشاء</button>
						</div>
					</div>
				</div>
			</div>


    </section>
  )
}

export default Lives