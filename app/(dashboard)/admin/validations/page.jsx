import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token



function Validations() {
  return (
    <div className='container-fluid p-4'>
      <div className="row">

        {/* Div 1 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                الدروس</h4>
              <a className="btn btn-outline-secondary btn-sm" href="/admin/validations-courses">
                مشاهدة الكل
                </a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <div className="avatar avatar-md avatar-indicators avatar-offline">
                        <img src="../../../../assets/images/avatar/avatar-1.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </div>
                    </div>
                    <div className="ms-n3 col">
                      <h4 className="mb-0 h5">
                        Jenny Wilson</h4>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          6</span>
                        Courses</span>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          50,274</span>
                        Students</span>
                        <span className="fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          11,230</span>
                        Reviews</span>
                    </div>
                    <div className="col-auto">
                      <div>

                        {/* Bottons */}
        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <div className="avatar avatar-md avatar-indicators avatar-online">
                        <img src="../../../../assets/images/avatar/avatar-2.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </div>
                    </div>
                    <div className="ms-n3 col">
                      <h4 className="mb-0 h5">
                        Dianna Smiley</h4>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          3</span>
                        Courses</span>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          26,060</span>
                        Students</span>
                      <span className="fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          11,230</span>
                        Reviews</span>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <div className="avatar avatar-md avatar-indicators avatar-away">
                        <img src="../../../../assets/images/avatar/avatar-3.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </div>
                    </div>
                    <div className="ms-n3 col">
                      <h4 className="mb-0 h5">
                        Nia Sikhone</h4>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          12</span>
                        Courses</span>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          8,234</span>
                        Students</span>
                      <span className="fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          10,230</span>
                        Reviews</span>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <div className="avatar avatar-md avatar-indicators avatar-info">
                        <img src="../../../../assets/images/avatar/avatar-4.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </div>
                    </div>
                    <div className="ms-n3 col">
                      <h4 className="mb-0 h5">
                        Jacob Jones</h4>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          2</span>
                        Courses</span>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          8,234</span>
                        Students</span>
                      <span className="fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          2,230</span>
                        Reviews</span>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <div className="avatar avatar-md avatar-indicators avatar-busy">
                        <img src="../../../../assets/images/avatar/avatar-5.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </div>
                    </div>
                    <div className="ms-n3 col">
                      <h4 className="mb-0 h5">
                        Kristin Watson</h4>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          1</span>
                        Courses</span>
                      <span className="me-2 fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          14,944</span>
                        Students</span>
                      <span className="fs-6">
                        <span className="text-dark  me-1 fw-semi-bold">
                          1,230</span>
                        Reviews</span>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div 2 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                التمارين</h4>
              <a className="btn btn-outline-secondary btn-sm" href="/dashboard/validations-exercices">
                مشاهدة الكل</a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="">
                        <img src="../../../../assets/images/avatar/avatar-12.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Revolutionize how you build the web</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Jenny Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        {/* Bottons */}
                        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-2.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Guide to Static Sites with Gatsby</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Brooklyn Simmons</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-4.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          The Modern HTML Courses</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Miston Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-3.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Courses JavaScript Heading Title</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Guy Hawkins</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div 3 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                حلول التمارين</h4>
              <a className="btn btn-outline-secondary btn-sm" href="/dashboard/validations-exercices-solutions">
                مشاهدة الكل</a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="">
                        <img src="../../../../assets/images/avatar/avatar-5.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Revolutionize how you build the web</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Jenny Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        {/* Bottons */}
                        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-7.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Guide to Static Sites with Gatsby</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Brooklyn Simmons</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-8.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          The Modern HTML Courses</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Miston Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-9.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Courses JavaScript Heading Title</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Guy Hawkins</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div 4 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                  الدورات</h4>
              <a className="btn btn-outline-secondary btn-sm" href="/dashboard/validations-lessons">
                مشاهدة الكل</a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="">
                        <img src="../../../../assets/images/avatar/avatar-14.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Revolutionize how you build the web</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Jenny Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        {/* Bottons */}
                        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-12.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Guide to Static Sites with Gatsby</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Brooklyn Simmons</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-13.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          The Modern HTML Courses</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Miston Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-10.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Courses JavaScript Heading Title</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Guy Hawkins</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div 4 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                  المسابقات</h4>
              <a className="btn btn-outline-secondary btn-sm" href="/dashboard/validations-competitions">
                مشاهدة الكل</a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="">
                        <img src="../../../../assets/images/avatar/avatar-9.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Revolutionize how you build the web</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Jenny Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        {/* Bottons */}
                        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-2.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Guide to Static Sites with Gatsby</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Brooklyn Simmons</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-7.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          The Modern HTML Courses</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Miston Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-4.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Courses JavaScript Heading Title</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Guy Hawkins</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Div 5 */}
        <div className="mb-4 col-xl-6 col-lg-6 col-md-6">
          <div className="h-100 card">
            <div className="d-flex align-items-center justify-content-between card-header-height card-header">
              <h4 className="mb-0 tajawal-bold">
                  الإختبارات
                  </h4>
              <a className="btn btn-outline-secondary btn-sm" href="/dashboard/validations-quizzes">
                مشاهدة الكل
                </a>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                <div className="px-0 pt-0 list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="">
                        <img src="../../../../assets/images/avatar/avatar-9.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Revolutionize how you build the web</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Jenny Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        {/* Bottons */}
                        <button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
        <button type="button" className="btn btn-danger btn-sm">رفض</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-2.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Guide to Static Sites with Gatsby</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Brooklyn Simmons</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-7.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          The Modern HTML Courses</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Miston Wilson</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-0  list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <a href="/dashboard/overview">
                        <img src="../../../../assets/images/avatar/avatar-4.jpg" alt="" className="img-fluid rounded" style={{ width: "3.5rem" }} />
                      </a>
                    </div>
                    <div className="ps-0 col">
                      <a href="/dashboard/overview">
                        <h5 className="text-primary-hover">
                          Courses JavaScript Heading Title</h5>
                      </a>
                      <div className="d-flex align-items-center">
                        <span className="fs-6">
                          Guy Hawkins</span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div>
                        <div className="dropdown">
                          <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="/dashboard/overview">
                            <i className="fe fe-more-vertical text-muted">
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Validations