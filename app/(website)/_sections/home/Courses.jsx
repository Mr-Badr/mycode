import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const courses = [
  {
    title: " البرنامج الصيفي",
    image: "../../assets/images/teachers/12.jpg",
    rating: 4.9,
    reviews: 31,
    hours: 8,
  },
  {
    title: "نادي المطالعة",
    image: "../../assets/images/teachers/13.jpg",
    rating: 4.9,
    reviews: 23,
    hours: 12,
    isNew: true,
  },
  {
    title: " نادي الرسم و الأشغال اليدوية",
    image: "../../assets/images/teachers/14.jpg",
    rating: 5.0,
    reviews: 32,
    hours: 10,
  },
  {
    title: "  الألعاب الفكرية و نشاطات التركيز",
    image: "../../assets/images/teachers/15.jpg",
    rating: 4.7,
    reviews: 45,
    hours: 9,
  },
  {
    title: " تحسين الخط و الكتابة",
    image: "../../assets/images/teachers/16.jpg",
    rating: 4.8,
    reviews: 27,
    hours: 11,
  },
  {
    title: "تعليم الفرنسية و الإنجليزية ",
    image: "../../assets/images/teachers/17.jpg",
    rating: 4.6,
    reviews: 22,
    hours: 7,
  },
  {
    title: " تحفيظ القران الكريم",
    image: "../../assets/images/teachers/18.jpg",
    rating: 4.9,
    reviews: 35,
    hours: 14,
  },
  {
    title: " SUMMER SCHOOL",
    image: "../../assets/images/teachers/19.jpg",
    rating: 4.7,
    reviews: 29,
    hours: 13,
  },
];

const CourseCard = ({ course }) => (
  <>
      
  <div className="col-xl-3 col-md-6 col-12 d-flex" dir="rtl">
    <div className="card mb-4 card-hover border w-100 d-flex flex-column">
      <a href="#!">
        <img
          src={course.image}
          alt={course.title}
          className="img-fluid w-100 rounded-top-3"
        />
      </a>
      <div className="card-body d-flex flex-column flex-grow-1">
        <h4 className="mb-3">
          <a href="#!" className="text-inherit">
            {course.title}
          </a>
        </h4>
        <div className="d-flex align-items-center mb-5 lh-1 flex-grow-1">
          {course.isNew && <span className="badge bg-success me-2">جديد</span>}
          <div>
            <span className="text-inherit fw-semibold">{course.rating}</span>
            <span className="ms-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="var(--gk-success)"
                className="bi bi-star-fill align-baseline"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              ({course.reviews})
            </span>
          </div>
          <div className="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="var(--gk-gray-400)"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
            </svg>
          </div>
          <div>
            <span className="text-inherit fw-semibold me-1">
              {course.hours}
            </span>
            ساعات
          </div>
        </div>
        <a href="/auth/register" className="mt-auto">
  اشترك اليوم
  <FaArrowLeftLong className="mx-1" style={{marginTop: "1.5px"}} />

</a>

      </div>
    </div>
  </div>
  </>
);

const Courses = () => (
  <section className="py-lg-8 py-6 bg-white" dir="rtl">
    <div className="container my-lg-8">
      <div className="row">
        <div className="col-xl-12 col-md-12 col-12">
          <div className="mb-6 mb-lg-8">
            <h2 className="h1 fw-bold">
              <p className="mr-2" style={{ display: "inline" }}>
                اكتشف
              </p>

              <u className="text-warning">
                <span className="text-primary mx-2">دورات المهارات</span>
              </u>
            </h2>
            <p className="mb-0 lead">
              دورات فيديو عبر الإنترنت مع إضافات جديدة تُنشر كل شهر.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
<div className="col-xl-12 col-md-12 col-12">
<div className="mt-4">
  <a href="/formations" className="btn btn-light-primary text-primary">إكتشف المزيد من الدورات</a>
</div>
</div>
      </div>
    </div>
    
  </section>
);

export default Courses;
