"use client"
import React from "react";
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


function page() {
  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
        <div className="container-fluid p-4" style={{maxWidth: "75%"}}>
            <ComponentHeader />

            {/* My Section */}
            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              
                <div className="row col-lg-9 col-md-8 col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="mb-0 tajawal-bold">Files</h4>
                    </div>
                    <div className="p-0 card-body">
                      <div className=" overflow-hidden">
                        <div className="row">
                          <div className="mb-lg-0 mb-2 py-4 px-5  col-lg-12 col-md-12 col-sm-12">
                            <input
                              type="search"
                              className="form-control"
                              placeholder="Search Filename"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-0 overflow-y-hidden">
                        <div className="table-responsive">
                          <table className="text-nowrap table-centered table table-hover">
                            <thead className="table-light">
                              <tr>
                                <th>Name</th>
                                <th>File Size</th>
                                <th>Modified</th>
                                <th>Uploaded By</th>
                                <th>Options</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-primary">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-primary"
                                        >
                                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Admin-Dashboard-Design.xlsx
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>2.3MB</td>
                                <td>27 Sept, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-info">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-info"
                                        >
                                          <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Admin-Dashboard-Design.jpeg
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>10MB</td>
                                <td>29 Sept, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-success">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-success"
                                        >
                                          <path d="M4.879 4.515a.5.5 0 0 1 .606.364l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 7.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 0 1 .364-.606z"></path>
                                          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks UI Description.doc
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>45MB</td>
                                <td>01 Oct, 2021</td>
                                <td>
                                  <span className="avatar avatar-sm avatar-primary me-0 mb-2 mb-lg-0 ">
                                    <span className="avatar-initials bg-primary rounded-circle bg-primary">
                                      JW
                                    </span>
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-danger">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-danger"
                                        >
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                                          <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks-UI-Marketing-Process.ppt
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>122MB</td>
                                <td>04 Oct, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-warning">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-warning"
                                        >
                                          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks-UI-Marketing-Process.txt
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>43.5MB</td>
                                <td>06 Oct, 2021</td>
                                <td>
                                  <span className="avatar avatar-sm avatar-primary me-0 mb-2 mb-lg-0 ">
                                    <span className="avatar-initials bg-primary rounded-circle bg-primary">
                                      NS
                                    </span>
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-danger">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-danger"
                                        >
                                          <path d="M5 6a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 11h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V11h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 6H5zm2 3.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z"></path>
                                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks-UI-promo-trailer-template.mov
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>115MB</td>
                                <td>08 Oct, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-primary">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-primary"
                                        >
                                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Earning-from-Dashboard.xlsx
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>55MB</td>
                                <td>12 Oct, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-danger">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-danger"
                                        >
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                                          <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks-UI-Marketing-Process.ppt
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>122MB</td>
                                <td>04 Oct, 2021</td>
                                <td>
                                  <span className="avatar avatar-sm avatar-primary me-0 mb-2 mb-lg-0 ">
                                    <span className="avatar-initials bg-primary rounded-circle bg-danger">
                                      DS
                                    </span>
                                  </span>
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-warning">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-warning"
                                        >
                                          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Geeks-UI-Marketing-Process.txt
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>43.5MB</td>
                                <td>06 Oct, 2021</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="icon-shape icon-lg rounded-3 bg-light-info">
                                      <a href="/dashboard/projects/single/files">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          width="24"
                                          height="24"
                                          fill="currentColor"
                                          className="text-info"
                                        >
                                          <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="mb-0 tajawal-bold">
                                        <a
                                          href="/dashboard/projects/single/files"
                                          className="text-inherit"
                                        >
                                          Admin-Dashboard-Design.jpeg
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </td>
                                <td>10MB</td>
                                <td>16 Nov, 2020</td>
                                <td>
                                  <img
                                    src="../assets/images/avatar/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar avatar-sm"
                                  />
                                </td>
                                <td>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover"
                                  >
                                    <i className="fe fe-download fs-5"></i>
                                  </a>
                                  <a
                                    href="/dashboard/projects/single/files"
                                    className="text-muted text-primary-hover ms-3"
                                  >
                                    <i className="fe fe-link fs-5"></i>
                                  </a>
                                </td>
                                
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="pb-5">
                            <nav>
                              <ul className="justify-content-center mb-0 pagination">
                                <li className="disabled page-item">
                                  <button
                                    type="button"
                                    disabled=""
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    <i className="fe fe-chevron-left"></i>
                                  </button>
                                </li>
                                <li className="active page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    1
                                  </button>
                                </li>
                                <li className="page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    2
                                  </button>
                                </li>
                                <li className="page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    3
                                  </button>
                                </li>
                                <li className="page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    <i className="fe fe-chevron-right"></i>
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
