import React from 'react';

const mentorsData = [
  {
    id: 1,
    name: ' أحمد بن الشريف',
    imageSrc: '../assets/images/teachers/4.jpg',
    jobTitle: 'مهندس برمجيات',
    company: '@ مايكروسوفت',
    experience: '5 سنوات خبرة',
    bio: 'لوريم ايبسوم دولور سيت اميت, كونسيتيتور اديبيسسينغ ايليت. نام ليجولا مانغا, جرافيدا ايد سوسسيبيت فيتا, كونديمنتوم اك ماوريس.',
    skills: ['تطوير الواجهة الأمامية', 'Devops', 'مصمم UI/UX', 'علوم البيانات', 'Full Stack', 'الواجهة الخلفية', 'محلل بيانات'],
    rating: 5.0,
    reviews: 16,
    mentees: 40,
    price: 125.00,
    nextAvailable: 'الثلاثاء 05 يونيو 2025',
    sessionFrequency: 'جلسة واحدة/الأسبوع (جلسات 1:1)',
    chatSupport: 'في غضون 12 ساعة (دعم الدردشة)',
    tasksFollowup: 'كل يوم (متابعة المهام)'
  },
  // Add more mentors as needed
  {
    id: 2,
    name: ' مصطفى مراردة',
    imageSrc: '../assets/images/teachers/1.jpg',
    jobTitle: 'دور آخر',
    company: '@ شركة أخرى',
    experience: '3 سنوات خبرة',
    bio: 'لوريم ايبسوم دولور سيت اميت, كونسيتيتور اديبيسسينغ ايليت. نام ليجولا مانغا, جرافيدا ايد سوسسيبيت فيتا, كونديمنتوم اك ماوريس.',
    skills: ['مهارة 1', 'مهارة 2', 'مهارة 3'],
    rating: 4.5,
    reviews: 10,
    mentees: 20,
    price: 100.00,
    nextAvailable: 'الإثنين 04 يونيو 2025',
    sessionFrequency: '2 جلسات/الأسبوع (جلسات جماعية)',
    chatSupport: 'في غضون 24 ساعة (دعم الدردشة)',
    tasksFollowup: 'أسبوعياً (متابعة المهام)'
  },
  {
    id: 3,
    name: ' عمر إدريس',
    imageSrc: '../assets/images/teachers/3.jpg',
    jobTitle: 'دور ثالث',
    company: '@ شركة ثالثة',
    experience: '7 سنوات خبرة',
    bio: 'لوريم ايبسوم دولور سيت اميت, كونسيتيتور اديبيسسينغ ايليت. نام ليجولا مانغا, جرافيدا ايد سوسسيبيت فيتا, كونديمنتوم اك ماوريس.',
    skills: ['مهارة أ', 'مهارة ب', 'مهارة ج'],
    rating: 4.8,
    reviews: 25,
    mentees: 30,
    price: 150.00,
    nextAvailable: 'الأربعاء 06 يونيو 2025',
    sessionFrequency: '3 جلسات/الأسبوع (جلسات 1:1)',
    chatSupport: 'في غضون 6 ساعات (دعم الدردشة)',
    tasksFollowup: 'كل يوم (متابعة المهام)'
  }
];

const MentorCard = ({ mentor }) => (
  <div className="row border rounded-3 g-0 mb-3">
    <div className="col-xxl-9 col-xl-8 col-12">
      <div className="row p-lg-5 p-4 gy-5">
        <div className="col-xl-3 col-md-3">
          <div>
            <a href="./mentor-single.html">
              <img src={mentor.imageSrc} alt={mentor.name} className="img-fluid w-100 rounded-3" />
            </a>
          </div>
        </div>
        <div className="col-xl-9 col-md-9">
          <div className="d-flex flex-column gap-4">
            <div>
              <div className="d-flex flex-row align-items-center gap-2">
                <h3 className="mb-0 h2">
                  <a href="./mentor-single.html" className="text-reset">{mentor.name}</a>
                </h3>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
                  </svg>
                </span>
              </div>
              <span className="fw-medium">{mentor.jobTitle}</span>
            </div>
            <div>
              <span>{mentor.company}</span>
              <div className="vr mx-2 text-gray-200"></div>
              <span>{mentor.experience}</span>
            </div>
            <div className="d-none d-md-block">
              <p className="mb-0 pr-xl-5 pr-xxl-8">{mentor.bio}</p>
            </div>
            <div className="gap-2 d-flex flex-wrap">
              {mentor.skills.map((skill, index) => (
                <a key={index} href="./mentor-list.html" className="btn btn-tag btn-sm">{skill}</a>
              ))}
            </div>
            <div className="d-flex flex-row align-items-center gap-4">
              <div className="d-flex flex-row gap-2 lh-1 align-items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star-fill text-warning align-baseline" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </span>
                <span>
                  <span className="text-dark fw-bold">{mentor.rating}&nbsp;</span>
                  ({mentor.reviews}&nbsp;مراجعة)
                </span>
              </div>
              <div className="d-flex flex-row gap-2 lh-1 align-items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-people-fill text-primary align-baseline" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                  </svg>
                </span>
                <span>
                  <span className="text-dark fw-bold">{mentor.mentees}&nbsp;</span>
                  طالب
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xxl-3 col-xl-4 col-12">
      <div className="p-lg-5 p-4 bg-light d-flex flex-column gap-3 rounded-end-xl-3 rounded-bottom-xl-0 rounded-bottom-md-3 h-100">
        {/* content */}
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-1">
            <span>إبتداءً من</span>
            <div className="d-flex flex-row align-items-center gap-1">
              <h3 className="mb-0 h2">${mentor.price}</h3>
              <small>/ ساعة</small>
            </div>
          </div>
          {/* button */}
          <div className="d-flex d-xl-grid gap-2">
            <a href="/formations/formations-single" data-bs-toggle="modal" data-bs-target="#signupModal" className="btn btn-outline-primary w-50 w-xl-100">عرض تفاصيل الدورة</a>
            <a href="/formations/teacher-profile" className="btn btn-outline-secondary w-50 w-xl-100">عرض الملف الشخصي للمعلم</a>
          </div>

          <div>
            <span className="text-success fw-medium">المتاحة التالية:&nbsp;الثلاثاء 5 يونيو 2025</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          {/* heading */}
          <div>
            <h4 className="mb-0">كل شهر من الإرشاد</h4>
          </div>
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {/* list */}
            <li className="d-flex flex-row gap-2 lh-1 align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
                  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"></path>
                </svg>
              </span>
              <span>جلسة واحدة / الأسبوع (جلسات 1:1)</span>
            </li>
            {/* list */}
            <li className="d-flex flex-row gap-2 lh-1 align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                </svg>
              </span>
              <span>في غضون 12 ساعة (دعم الدردشة)</span>
            </li>
            {/* list */}
            <li className="d-flex flex-row gap-2 lh-1 align-items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"></path>
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"></path>
                  <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"></path>
                </svg>
              </span>
              <span>كل يوم (مهام ومتابعة)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);

const MentorsSection = () => (
  <section id="mentors" className="py-5" dir='rtl'>

    <div className="container" style={{ marginTop: "7rem", marginBottom: "7rem" }}>
      <h1 className="text-center tajawal-bold">الأساتذة و الدورات</h1>
      <p className="text-center">استكشف المدربين و الدورات المتاحة لدينا واختر ما ترغب في رؤيته أو الانضمام إليه.</p>
      <div className="row g-4" style={{ marginTop: "4rem" }}>
        {mentorsData.map((mentor) => (
          <div key={mentor.id} className="col-md-6 col-lg-12">
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MentorsSection;
