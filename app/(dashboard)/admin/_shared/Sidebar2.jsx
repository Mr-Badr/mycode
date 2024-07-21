"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from "react";
import SimpleBar from "simplebar-react";

function Navbar() {
  const pathname = usePathname()
  //console.log(pathname);
  return (
    <nav className="navbar-vertical navbar" style={{ position: "relative" }}>
      <SimpleBar>
        <div className="vh-100 simplebar-scrollable-y" data-simplebar="init">
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ left: '0px', bottom: '0px' }}>
                <div
                  className="simplebar-content-wrapper"
                  tabindex="0"
                  role="region"
                  aria-label="scrollable content"
                  style={{
                    height: '100%',
                    overflow: 'hidden scroll'
                  }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    {/*  Brand logo  */}
                    <a className="navbar-brand" href="../../index.html">
                      <img
                        src="../../assets/images/lgg.png"
                        alt=""
                      />
                    </a>
                    {/*  Navbar nav  */}
                    <ul className="navbar-nav flex-column" id="sideNavbar">
                    <li className="nav-item">
                    <Link href="/admin" className={pathname === '/admin/dashboard' ? 'nav-link active' : 'nav-link'}>
                    <i className="nav-icon fe fe-home me-2"></i>
                    لوحة التحكم
                              </Link>
                      </li>


                      {/*  Teachers  */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navProfile"
                          aria-expanded="false"
                          aria-controls="navProfile"
                        >
                          <i className="nav-icon fe fe-user me-2"></i>
                          إدارة الأساتذة
                        </a>
                        <div
                          id="navProfile"
                          className={pathname === '/admin/teachers' | pathname === "/admin/teachers/add-teacher" ? 'collapse  show ' : 'collapse'}
                          data-bs-parent="#sideNavbar"
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/teachers" className={pathname === '/admin/teachers' ? 'nav-link active' : 'nav-link'}>
                                جميع الأساتذة
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/teachers/add-teacher" className={pathname === '/admin/teachers/add-teacher' ? 'nav-link active' : 'nav-link'}>
                                إضافة أستاذ
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/*  Students  */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navlayouts"
                          aria-expanded="false"
                          aria-controls="navlayouts"
                        >
                          <i className="nav-icon fe fe-users me-2"></i>
                          إدارة الطلاب
                        </a>
                        <div
                          id="navlayouts"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/students' || pathname === '/admin/students-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/students" className={pathname === '/admin/students' ? 'nav-link active' : 'nav-link'}>
                                جميع الطلاب
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/students-add" className={pathname === '/admin/students-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة طالب
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      {/* Courses */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navCourses"
                          aria-expanded="false"
                          aria-controls="navCourses"
                        >
                          <i className="nav-icon fe fe-book me-2"></i>
                          الدورات
                        </a>
                        <div
                          id="navCourses"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/courses' || pathname === '/admin/courses-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/courses" className={pathname === '/admin/courses' ? 'nav-link active' : 'nav-link'}>
                                جميع الدورات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/courses-add" className={pathname === '/admin/courses-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة دورة جديدة
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      {/* Lessons */}
                      {/* <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navLessons"
                          aria-expanded="false"
                          aria-controls="navLessons"
                        >
                          <i className="nav-icon fe fe-clipboard me-2"></i>
                          الدروس
                        </a>
                        <div
                          id="navLessons"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/lessons' || pathname === '/admin/lessons-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/lessons" className={pathname === '/admin/lessons' ? 'nav-link active' : 'nav-link'}>
                                جميع الدروس
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/lessons-add" className={pathname === '/admin/lessons-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة درس جديدة
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li> */}

                      {/*  Ecercices  */}
                      {/* <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navexercices"
                          aria-expanded="false"
                          aria-controls="navexercices"
                        >
                          <i className="nav-icon fe fe-book-open me-2"></i>
                          التمارين
                        </a>
                        <div
                          id="navexercices"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/exercices' || pathname === '/admin/exercices-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/exercices" className={pathname === '/admin/exercices' ? 'nav-link active' : 'nav-link'}>
                                جميع التمارين
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/exercices-add" className={pathname === '/admin/exercices-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة تمرين
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li> */}
                      
                      {/*  Competitions  */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navcomp"
                          aria-expanded="false"
                          aria-controls="nacompz"
                        >
                          <i className="nav-icon fe fe-award me-2"></i>
                          المسابقات
                        </a>
                        <div
                          id="navcomp"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/competitions' || pathname === '/admin/competitions-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/competitions" className={pathname === '/admin/competitions' ? 'nav-link active' : 'nav-link'}>
                                جميع المسابقات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/competitions-add" className={pathname === '/admin/competitions-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة مسابقة
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      {/*  Quizzes  */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navquiz"
                          aria-expanded="false"
                          aria-controls="navquiz"
                        >
                          <i className="fe fe-help-circle nav-icon me-2"></i>
                          الإختبارات
                        </a>
                        <div
                          id="navquiz"
                          data-bs-parent="#sideNavbar"
                          className={pathname === '/admin/quizzes' || pathname === '/admin/quizzes-add' ? 'collapse  show ' : 'collapse'}
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/quizzes" className={pathname === '/admin/quizzes' ? 'nav-link active' : 'nav-link'}>
                                جميع الإختبارات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/quizzes-add" className={pathname === '/admin/quizzes-add' ? 'nav-link active' : 'nav-link'}>
                                إضافة إختبار
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>



                      {/*  Validations  */}
                      <li className="nav-item">
                        <a
                          className="nav-link  collapsed tajawal-medium"
                          href="#"
                          data-bs-toggle="collapse"
                          data-bs-target="#navvalid"
                          aria-expanded="false"
                          aria-controls="navvalid"
                        >
                          <i className="nav-icon fe fe-lock me-2"></i>
                          المصادقة
                        </a>
                        <div
                          id="navvalid"
                          data-bs-parent="#sideNavbar"
                          className={
                            pathname === '/admin/validations'
                              || pathname === '/admin/validations'
                              || pathname === '/admin/validations-courses'
                              || pathname === '/admin/validations-lessons'
                              || pathname === '/admin/validations-exercices'
                              || pathname === '/admin/validations-exercices-solutions'
                              || pathname === '/admin/validations-competitions'
                              ? 'collapse  show ' : 'collapse'
                          }
                        >
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <Link href="/admin/validations" className={pathname === '/admin/validations' ? 'nav-link active' : 'nav-link'}>
                                كل المصادقات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-courses" className={pathname === '/admin/validations-courses' ? 'nav-link active' : 'nav-link'}>
                                الدورات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-lessons" className={pathname === '/validations-lessons' ? 'nav-link active' : 'nav-link'}>
                                الدروس
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-competitions" className={pathname === '/admin/competitions' ? 'nav-link active' : 'nav-link'}>
                                المسابقات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-quizzes" className={pathname === '/admin/quizzes' ? 'nav-link active' : 'nav-link'}>
                                الإختبارات
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-exercices" className={pathname === '/admin/validations-exercices' ? 'nav-link active' : 'nav-link'}>
                                التمارين
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/admin/validations-exercices-solutions" className={pathname === '/admin/validations-exercices-solutions' ? 'nav-link active' : 'nav-link'}>
                                حلول التمارين
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>


                      {/*  Lives  */}
                      <li className="nav-item">
                        <Link href="/admin/lives" className={pathname === '/admin/lives' ? 'nav-link active nav-link  collapsed tajawal-medium' : 'nav-link nav-link  collapsed tajawal-medium'}>

                          <i className="nav-icon fe fe-video me-2"></i>
                          البثوث المباشرة
                        </Link>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{
                width: '250px',
                height: '1462px'
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: '0px',
                display: 'none'
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: '98px',
                transform: 'translate3d(0px, 0px, 0px)',
                display: 'block'
              }}
            ></div>
          </div>
        </div>
      </SimpleBar>
    </nav>
  );
}

export default Navbar;
