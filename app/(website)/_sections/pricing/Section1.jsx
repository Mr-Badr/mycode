import React from 'react'

function Section1() {
  return (

    <section className="hero-sec bg-white" dir='rtl'>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12 offset-xl-2 offset-lg-2">
            <div className="text-center mb-8">
              <h1 className="display-3 mb-3 fw-bold">أسعار الخطط للطلاب</h1>
              <p className="lead px-md-14">
                نقدم لك معلومات حول الأسعار، بالإضافة إلى خدمة التعليم والتكوين على الإنترنت.
              </p>
            </div>
          </div>

          {/* - البطاقة الأولى */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="mb-3 border shadow-none border-top-0 card">
              <div className="border-6 rounded-3" style={{ borderTop: "6px solid #00a2da" }}>
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold">الخطة الأساسية</h3>
                    <p className="mb-0">أفضل خيار للطلاب الجدد</p>
                    <h1 className="mb-3 fw-bold mt-5">100 دينار/شهر</h1>
                    <a className="btn btn-outline-primary" href="/pricing/details">اشترك الآن</a>
                  </div>
                  <hr className="m-0" />
                  <div className="mt-5">
                    <h4 className="fw-bold mb-4">الفوائد:</h4>
                    <div className="list-unstyled">
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>وصول غير محدود إلى الدروس</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>دعم فني عبر البريد الإلكتروني</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>مواد تعليمية قابلة للتنزيل</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* - البطاقة الثانية */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="mb-3 border shadow-none border-top-0 card">
              <div className="border-6 rounded-3" style={{ borderTop: "6px solid #e82782" }}>
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold">الخطة المتقدمة</h3>
                    <p className="mb-0">مثالية للطلاب الذين يرغبون في تحسين مهاراتهم</p>
                    <h1 className="mb-3 fw-bold mt-5">200 دينار/شهر</h1>
                    <a className="btn btn-primary" href="/pricing/details">اشترك الآن</a>
                  </div>
                  <hr className="m-0" />
                  <div className="mt-5">
                    <h4 className="fw-bold mb-4">الفوائد:</h4>
                    <div className="list-unstyled">
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>كل ميزات الخطة الأساسية</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>دروس مباشرة مع المعلمين</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>مشورات شخصية</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* - البطاقة الثالثة */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="mb-3 border shadow-none border-top-0 card">
              <div className="border-6 rounded-3" style={{ borderTop: "6px solid #feef10" }}>
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold">الخطة الممتازة</h3>
                    <p className="mb-0">للطلاب الذين يسعون لتحقيق التفوق</p>
                    <h1 className="mb-3 fw-bold mt-5">300 دينار/شهر</h1>
                    <a className="btn btn-outline-primary" href="/pricing/details">اشترك الآن</a>
                  </div>
                  <hr className="m-0" />
                  <div className="mt-5">
                    <h4 className="fw-bold mb-4">الفوائد:</h4>
                    <div className="list-unstyled">
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>كل ميزات الخطة المتقدمة</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>وصول حصري إلى الندوات</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>دعم فني على مدار الساعة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



  )
}

export default Section1