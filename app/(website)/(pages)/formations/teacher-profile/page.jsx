import React from 'react'

function page() {
  return (
    <main dir='rtl'>
      {/* hero section */}
      <section className="py-xl-8 py-6">
        <div className="container">
          {/* row */}
          <div className="row gy-4">
            <div className="col-xl-8 col-12">
              <div className="d-flex flex-column gap-4">
                {/* card */}
                <div className="card">
                  {/* img */}
                  <div className="rounded-top-3" style={{ backgroundImage: "url(../assets/images/mentor/mentor-single.png)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "228px" }}></div>
                  <div className="card-body p-md-5">
                    <div className="d-flex flex-column gap-5">
                      {/* img */}
                      <div className="mt-n8">
                        <img src="../assets/images/mentor/mentor-img-single.jpg" alt="mentor 1" className="img-fluid rounded-3 mt-n8" />
                      </div>
                      <div className="d-flex flex-column gap-5">
                        <div className="d-flex flex-column gap-3">
                          <div className="d-flex flex-md-row flex-column justify-content-between gap-2">
                            {/* العنوان */}
                            <div>
                              <h1 className="mb-0"> محمد علي</h1>
                              {/* المحتوى */}
                              <div className="d-flex flex-lg-row flex-column gap-2">
                                <small className="fw-medium text-gray-800">مهندس برمجيات في آبل</small>
                                <small className="fw-medium text-success">أكثر من 7 سنوات في تصميم تجربة المستخدم وتصميم العلامة التجارية.</small>
                              </div>
                            </div>
                            {/* الأزرار */}
                            <div className="d-flex flex-row gap-3 align-items-center">
                              <a href="#!" className="btn btn-outline-white">
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill me-1" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                                  </svg>
                                </span>
                                حفظ
                              </a>
                              <a href="#!" className="btn btn-outline-white">طرح الأسئلة</a>
                            </div>
                          </div>

                          <div className="d-flex flex-md-row flex-column gap-md-4 gap-2">
  <div className="d-flex flex-row gap-2 align-items-center lh-1">
    {/* icon */}
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning align-baseline" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
      </svg>
    </span>
    <span>
      {/* text */}
      <span className="text-gray-800 fw-bold">5.0</span>
      (16&nbsp;تقييم)
    </span>
  </div>
  <div className="d-flex flex-row gap-2 align-items-center lh-1">
    {/* icon */}
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-people-fill text-primary align-baseline" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
      </svg>
    </span>
    {/* text */}
    <span>
      <span className="text-gray-800 fw-bold">40+</span>
      متدرب
    </span>
  </div>
  <div className="d-flex flex-row gap-2 align-items-center lh-1">
    {/* icon */}
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
      </svg>
    </span>
    {/* text */}
    <span> الجزائر</span>
  </div>
</div>
<div className="d-flex flex-column gap-2">
  {/* العنوان */}
  <h3 className="mb-0">المهارات</h3>

  <div className="gap-2 d-flex flex-wrap">
    <a href="#!" className="btn btn-tag btn-sm">الرياضيات</a>
    <a href="#!" className="btn btn-tag btn-sm">الفلسفة</a>
    <a href="#!" className="btn btn-tag btn-sm">التربية الإسلامية</a>
    <a href="#!" className="btn btn-tag btn-sm">اللغة العربية</a>
    <a href="#!" className="btn btn-tag btn-sm">اللغة الفرنسية</a>
    <a href="#!" className="btn btn-tag btn-sm">اللغة الإنجليزية</a>
  </div>
</div>
</div>
<div>
  <span className="badge rounded-pill text-success-emphasis bg-success-subtle border border-success align-items-center">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-reply-fill me-1 align-text-top" viewBox="0 0 16 16">
        <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
      </svg>
    </span>
    الرد السريع
  </span>
</div>

                      </div>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className="card">
  {/* card body */}
  <div className="card-body p-md-5 d-flex flex-column gap-3">
    {/* heading */}
    <h3 className="mb-0">نبذة عن الأستاذ</h3>
    <div className="d-flex flex-column">
      {/* para */}
      <p className="mb-1">
        مصمم فائز بجوائز يمتلك أكثر من 7 سنوات من الخبرة في تصميم تجربة المستخدم وتصميم المنتجات والعلامات التجارية. لقد قمت بإرشاد وتوظيف الطلاب في وظائف التصميم في الولايات المتحدة وأوروبا واليابان والهند. أنا في مهمة لإطلاق سراح الخبراء في التصميم، من خلال تعزيز قدراتهم الإبداعية، وفتح فرص عمل رائعة بدوام كامل، وإشعال تأثيرهم في الصناعة من خلال مغامرات إبداعية مذهلة!
      </p>
      <div className="collapse" id="collapseAbout">
        <p className="my-3">
          لقد ساعدت الشركات في الولايات المتحدة وأوروبا واليابان على توليد أكثر من 200 مليون دولار في الإيرادات، من خلال مهاراتي في تصميم المنتجات والعلامات التجارية. أعلى ثلاث صناعات لي هي web3، الذكاء الاصطناعي والتعليم الإلكتروني.
        </p>
      </div>
      <div>
        <a className="btn-link" data-bs-toggle="collapse" href="#collapseAbout" role="button" aria-expanded="false" aria-controls="collapseAbout">اقرأ المزيد</a>
      </div>
    </div>
  </div>
</div>

                {/* card */}
                <div className="card">
                  {/* card body */}
                  <div className="card-body p-md-5">
                    <div className="d-flex flex-column gap-3">
                      {/* heading */}
                      <h3 className="mb-0">المهارات</h3>

                      <div className="gap-2 d-flex flex-wrap">
                        <a href="#!" className="btn btn-tag btn-sm">Frontend</a>
                        <a href="#!" className="btn btn-tag btn-sm">UX Design</a>
                        <a href="#!" className="btn btn-tag btn-sm">HTML</a>
                        <a href="#!" className="btn btn-tag btn-sm">UI Design</a>
                        <a href="#!" className="btn btn-tag btn-sm">CSS</a>
                        <a href="#!" className="btn btn-tag btn-sm">Landing page design</a>
                        <a href="#!" className="btn btn-tag btn-sm">Figma</a>
                        <a href="#!" className="btn btn-tag btn-sm">eCommerce Design</a>
                        <a href="#!" className="btn btn-tag btn-sm">React</a>
                        <a href="#!" className="btn btn-tag btn-sm">ReactJS</a>
                        <a href="#!" className="btn btn-tag btn-sm">Javascript</a>
                        <a href="#!" className="btn btn-tag btn-sm">Vuejs</a>
                        <a href="#!" className="btn btn-tag btn-sm">Next.js</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className="card">
  {/* card body */}
  <div className="card-body p-md-5">
    <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-2">
      {/* heading */}
      <div>
        <h3 className="mb-0">آراء المتدربين</h3>
      </div>
      <div>
        {/* form */}
        <form>
          <div className="d-flex flex-row align-items-center gap-2">
            <label htmlFor="exampleInputmentees" className="form-label text-nowrap mb-0">الترتيب حسب:</label>
            <select className="form-select" aria-label="الترتيب حسب" id="exampleInputmentees" name="exampleInputmentees">
              <option selected="">الموصى به</option>
              <option value="1">الأحدث</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column gap-3">
      <div className="py-4 d-flex flex-column gap-3 border-bottom">
        <div className="d-flex flex-row justify-content-between align-items-md-center">
          <div className="d-flex flex-row gap-3 align-items-center">
            {/* img */}
            <div>
              <img src="../assets/images/avatar/avatar-1.jpg" alt="صورة الأول" className="avatar avatar-lg rounded-circle" />
            </div>
            <div>
              {/* heading */}
              <h4 className="mb-1">حسين علي</h4>
              <div className="d-flex flex-md-row flex-column gap-md-2 align-items-md-center lh-1">
                {/* icons */}
                <span>
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
                {/* text */}
                <span>
                  <small className="fw-medium">9 سبتمبر 2024</small>
                </span>
              </div>
            </div>
          </div>
          <div>
            <small>الخطة:</small>
            <small className="border-bottom">شهر واحد</small>
          </div>
        </div>
        {/* para */}
        <div>
          <p className="mb-0">
            كان المعلم ذو المعرفة الواسعة حقًا وحل جميع شكوكي بشأن تكنولوجيا الأساس والمهنة أيضًا... إذا كنت محتارًا حقًا أو تحتاج إلى معرفة كيفية بدء حياتك المهنية في تطوير وتحليل البيانات، فعليك أن تجرب جلسة مع السيد... ستساعدك حقًا.
          </p>
        </div>
        {/* link */}
      </div>
      <div className="py-4 d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-row justify-content-between align-items-md-center">
            <div className="d-flex flex-row gap-3 align-items-center">
              {/* img */}
              <div>
                <img src="../assets/images/avatar/avatar-2.jpg" alt="صورة الثاني" className="avatar avatar-lg rounded-circle" />
              </div>
              <div>
                {/* heading */}
                <h4 className="mb-1">حسين علي</h4>
                <h4 className="mb-1">سمية عبد الله</h4>

                <div className="d-flex flex-md-row flex-column gap-md-2 align-items-md-center lh-1">
                  {/* -icons */}
                  <span>
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
                  {/* -text */}
                  <span>
                    <small className="fw-medium">5 سبتمبر 2024</small>
                  </span>
                </div>
              </div>
            </div>
            <div>
              {/* -small */}
              <small>الخطة:</small>
              <small className="border-bottom">6 شهور</small>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-0">
            كان المرشد خبيرًا حقًا وحل كل شكوكي بخصوص التكنولوجيا الأساسية والمهنة أيضًا. إذا كنت حقًا مشتتًا أو تحتاج إلى معرفة كيفية بدء حياتك المهنية في تحليل البيانات، فإن الجلسة معه ستساعدك حقًا.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


              </div>
            </div>
            <div className="col-xl-4 col-12">
              {/* card */}
              <div className="card">
                {/* card body */}
                <div className="card-body px-md-5 pt-2">
  {/* nav tab */}
  <ul className="nav nav-lb-tab mb-4" id="tab" role="tablist">
    <li className="nav-item ms-0" role="presentation">
      <a className="nav-link active" id="membership-tab" data-bs-toggle="pill" href="#membership" role="tab" aria-controls="membership" aria-selected="true">خطة العضوية</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="session-tab" data-bs-toggle="pill" href="#session" role="tab" aria-controls="session" aria-selected="false" tabIndex="-1">الجلسات</a>
    </li>
  </ul>
  <div className="tab-content" id="tabContent">
    <div className="tab-pane fade show active" id="membership" role="tabpanel" aria-labelledby="membership-tab">
      <div className="d-flex flex-column gap-4">
        {/* heading */}
        <h3 className="mb-0">
          احجز جلسة تجريبية مجانية
          <span className="text-success mx-2">1:1</span>
          : لتخطيط رحلتك مع المرشد محمد 
        </h3>
        <div className="d-flex flex-column gap-3">
          {/* content */}
          <div className="d-flex flex-column gap-1">
            <span>تبدأ من</span>
            <div className="d-flex flex-row align-items-center gap-1">
              <h3 className="mb-0 h2">$125.00</h3>
              <small className="text-gray-800 fw-medium">/ الشهر</small>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            {/* heading */}
            <div>
              <h4 className="mb-1">كل شهر من الإرشاد</h4>
            </div>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              <li className="d-flex flex-row gap-2">
                {/* icon */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-video text-primary" viewBox="0 0 16 16">
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"></path>
                  </svg>
                </span>
                {/* text */}
                <span>1 جلسة/الأسبوع&nbsp;(جلسات 1:1)</span>
              </li>
              <li className="d-flex flex-row gap-2">
                {/* icon */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill text-primary" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                  </svg>
                </span>
                {/* text */}
                <span>خلال 12 ساعة&nbsp;(دعم الدردشة)</span>
              </li>
              <li className="d-flex flex-row gap-2">
                {/* icon */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task text-primary" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"></path>
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"></path>
                    <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"></path>
                  </svg>
                </span>
                {/* text */}
                <span>كل يوم&nbsp;(المهام والمتابعة)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          <a href="#!" className="btn btn-primary d-grid" data-bs-toggle="modal" data-bs-target="#signupModal">احجز جلسة تجريبية مجانية</a>
          <span className="text-success fw-medium">الموعد التالي المتاح:&nbsp;الثلاثاء 5 يونيو 2025</span>
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="session" role="tabpanel" aria-labelledby="session-tab">
      <div className="d-flex flex-column gap-4">
        <div className="list-group">
          <div className="list-group-item list-group-item-action p-3" aria-current="true">
            {/* form */}
            <div className="form-check">
              <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <span className="d-flex flex-column">
                  <span className="fs-5 text-dark fw-semibold">مكالمة تعريفية</span>
                  <span className="">20 دقيقة، $39 للجلسة</span>
                </span>
              </label>
            </div>
          </div>
          <div className="list-group-item list-group-item-action p-3">
            {/* form */}
            <div className="form-check">
              <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span className="d-flex flex-column">
                  <span className="fs-5 text-dark fw-semibold">مكالمة استشارية</span>
                  <span className="">40 دقيقة، $69 للجلسة</span>
                </span>
              </label>
            </div>
          </div>
          <div className="list-group-item list-group-item-action p-3">
            {/* form */}
            <div className="form-check">
              <input className="form-check-input mt-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                <span className="d-flex flex-column">
                  <span className="fs-5 text-dark fw-semibold">اسم الجلسة مع المكالمة</span>
                  <span className="">30 دقيقة، $89 للجلسة</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="d-grid">
          <a href="#!" className="btn btn-primary">احجز الآن</a>
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
      
    </main>
  )
}

export default page