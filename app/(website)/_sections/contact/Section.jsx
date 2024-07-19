import Image from 'next/image';

function Section() {
  return (
    <section className="px-0 container" style={{ paddingTop: '100px', paddingBottom: '100px', display: "flex", justifyContent: "center" }} dir='rtl'>
      <div className="align-items-center rounded-md overflow-hidden" style={{display: "flex", justifyContent: "center", width: "100% !important", 
        padding: "2rem 1rem", 
        outline: "1px solid #47474771"}}>
        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
          <div className="py-4" style={{ paddingRight: "1rem !important" }}>
            <div className="d-flex justify-content-between mb-4 align-items-center">
              <a href="/home">
                <Image
                  src="/assets/images/lgg.png"
                  width={80}
                  height={80}
                  className="logo-inverse"
                  alt=""
                />
              </a>
              <div className="form-check form-switch theme-switch d-none">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div>
            </div>
            <div>
              <h1 className="display-5 tajawal-bold">تواصل معنا الآن</h1>
              <p className="lead text-dark">وابدأ رحلة نجاحك وتفوقك</p>
              <div className="mt-4 fs-5">
                <p className="mb-3">
                  إذا كنت بحاجة إلى دعم، يرجى زيارة بوابة الدعم
                  قبل التواصل مباشرة.
                </p>
                <p>
                  <i className="bi bi-telephone text-primary me-2"></i>
                  + 0123-456-7890
                </p>
                <p>
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  mohammed@gmail.com
                </p>
                <p className="d-flex">
                  <i className="bi bi-geo-alt text-primary me-2"></i>
                  2652 Kooter Lane Charlotte, NC 28263
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-lg-flex align-items-center w-lg-50 position-fixed-lg bg-cover bg-light top-0 right-0">
          <div className="pr-4 pr-xl-8 mr-xl-8 py-4 py-lg-0">
            <div>
              <form className="row g-3 needs-validation" noValidate="">
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="fname">
                    الاسم الأول:
                    <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" name="first name" id="fname" placeholder="الاسم الأول" required />
                  <div className="invalid-feedback">الرجاء إدخال الاسم الأول</div>
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="lname">
                    الاسم الأخير:
                    <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" name="last name" id="lname" placeholder="الاسم الأخير" required />
                  <div className="invalid-feedback">الرجاء إدخال الاسم الأخير</div>
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="email">
                    البريد الإلكتروني:
                    <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="email" id="email" placeholder="البريد الإلكتروني" required style={{
                    direction: "rtl"
                  }}/>
                  <div className="invalid-feedback">الرجاء إدخال البريد الإلكتروني</div>
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="phone">
                    رقم الهاتف:
                    <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" name="phone" id="phone" placeholder="رقم الهاتف" required />
                  <div className="invalid-feedback">الرجاء إدخال رقم الهاتف</div>
                </div>
                <div className="mb-3 col-12">
                  <label className="text-dark form-label" htmlFor="contactReason">
                    سبب الاتصال:
                    <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" id="contactReason" required>
                    <option value="">اختيار</option>
                    <option value="تصميم">تصميم</option>
                    <option value="تطوير">تطوير</option>
                    <option value="آخر">آخر</option>
                  </select>
                  <div className="invalid-feedback">الرجاء اختيار سبب الاتصال</div>
                </div>
                <div className="mb-3 col-12">
                  <label className="text-dark form-label" htmlFor="messages">رسالة:</label>
                  <textarea className="form-control" id="messages" rows="3" placeholder="رسالة"></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">إرسال</button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Section;
