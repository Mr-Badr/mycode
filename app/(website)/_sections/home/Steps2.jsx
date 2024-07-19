import React from 'react'

function Steps2() {
  return (
    <section className="py-lg-8 py-6 bg-white" dir='rtl'>
    <div className="container py-lg-6">
        <div className="row mb-8">
            <div className="col-12">
                <div className="text-center d-flex flex-column gap-2">
                    <h1 className="mb-0">لنبدأ في 3 خطوات سهلة</h1>
                    <p className="mb-0">اتبع هذه الخطوات الثلاث البسيطة للبدء في التوجيه طويل الأمد</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="row mb-8 align-items-center gy-4" style={{justifyContent: "center"}}>
                    <div className="col-md-6 col-xxl-4 col-xl-5 offset-xl-1 mb-xxl-6">
                        <div className="d-flex flex-column gap-4">
                            <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">1</div>
                            <div className="d-flex flex-column gap-2">
                                <h3 className="mb-0">ابحث عن الموجه المثالي</h3>
                                <p className="mb-0 fs-3">تصفح من بين أكثر من 600 موجه واختر الموجه المثالي بناءً على تفضيلاتك</p>
                            </div>
                            <div>
                                <a href="#!" className="btn btn-outline-secondary">اختيار الموجه</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-5 col-xl-6 mb-xxl-6">
                        <div>
                            <img src="../../../assets/images/teachers/step1.jpeg" alt="الخطوة 1" className="img-fluid rounded-3 w-100" />
                        </div>
                    </div>
                </div>
                <div className="row mb-8 align-items-center gy-4" style={{justifyContent: "center"}}>
                    <div className="col-md-6 col-xxl-5 col-xl-5 offset-xl-1 order-md-1 order-2 mb-xxl-6">
                        <div>
                            <img src="../../../assets/images/teachers/step2.jpeg" alt="الخطوة 2" className="img-fluid rounded-3 w-100" />
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-4 col-xl-5 offset-xl-1 order-xl-2 order-1 mb-xxl-6">
                        <div className="d-flex flex-column gap-4">
                            <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">2</div>
                            <div className="d-flex flex-column gap-2">
                                <h3 className="mb-0">احجز جلسة تجريبية مجانية</h3>
                                <p className="mb-0 fs-3">تواصل مع الموجه وشاهد كيف يمكنه مساعدتك في تحقيق هدفك بشكل أسرع</p>
                            </div>
                            <div>
                                <a href="#!" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">احجز جلسة تجريبية مجانية</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center gy-4" style={{justifyContent: "center"}}>
                    <div className="col-md-6 col-xxl-4 col-xl-5 offset-xl-1 mb-xxl-6">
                        <div className="d-flex flex-column gap-4">
                            <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">3</div>
                            <div className="d-flex flex-column gap-2">
                                <h3 className="mb-0">تعلم، تحدث، واستمتع</h3>
                                <p className="mb-0 fs-3">أحسنت! ابدأ توجيهك الشخصي في الاتجاه الصحيح مع الموجه الذي اخترته.</p>
                            </div>
                            <div>
                                <a href="#!" className="btn btn-outline-secondary">مقابلة الموجه</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-5 col-xl-6 mb-xxl-6">
                        <div>
                            <img src="../../../assets/images/teachers/step33.jpeg" alt="الخطوة 3" className="img-fluid rounded-3 w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Steps2