"use client"
import React from 'react'
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


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
              <div className="col-lg-9 col-md-8 col-12">
                {/*  Card  */}
                <div className="card mb-4">
                  {/*  Card header  */}
                  <div className="card-header">
                    <h3 className="mb-0 tajawal-bold">الدورات</h3>
                    <span>إدارة الدورات التدريبية الخاصة بك وتحديثها مثل البث المباشر والمسودة والبصيرة.</span>
                  </div>
                  {/*  Card body  */}
                  <div className="card-body">
                    {/*  Form  */}
                    <form className="row gx-3">
                      <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
                        <input type="search" className="form-control" placeholder="ابحث في الدورات التدريبية الخاصة بك" />
                      </div>
                      <div className="col-lg-3 col-md-5 col-12">
                        <select className="form-select">
                          <option value="">تاريخ الإنشاء</option>
                          <option value="Newest">الأحدث</option>
                          <option value="High Rated">تقييم عالي</option>
                          <option value="Law Rated">تصنيف منخفض</option>
                          <option value="High Earned">مكاسب عالية</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  {/*  Table  */}
                  <div className="table-responsive overflow-y-hidden">
                    <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>الدورات</th>
                          <th>طلاب</th>
                          <th>تقييم</th>
                          <th>الحالة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#">
                                  <img src="../assets/images/course/course-wordpress.jpg" alt="course" className="rounded img-4by3-lg" />
                                </a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">Create a Website with WordPress</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>1h 30m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                    </svg>
                                    مبتدئ
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td>11,200</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (3,250)
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-success">بث مباشر</span>
                          </td>
                          
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#">
                                  <img src="../assets/images/course/course-node.jpg" alt="course" className="rounded img-4by3-lg" />
                                </a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">Learn Node.js - Tutorials Courses</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>3h 40m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                    </svg>
                                    متوسط
                                  </li>
                                </ul>
                                <div className="progress mt-2" style={{ height: "3px" }}>
                                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>0</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (5,300)
                            </span>
                          </td>
                          <td><span className="badge bg-info">مسودة</span></td>
                          
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#">
                                  <img src="../assets/images/course/course-laravel.jpg" alt="course" className="rounded img-4by3-lg" />
                                </a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">The Ultimate Advanced Laravel..</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>3h 40m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                    </svg>
                                    متقدم
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td>3200</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (6,380)
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-success">بث مباشر</span>
                          </td>

                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#">
                                  <img src="../assets/images/course/course-gatsby.jpg" alt="course" className="rounded img-4by3-lg" />
                                </a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">Gatsby Tutorial - Fast Website...</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>4h 10m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                    </svg>
                                    مبتدئ
                                  </li>
                                </ul>
                                <div className="progress mt-2" style={{ height: "3px" }}>
                                  <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>0</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (5,400)
                            </span>
                          </td>
                          <td><span className="badge bg-info">مسودة</span></td>

                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#"><img src="../assets/images/course/course-sass.jpg" alt="course" className="rounded img-4by3-lg" /></a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">Learn SCSS-Lang Courses - Basic</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>2h 59m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
                                    </svg>
                                    متقدم
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td>0</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (7,800)
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-warning">قيد الانتظار</span>
                          </td>

                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <a href="#"><img src="../assets/images/course/course-gatsby.jpg" alt="course" className="rounded img-4by3-lg" /></a>
                              </div>
                              <div className="ms-3">
                                <h4 className="mb-1 h5">
                                  <a href="#" className="text-inherit">Gatsby Tutorial - Fast Website</a>
                                </h4>
                                <ul className="list-inline fs-6 mb-0">
                                  <li className="list-inline-item">
                                    <span className="align-text-bottom">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                      </svg>
                                    </span>
                                    <span>4h 10m</span>
                                  </li>
                                  <li className="list-inline-item">
                                    <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                    </svg>
                                    مبتدئ
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td>23</td>
                          <td>
                            <span className="lh-1">
                              <span className="text-warning">4.5</span>
                              <span className="mx-1 align-text-top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                  </path></svg>
                              </span>
                              (9,200)
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-danger">تم الحذف</span>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default page