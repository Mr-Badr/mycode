import React from 'react'

function Section2() {
  return (
    <section className="hero-sec bg-white" dir='rtl'>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12 offset-xl-2 offset-lg-2">
            <div className="text-center mb-8">
              <h1 className="display-3 mb-3 fw-bold">أسعار الخطط لولي الأمر</h1>
              <p className="lead px-md-14">
                اختر الخطة التي تناسب تطلعاتك لتعليم طفلك مع مدرستنا عبر الإنترنت.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="mb-3 border shadow-none border-top-0 card">
              <div className="border-6 rounded-3" style={{ borderTop: "6px solid #00a2da" }}>
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold">الأساسي</h3>
                    <p className="mb-0">
                      لبدء مساعدة طفلك في التعلم، سيحصلون على الوصول إلى الدورات الأساسية فقط.
                      <span className="text-dark fw-medium">الدورات الأساسية فقط.</span>
                      سجّل طفلك اليوم ليبدأ رحلته التعليمية معنا
                    </p>
                    <h1 className="mb-3 fw-bold mt-5">مجاني</h1>
                    <a className="btn btn-outline-primary" href="/pricing/details">ابدأ مجاناً</a>
                  </div>
                  <hr className="m-0" />
                  <div className="mt-5">
                    <h4 className="fw-bold mb-4">الميزات الأساسية:</h4>
                    <div className="list-unstyled">
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>الدورات الأساسية فقط</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>مساحة تخزين 1 جيجابايت</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>تحليلات بسيطة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="mb-3 border shadow-none border-top-0 card">
              <div className="border-6 rounded-3" style={{ borderTop: "6px solid #e82782" }}>
                <div className="p-5">
                  <div className="mb-5">
                    <h3 className="fw-bold">المتقدم</h3>
                    <p className="mb-0">
                      تساعد طفلك على الارتقاء بمهاراتهم التعليمية مع الوصول إلى
                      <span className="text-dark fw-medium">الدورات البريميوم وورش العمل والتطبيقات المحمولة.</span>
                      التجديد شهرياً.
                    </p>
                    <h1 className="mb-3 fw-bold mt-5">$49 <span className="fs-5 text-muted fw-normal">/شهرياً</span></h1>
                    <a className="btn btn-outline-primary" href="/pricing/details">ابدأ اليوم</a>
                  </div>
                  <hr className="m-0" />
                  <div className="mt-5">
                    <h4 className="fw-bold mb-4">كل شيء في الأساسي، بالإضافة إلى:</h4>
                    <div className="list-unstyled">
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>الدورات البريميوم وورش العمل</span>
                      </div>
                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span><span className="fw-bold text-dark">مساحة تخزين </span>غير محدودة</span>
                      </div>

                      <div className="mb-1 list-item">
                        <span className="me-2" style={{
                          color: '#e82782',
                        }}><i className="bi bi-check-circle"></i></span>
                        <span>تحليلات متقدمة</span>
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

export default Section2