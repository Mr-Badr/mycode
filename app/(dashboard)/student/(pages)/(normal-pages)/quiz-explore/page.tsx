"use client";
import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


function StudentQuiz() {
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
                <div className="card border-0">
                  {/*  Card body  */}
                  <div className="card-body p-10">
                    <div className="text-center">
                      {/*  img  */}
                      <img
                        src="../assets/images/svg/survey-img.svg"
                        alt="survey"
                        className="img-fluid"
                      />
                      {/*  text  */}
                      <div className="px-lg-8">
                        <h1>مرحبًا بك في المسابقة</h1>
                        <p className="mb-0">
                          شارك بشكل مباشر أو غير متزامن مع أسئلة المسابقة
                          والاستطلاع التي يكملها المشاركون بالسرعة التي تناسبهم.
                        </p>
                        <a
                          href="student-quiz-start.html"
                          className="btn btn-primary mt-4"
                        >
                          ابدأ المسابقة الخاص بك
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default StudentQuiz;
