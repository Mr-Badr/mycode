"use client";
import React from "react";
import Link from "next/link";
import VideoPopup from "../../_components/VideoPopup";

function HeroSection() {
  const Background = "/assets/images/group.png";

  const css = `
    .filter-rose {
      filter: brightness(0) saturate(100%) invert(34%) sepia(38%) saturate(5771%) hue-rotate(313deg) brightness(89%) contrast(100%); 
    }
    .filter-blue {
      filter: brightness(0) saturate(100%) invert(36%) sepia(99%) saturate(2015%) hue-rotate(169deg) brightness(97%) contrast(98%);
    }
  `;
  return (
    <section className=" bg-white hero-sec" dir="rtl">
      <style>{css}</style>
      <div className="container">
        <div className="align-items-center row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="">
              <h5 className="text-dark mb-4 tajawal-bold">
                <i
                  className="fe fe-check icon-xxs icon-shape rounded-circle"
                  style={{
                    color: "#e82782",
                    backgroundColor: "#f76dad28",
                  }}
                ></i>
                <p style={{ display: "inline" }} className=" me-2 text-dark">
                  منصة التعليم الأكثر ثقة
                </p>
              </h5>
              <h1 className="display-3 mb-3 tajawal-bold">
                تعلم بدون حدود مع مدرستنا الرقمية
                <u className="text-warning mx-2 tajawal-bold">
                  <span className="text-primary">CLIC SCHOOL</span>
                </u>
              </h1>
              <p className="pe-lg-10 mb-5 text-dark">
                منصة تساعدك على النجاح و التميز وتسهل عليك الوصول إلى محتوى
                مستواك الدراسي من دروس ، تطبيقات، ملخصات، امتحانات وفروض من خلال
                ملفات و قنوات يوتيوب لعدة أساتذة
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  className="btn btn-primary"
                  href="/marketing/landings/home-academy/"
                >
                  أشترك مجانا الأن
                </Link>

                <VideoPopup />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="mt-12 mt-lg-0 position-relative hero-img">
              <div className="position-absolute top-0 start-0 graphics-2 d-none d-md-block">
                <img
                  src="../../../assets/images/svg/graphics-2.svg"
                  alt="graphics-2"
                  className="filter-blue"
                />
              </div>
              <img
                src="../../../assets/images/main1.jpg"
                alt="online course"
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
              <div className="position-absolute top-100 d-none d-md-block graphics-1">
                <img
                  src="../../../assets/images/svg/graphics-1.svg"
                  alt="graphics-1"
                  className="filter-rose"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
