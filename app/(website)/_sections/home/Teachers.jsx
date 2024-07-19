import React from 'react';

const Teachers = () => {
  return (
    <section className="py-6 py-lg-8 bg-white" dir='rtl'>
      <div className="container py-lg-6">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="text-center mb-6 d-flex flex-column gap-2">
              <h1 className="mb-0 mx-xl-8">أكثر من 1600 أستاذ على بعد في جلسة تجريبية 
              <u className="text-warning mx-2 tajawal-bold"><span className="text-primary">مجانية</span></u>
              </h1>
              <p className="mb-0">اختر الأستاذ المثالي وابدأ بجلسة تجريبية مجانية</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="d-flex flex-md-row gap-2 flex-column justify-content-between">
              <form>
                <label htmlFor="mentorInputSearch" className="form-label visually-hidden">بحث</label>
                <input type="search" className="form-control" id="mentorInputSearch" placeholder="البحث عن أستاذ" dir='rtl'/>
              </form>
              <div className="d-grid d-md-flex">
                <a href="#" className="btn btn-primary">استكشاف جميع الأساتذة</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/1.jpg" alt="الأستاذ 1" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset">العربي بن مهيدي </a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">مهندس برمجيات</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ مايكروسوفت</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>5 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">5.0</span>
                        <span>(12 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 25.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <div className="position-relative">
                  <a href="#">
                    <img src="../../../assets/images/teachers/2.jpg" alt="الأستاذ 2" className="img-fluid w-100 rounded-3" />
                  </a>
                  <div className="position-absolute bottom-0 left-0 p-3">
                    <span className="badge text-bg-success">أستاذ جديد</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> محمد زعموم</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">مصمم واجهات مستخدم</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ أبل</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>3 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.5</span>
                        <span>(8 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 30.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/3.jpg" alt="الأستاذ 3" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> مصطفى مراردة</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">مديرة تسويق</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ جوجل</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>7 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.8</span>
                        <span>(10 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 20.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/4.jpg" alt="الأستاذ 4" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> عمر إدريس</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">مستشار مالي</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ أمازون</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>5 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.9</span>
                        <span>(15 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 35.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/5.jpg" alt="الأستاذ 5" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> مريم بوعتورة</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">خبير تحليل البيانات</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ مايكروسوفت</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>6 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.7</span>
                        <span>(12 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 25.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/6.jpg" alt="الأستاذ 6" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> كريم بلقاسم</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">خبيرة تسويق رقمي</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ جوجل</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>7 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.8</span>
                        <span>(18 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 40.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/7.jpg" alt="الأستاذ 6" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> مراد ديدوش</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">خبيرة تسويق رقمي</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ جوجل</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>7 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.8</span>
                        <span>(18 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 40.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6 col-12">
            <div className="card rounded-3 card-bordered card-lift">
              <div className="p-3 d-flex flex-column gap-3">
                <a href="#">
                  <img src="../../../assets/images/teachers/8.jpg" alt="الأستاذ 6" className="img-fluid w-100 rounded-3" />
                </a>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h3 className="mb-0">
                          <a href="../mentor/mentor-single.html" className="text-reset"> أحمد بن الشريف</a>
                        </h3>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                          </svg>
                        </span>
                      </div>
                      <span className="text-gray-800">خبيرة تسويق رقمي</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fs-6">
                      <div>
                        <span>@ جوجل</span>
                        <div className="vr mx-2 text-gray-200"></div>
                        <span>7 سنوات خبرة</span>
                      </div>
                      <div className="d-flex gap-1 align-items-center lh-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <span className="fw-bold text-dark">4.8</span>
                        <span>(18 مراجعة)</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                      <span>تبدأ من</span>
                      <div className="d-flex flex-row gap-1 align-items-center">
                        <h4 className="mb-0"> دينار 40.00</h4>
                        <span className="fs-6">/ شهر</span>
                      </div>
                    </div>
                    <div>
                      <a href="/formations/formations-single" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">حجز جلسة تجريبية</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Teachers