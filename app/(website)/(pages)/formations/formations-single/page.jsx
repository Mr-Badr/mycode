"use client"
import React, { useState } from 'react'
import { Fragment } from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";

function Page() {
  const [activeTab, setActiveTab] = useState('table');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const courses = [
    {
      id: 1,
      title: 'مقدمة في الرياضيات',
      lessons: [
        { id: 1, title: 'مقدمة', duration: '1m 7s' },
        { id: 2, title: 'الدوال الخطية', duration: '3m 11s' },
        { id: 3, title: 'الأعداد الصحيحة', duration: '2m 45s' },
        { id: 4, title: 'الجبر', duration: '4m 18s' },
        { id: 5, title: 'الهندسة الفراغية', duration: '3m 56s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 2,
      title: 'الرياضيات الأساسية',
      lessons: [
        { id: 1, title: 'مقدمة', duration: '1m 41s' },
        { id: 2, title: 'الأعداد الكسرية', duration: '3m 39s' },
        { id: 3, title: 'الأعداد العشرية', duration: '2m 55s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 3,
      title: 'الجبر والهندسة الإفتراضية',
      lessons: [
        { id: 1, title: 'الجبر الأساسي', duration: '1m 25s' },
        { id: 2, title: 'الأشكال الهندسية', duration: '3m 12s' },
        { id: 3, title: 'المعادلات الخطية', duration: '4m 08s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 4,
      title: 'التفاضل والتكامل',
      lessons: [
        { id: 1, title: 'مقدمة في التفاضل', duration: '2m 14s' },
        { id: 2, title: 'التكامل الغير محدد', duration: '3m 49s' },
        { id: 3, title: 'التفاضل العددي', duration: '5m 20s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 5,
      title: 'الإحصاء والاحتمالات',
      lessons: [
        { id: 1, title: 'الإحصاء الأساسي', duration: '1m 58s' },
        { id: 2, title: 'الاحتمالات المتقدمة', duration: '4m 05s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 6,
      title: 'الهندسة التحليلية',
      lessons: [
        { id: 1, title: 'نقاط التقاطع', duration: '2m 37s' },
        { id: 2, title: 'المستقيمات والأقواس', duration: '3m 18s' },
        { id: 3, title: 'الدوال اللوغاريتمية', duration: '4m 46s' },
        // Add more lessons as needed
      ]
    },
    {
      id: 7,
      title: 'الرياضيات التطبيقية',
      lessons: [
        { id: 1, title: 'الرياضيات في الحياة اليومية', duration: '2m 03s' },
        { id: 2, title: 'الرياضيات في التكنولوجيا', duration: '3m 29s' },
        // Add more lessons as needed
      ]
    },
    // Add more courses as needed
  ];
  
  const [activeCourse, setActiveCourse] = useState(courses[0].id);

  const toggleCourse = (courseId) => {
    setActiveCourse(activeCourse === courseId ? null : courseId);
  };
  return (
    <Fragment>
      <section className="pt-lg-8 pb-8 bg-primary" dir='rtl'>
        <div className="container pb-lg-8">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div>
                <h1 className="text-white display-4 fw-semibold">ابدأ مع مادة اللغة الإنجليزية</h1>
                <p className="text-white mb-6 lead">
                  مادة اللغة الإنجليزية هي واحدة من أهم المواد التي تساعدك على تطوير مهاراتك اللغوية والتواصلية.
                  هذه الدورة ستبدأ معك في تعلم أساسيات اللغة الإنجليزية.
                </p>
                <div className="d-flex align-items-center">
                  <a href="#" className="bookmark text-white">
                    <i className="fe fe-bookmark fs-4 me-2"></i>
                    أضف إلى المفضلة
                  </a>

                  <span className="text-white ms-3">
                    <i className="fe fe-user"></i>
                    1200 مسجلين
                  </span>
                  <div>
                    <span class="fs-6"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg></span>
                    <span className="text-white mx-2">(140)</span>
                  </div>
                  <span className="text-white ms-4 d-none d-md-block">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="8" width="2" height="6" rx="1" fill="#DBD8E9"></rect>
                      <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                      <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                    </svg>
                    <span className="align-middle">متوسط</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-8' dir='rtl'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 mt-n8 mb-4 mb-lg-0">
              {/*  Card  */}
              <div className="card rounded-3">
                {/*  Card header  */}
                <div className="card-header border-bottom-0 p-0">
                  <div>
                    {/*  Nav  */}
                    <ul className="nav nav-lb-tab" id="tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'table' ? 'active' : ''}`}
            id="table-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
            aria-controls="table"
            aria-selected={activeTab === 'table'}
            onClick={() => handleTabClick('table')}
          >
            المحتوى
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            id="description-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
            aria-controls="description"
            aria-selected={activeTab === 'description'}
            tabIndex="-1"
            onClick={() => handleTabClick('description')}
          >
            الوصف
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
            id="review-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
            aria-controls="review"
            aria-selected={activeTab === 'review'}
            tabIndex="-1"
            onClick={() => handleTabClick('review')}
          >
            التعليقات
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'transcript' ? 'active' : ''}`}
            id="transcript-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
            aria-controls="transcript"
            aria-selected={activeTab === 'transcript'}
            tabIndex="-1"
            onClick={() => handleTabClick('transcript')}
          >
            الأجزاء
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`}
            id="faq-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
            aria-controls="faq"
            aria-selected={activeTab === 'faq'}
            tabIndex="-1"
            onClick={() => handleTabClick('faq')}
          >
            الأسئلة
          </a>
        </li>
      </ul>
                  </div>
                </div>
                {/*  Card Body  */}
                <div className="card-body">
                  <div className="tab-content" id="tabContent">
                    <div className={`tab-pane fade ${activeTab === 'table' ? 'active show' : ''}`} id="table" role="tabpanel" aria-labelledby="table-tab">
                      {/*  Card  */}
                      <div className="accordion" id="courseAccordion">
                        <div>
                          {/*  List group  */}
                          <ul className="list-group list-group-flush">
      {courses.map(course => (
        <li className="list-group-item px-0" key={course.id}>
          <a
            className={`h4 mb-0 d-flex align-items-center ${activeCourse === course.id ? 'active' : ''}`}
            data-bs-toggle="collapse"
            href="#"
            aria-expanded={activeCourse === course.id ? 'true' : 'false'}
            aria-controls={`course-${course.id}`}
            onClick={() => toggleCourse(course.id)}
          >
            <div className="me-auto">{course.title}</div>
            <span className="chevron-arrow ms-4">
              <i className="fe fe-chevron-down fs-4"></i>
            </span>
          </a>
          <div className={`collapse ${activeCourse === course.id ? 'show' : ''}`} id={`course-${course.id}`} data-bs-parent="#courseAccordion">
            <div className="pt-3 pb-2">
              {course.lessons.map(lesson => (
                <a href="course-resume.html" className="mb-2 d-flex justify-content-between align-items-center text-inherit" key={lesson.id}>
                  <div className="text-truncate">
                    <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                    <div 
  className="rounded-circle"
  style={{
    display: "inline-flex",
    width: "30px",
    height: "30px",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <BiSolidLeftArrow size={10} />
</div>
                    </span>
                    <span>{lesson.title}</span>
                  </div>
                  <div className="text-truncate">
                    <span>{lesson.duration}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'description' ? 'active show' : ''}`} id="description" role="tabpanel" aria-labelledby="description-tab">
  {/* Description */}
  <div className="mb-4">
    <h3 className="mb-2">وصف الدورة الرياضية</h3>
    <p>
      إذا كنت تتعلم الرياضيات لأول مرة، أو إذا كنت تأتي من تخصص مختلف، فهذه الدورة، الرياضيات: البداية، ستمنحك الأساسيات لفهم الرياضيات. ستتعرف أولاً على أنواع المفاهيم الرياضية التي يمكن فهمها بسهولة، والمجالات التي يمكن أن تفيد من خلالها.
    </p>
  </div>

  <h4 className="mb-3">ما ستتعلمه</h4>
  <div className="row mb-3">
    <div className="col-12 col-md-6">
      <ul className="list-unstyled">
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>التعرف على أهمية فهم المفاهيم الرياضية في حياتنا اليومية.</span>
        </li>
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>تحليل الطرق الرياضية لحل المشكلات وتطبيقها في حياتنا اليومية.</span>
        </li>
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>استكشاف كيفية تطبيق المفاهيم الرياضية في تحليل المشكلات المعقدة.</span>
        </li>
      </ul>
    </div>
    <div className="col-12 col-md-6">
      <ul className="list-unstyled">
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>استكشاف طرق تطبيق المفاهيم الرياضية في الحياة العملية والمهنية.</span>
        </li>
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>تحليل كيفية استخدام الرياضيات في تحديد وتحليل البيانات الكمية والنوعية.</span>
        </li>
        <li className="d-flex mb-2">
          <span className="me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle text-success" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
            </svg>
          </span>
          <span>تحليل الأساليب الرياضية لتطوير المهارات التحليلية والتفكير النقدي.</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<div className={`tab-pane fade ${activeTab === 'review' ? 'active show' : ''}`} id="review" role="tabpanel" aria-labelledby="review-tab">
  {/* التقييمات */}
  <div className="mb-3">
    <h3 className="mb-4">أراء و تقييمات التلاميذ</h3>
    <div className="row align-items-center">
      <div className="col-auto text-center">
        <h3 className="display-2 fw-bold">4.5</h3>
        <span className="fs-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </span>
        <p className="mb-0 fs-6">(بناءً على 27 تقييم)</p>
      </div>
      {/* شريط التقدم */}
      <div className="col order-3 order-md-2">
        <div className="progress mb-3" style={{ height: "6px" }}>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress mb-3" style={{ height: "6px" }}>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress mb-3" style={{ height: "6px" }}>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress mb-3" style={{ height: "6px" }}>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress mb-0" style={{ height: "6px" }}>
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div className="col-md-auto col-6 order-2 order-md-3">
        {/* التقييم */}
        <div>
          <span className="fs-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </span>
          <p className="mb-0 fs-6">جيد جداً</p>
        </div>
      </div>
    </div>
  </div>
  {/* تقييمات التلاميذ */}
  <div className="row mb-3">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img src="../assets/images/avatar/avatar-5.jpg" className="me-3 rounded-circle" alt="تعليق المستخدم" width="48" height="48" />
            <div className="flex-grow-1">
              <h5 className="card-title mb-1">محمد علي</h5>
              <p className="card-text">	&quot;تطبيق رائع للتعلم عبر الإنترنت، أفضل منصة تعليمية رأيتها!	&quot;</p>
              <span className="text-muted fs-6">قبل 3 أيام</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img src="../assets/images/avatar/avatar-3.jpg" className="me-3 rounded-circle" alt="تعليق المستخدم" width="48" height="48" />
            <div className="flex-grow-1">
              <h5 className="card-title mb-1">سارة أحمد</h5>
              <p className="card-text">	&quot;أنصح به بشدة لمن يبحث عن تعليم ممتاز ومحتوى تعليمي ذو جودة عالية	&quot;</p>
              <span className="text-muted fs-6">قبل 5 أيام</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-start">
            <img src="../assets/images/avatar/avatar-2.jpg" className="me-3 rounded-circle" alt="تعليق المستخدم" width="48" height="48" />
            <div className="flex-grow-1">
              <h5 className="card-title mb-1">أحمد حسن</h5>
              <p className="card-text">	&quot;تجربة رائعة مع محتوى تعليمي ممتاز ومدرسين محترفين	&quot;</p>
              <span className="text-muted fs-6">قبل 7 أيام</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* زر عرض المزيد */}
  <div className="text-center">
    <button className="btn btn-primary">عرض المزيد</button>
  </div>
</div>

<div className={`tab-pane fade ${activeTab === 'transcript' ? 'active show' : ''}`} id="transcript" role="tabpanel" aria-labelledby="transcript-tab">
  {/*  الوصف  */}
  <div>
    <h3 className="mb-3">النص الكامل من درس مقدمة الدرس في الرياضيات</h3>
    <div className="mb-4">
      <h4>
        نظرة عامة على الدرس
        <a href="#" className="text-primary ms-2 h4">[00:00:00]</a>
      </h4>
      <p className="mb-0">
        اسمي جون ديو وأعمل كمدرس في الرياضيات. أعمل على تطوير المناهج التعليمية وتعليم الطلاب الرياضيات بطرق مبتكرة. كنت سابقاً أعمل كمهندس في شركة IBM. أنا أعيش في بورتلاند، أوريغون.
      </p>
    </div>

    <div className="mb-4">
      <h4>
        نظرة على تطبيق الدرس العملي
        <a href="#" className="text-primary ms-2 h4">[00:00:54]</a>
      </h4>
      <p>
        سنقوم بالتعمق في المفاهيم الأساسية للرياضيات. سنركز على الأجزاء الضرورية التي نحتاجها لفهم الدروس القادمة بشكل أفضل. لن نقوم بالتعمق في كل تفاصيل الرياضيات، ولكننا سنتعرف على الأساسيات اللازمة لفهم الدروس القادمة بشكل أفضل.
      </p>
      <p>
        سنقوم بالتعمق في المفاهيم الأساسية للرياضيات. سنركز على الأجزاء الضرورية التي نحتاجها لفهم الدروس القادمة بشكل أفضل. لن نقوم بالتعمق في كل تفاصيل الرياضيات، ولكننا سنتعرف على الأساسيات اللازمة لفهم الدروس القادمة بشكل أفضل.
      </p>
    </div>

  </div>
</div>
{/*  لوحة التبويب  */}
<div className={`tab-pane fade ${activeTab === 'faq' ? 'active show' : ''}`} id="faq" role="tabpanel" aria-labelledby="faq-tab">
  {/*  الأسئلة الشائعة  */}
  <div>
    <h3 className="mb-3">الدرس - الأسئلة الشائعة</h3>
    <div className="mb-4">
      <h4>كيف يساعدني هذا الدرس في فهم الرياضيات بشكل أفضل؟</h4>
      <p>
        اسمي جيسون وو وأعمل كمدرس في الرياضيات. أعمل على تطوير المناهج التعليمية وتعليم الطلاب الرياضيات بطرق مبتكرة. كنت سابقاً أعمل كمهندس في شركة IBM. أنا أعيش في بورتلاند، أوريغون.
      </p>
    </div>
    <div className="mb-4">
      <h4>ما أهمية هذا الدرس؟</h4>
      <p>
        سنقوم بالتعمق في المفاهيم الأساسية للرياضيات. سنركز على الأجزاء الضرورية التي نحتاجها لفهم الدروس القادمة بشكل أفضل. لن نقوم بالتعمق في كل تفاصيل الرياضيات، ولكننا سنتعرف على الأساسيات اللازمة لفهم الدروس القادمة بشكل أفضل.
      </p>
    </div>
  </div>
</div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 mt-lg-n8">
  {/* بطاقة الدورة */}
  <div className="card mb-3 mb-4">
    <div className="p-1">
      <div className="d-flex justify-content-center align-items-center rounded border-white border rounded-3 bg-cover">
<img src="../assets/images/teachers/28.jpg" alt="" srcset="" className='card-img-top'/>
        {/* <a className="glightbox icon-shape rounded-circle btn-play icon-xl" href="">
          <i className="fe fe-play"></i>
        </a> */}
      </div>
    </div>
    {/* جسم البطاقة */}
    <div className="card-body">
      {/* السعر على الصفحة الواحدة */}
      <div className="mb-3">
        <span className="text-dark fw-bold h2">600$</span>
        <del className="fs-4">750$</del>
      </div>
      <div className="d-grid">
        <a href="#" className="btn btn-primary mb-2">ابدأ شهر مجاني</a>
        <a href="#" className="btn btn-outline-primary">احصل على وصول كامل</a>
      </div>
    </div>
  </div>
  {/* بطاقة الشمولية */}
  <div className="card mb-4">
    <div>
      {/* رأس البطاقة */}
      <div className="card-header">
        <h4 className="mb-0">ماذا تتضمن</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-transparent">
          <i className="fe fe-play-circle align-middle ms-2 text-primary"></i>
          12 ساعة فيديو
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-award me-2 align-middle text-success"></i>
          شهادة
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-calendar align-middle ms-2 text-info"></i>
          12 مقال
        </li>
        <li className="list-group-item bg-transparent">
          <i className="fe fe-video align-middle ms-2 text-secondary"></i>
          مشاهدة دون اتصال
        </li>
        <li className="list-group-item bg-transparent border-bottom-0">
          <i className="fe fe-clock align-middle ms-2 text-warning"></i>
          وصول مدى الحياة
        </li>
      </ul>
    </div>
  </div>
  {/* بطاقة المعلم */}
  <div className="card">
    {/* جسم البطاقة */}
    <div className="card-body">
      <div className="d-flex align-items-center">
        <div className="position-relative">
          <img src="../assets/images/avatar/avatar-1.jpg" alt="avatar" className="rounded-circle avatar-xl" />
          <a href="#" className="position-absolute mt-2 ms-n3" data-bs-toggle="tooltip" data-placement="top" aria-label="تم التحقق" data-bs-original-title="تم التحقق">
            <img src="../assets/images/svg/checked-mark.svg" alt="checked-mark" height="30" width="30" />
          </a>
        </div>
        <div className="ms-4">
          <h4 className="mb-0">جيني ويلسون</h4>
          <p className="mb-1 fs-6">مطورة أمامية، مصممة</p>
          <p className="fs-6 mb-1 d-flex align-items-center">
            <span className="text-warning">4.5</span>
            <span className="mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                </path></svg>
            </span>
            تقييم المدرب
          </p>
        </div>
      </div>
      <div className="border-top row mt-3 border-bottom mb-3 g-0">
        <div className="col">
          <div className="pe-1 ps-2 py-3">
            <h5 className="mb-0">11,604</h5>
            <span>طالب</span>
          </div>
        </div>
        <div className="col border-start">
          <div className="pe-1 ps-3 py-3">
            <h5 className="mb-0">32</h5>
            <span>دورات</span>
          </div>
        </div>
        <div className="col border-start">
          <div className="pe-1 ps-3 py-3">
            <h5 className="mb-0">12,230</h5>
            <span>مراجعات</span>
          </div>
        </div>
      </div>
      <p>أنا مصممة مبتكرة متخصصة في تجربة المستخدم/واجهة المستخدم مقرها في برلين. كمقيم إبداعي في Figma استكشفت مدينة المستقبل وكيفية استخدام التكنولوجيا الجديدة.</p>
      <a href="#" className="btn btn-outline-secondary btn-sm">عرض التفاصيل</a>
    </div>
  </div>
</div>

          </div>
          {/*  Card  */}
          <div className="pt-8 pb-3">
            <div className="row d-md-flex align-items-center mb-4">
              <div className="col-12">
                <h2 className="mb-0">الدورات ذات الصلة</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* - بطاقة الدورة  */}
                <div className="card mb-4 card-hover">
                  <a href="#"><img src="../assets/images/teachers/27.jpg" alt="course" className="card-img-top" /></a>
                  {/* - جسم البطاقة  */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2">
                      <a href="#" className="text-inherit">كيفية إنشاء موقع ويب بسهولة باستخدام ريأكت</a>
                    </h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                          </svg>
                        </span>
                        <span>3 ساعات 56 دقيقة</span>
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
                    <div className="mt-3 d-flex align-baseline lh-1">
                      <span className="fs-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>
                      <span className="text-warning mx-1">4.5</span>
                      <span className="fs-6">(7,700)</span>
                    </div>
                  </div>
                  {/* - تذييل البطاقة  */}
                  <div className="card-footer">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                      </div>
                      <div className="col ms-2">
                        <span>Morris Mccoy</span>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                          <i className="fe fe-bookmark fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* - بطاقة الدورة  */}
                <div className="card mb-4 card-hover">
                  <a href="#"><img src="../assets/images/teachers/28.jpg" alt="course" className="card-img-top" /></a>
                  {/* - جسم البطاقة  */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2">
                      <a href="#" className="text-inherit">GraphQL: مقدمة شاملة للمطورين والمصممين</a>
                    </h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                          </svg>
                        </span>
                        <span>5 ساعات 30 دقيقة</span>
                      </li>
                      <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                        </svg>
                        متوسط
                      </li>
                    </ul>
                    <div className="mt-3 d-flex align-baseline lh-1">
                      <span className="fs-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>
                      <span className="text-warning mx-1">4.8</span>
                      <span className="fs-6">(3,800)</span>
                    </div>
                  </div>
                  {/* - تذييل البطاقة  */}
                  <div className="card-footer">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                      </div>
                      <div className="col ms-2">
                        <span>Effie Hansen</span>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                          <i className="fe fe-bookmark fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* - بطاقة الدورة  */}
                <div className="card mb-4 card-hover">
                  <a href="#"><img src="../assets/images/teachers/29.jpg" alt="course" className="card-img-top" /></a>
                  {/* - جسم البطاقة  */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2">
                      <a href="#" className="text-inherit">Angular: إنشاء تطبيقات ويب ديناميكية وقوية</a>
                    </h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                          </svg>
                        </span>
                        <span>4 ساعات 10 دقائق</span>
                      </li>
                      <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                        </svg>
                        متوسط
                      </li>
                    </ul>
                    <div className="mt-3 d-flex align-baseline lh-1">
                      <span className="fs-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>
                      <span className="text-warning mx-1">4.8</span>
                      <span className="fs-6">(4,200)</span>
                    </div>
                  </div>
                  {/* - تذييل البطاقة  */}
                  <div className="card-footer">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                      </div>
                      <div className="col ms-2">
                        <span>Sue Wood</span>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                          <i className="fe fe-bookmark fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* - بطاقة الدورة  */}
                <div className="card mb-4 card-hover">
                  <a href="#"><img src="../assets/images/teachers/30.jpg" alt="course" className="card-img-top" /></a>
                  {/* - جسم البطاقة  */}
                  <div className="card-body">
                    <h4 className="mb-2 text-truncate-line-2">
                      <a href="#" className="text-inherit">JavaScript: دليل مبتدئين للمطورين الجدد</a>
                    </h4>
                    <ul className="mb-3 list-inline">
                      <li className="list-inline-item">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-clock align-baseline" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                          </svg>
                        </span>
                        <span>3 ساعات 50 دقيقة</span>
                      </li>
                      <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                          <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                          <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                        </svg>
                        متوسط
                      </li>
                    </ul>
                    <div className="mt-3 d-flex align-baseline lh-1">
                      <span className="fs-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                      </span>
                      <span className="text-warning mx-1">4.8</span>
                      <span className="fs-6">(5,200)</span>
                    </div>
                  </div>
                  {/* - تذييل البطاقة  */}
                  <div className="card-footer">
                    <div className="row align-items-center g-0">
                      <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                      </div>
                      <div className="col ms-2">
                        <span>Cheryl Beck</span>
                      </div>
                      <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                          <i className="fe fe-bookmark fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>
    </Fragment>
  )
}

export default Page