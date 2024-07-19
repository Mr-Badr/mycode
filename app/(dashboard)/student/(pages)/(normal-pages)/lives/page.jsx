"use client"
import React, { useState } from 'react'
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


function Page() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sectionClassName = show ? "bg-white modal-open" : "";
  const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};

  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
        <div className="container-fluid p-4" style={{maxWidth: "75%"}}>
            <ComponentHeader />

            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              {/* My Section */}
              <div className='col-lg-9 col-md-8 col-12'>
                <section className={sectionClassName} style={sectionStyle}>

                  <div className="row justify-content-md-between mb-4 mb-xl-0">
                    {/*  col  */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                      {/*  search  */}
                      <div className="mb-2 mb-lg-4">
                        <input type="search" className="form-control" placeholder="البحث بواسطة عنوان البث" />
                      </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-md-6 col-12">
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
                    <div className="col-xxl-6 col-xl-4 col-lg-6 col-12 mb-4">
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
                    <div className="col-xxl-6 col-xl-4 col-lg-6 col-12 mb-4">
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
                    <div className="col-xxl-6 col-xl-4 col-lg-6 col-12 mb-4">
                      {/*  card  */}
                      <div className="card h-100">
                        {/*  card body  */}
                        <div className="card-body">
                          {/*  heading */}
                          <div className="d-flex align-items-center justify-content-between">
                            {/*  text */}

                            <div>
                              <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مادة الفلسفة</a></h4>
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
                    <div className="col-xxl-6 col-xl-4 col-lg-6 col-12 mb-4">
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


                    <div className="col-xxl-6 col-xl-4 col-lg-6 col-12 mb-4">
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
                            <h4 className="mb-0 tajawal-bold"><a href="#" className="text-inherit">مسابقاتي</a></h4>
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

                  </div>

                </section></div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Page