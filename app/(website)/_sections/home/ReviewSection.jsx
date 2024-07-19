import React from 'react';

const reviews = [
  {
    id: 1,
    reviewer: "أحمد عبد الله",
    role: "طالب",
    text: "لقد كانت الدروس ممتازة للغاية! لقد تعلمت الكثير وأنا ممتن لكل ما قدمه لنا المعلم.",
    mentor: {
      name: "محمود علي",
      title: "معلم الرياضيات",
      company: "مدرسة المعرفة"
    },
    reviewerImg: "../assets/images/avatar/avatar-1.jpg",
    mentorImg: "../assets/images/avatar/avatar-10.jpg"
  },
  {
    id: 2,
    reviewer: "فاطمة الزهراء",
    role: "ولي أمر",
    text: "أطفالنا يستمتعون حقًا بالحصص الحية والدورات. التعليم هنا منظم بشكل جيد.",
    mentor: {
      name: "أسماء خليل",
      title: "معلمة العلوم",
      company: "مدرسة النجاح"
    },
    reviewerImg: "../assets/images/avatar/avatar-7.jpg",
    mentorImg: "../assets/images/avatar/avatar-8.jpg"
  },
  {
    id: 3,
    reviewer: "خالد أحمد",
    role: "طالب",
    text: "التفاعل مع المعلمين كان رائعًا. الدروس كانت مفيدة جدًا.",
    mentor: {
      name: "يوسف علي",
      title: "معلم البرمجة",
      company: "مدرسة المستقبل"
    },
    reviewerImg: "../assets/images/avatar/avatar-2.jpg",
    mentorImg: "../assets/images/avatar/avatar-4.jpg"
  },
  {
    id: 4,
    reviewer: "منى حسن",
    role: "ولي أمر",
    text: "لقد لاحظنا تحسنًا كبيرًا في أداء أطفالنا بعد الانضمام إلى هذه الدورات.",
    mentor: {
      name: "نادية مصطفى",
      title: "معلمة اللغة الإنجليزية",
      company: "مدرسة الأمل"
    },
    reviewerImg: "../assets/images/avatar/avatar-9.jpg",
    mentorImg: "../assets/images/avatar/avatar-10.jpg"
  },
  {
    id: 5,
    reviewer: "علي محمد",
    role: "معلم",
    text: "من الرائع أن أكون جزءًا من هذه المدرسة. التعاون بين الطلاب والمعلمين مذهل.",
    mentor: {
      name: "سارة خالد",
      title: "مديرة المدرسة",
      company: "مدرسة التفوق"
    },
    reviewerImg: "../assets/images/avatar/avatar-5.jpg",
    mentorImg: "../assets/images/avatar/avatar-6.jpg"
  },
  {
    id: 6,
    reviewer: "ليلى عبد الرحمن",
    role: "طالبة",
    text: "الدورات هنا شيقة للغاية، وأحببت كيفية تقديم المعلمين للمواد.",
    mentor: {
      name: "هند فؤاد",
      title: "معلمة الفنون",
      company: "مدرسة الإبداع"
    },
    reviewerImg: "../assets/images/avatar/avatar-11.jpg",
    mentorImg: "../assets/images/avatar/avatar-12.jpg"
  }
];

const ReviewSection = () => {
  return (
    <section className="bg-dark-primary py-lg-8 py-6" dir='rtl'>
      <div className="container py-lg-6">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2 col-12">
            <div className="text-center mb-6 d-flex flex-column gap-2">
              <h1 className="mb-0 text-white">الحب والثناء من الطلاب وأولياء الأمور والمعلمين</h1>
              <p className="mb-0 text-white">
                لقد قدمنا التوجيه الشخصي لآلاف الطلاب والمهنيين والمديرين التنفيذيين. والأفضل من ذلك، أنهم تركوا تقييمًا قدره 4.9 من 5 لمعلمينا.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {reviews.map(review => (
            <div key={review.id} className="col-lg-4 col-12 d-flex flex-column gap-4">
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="card card-light-primary rounded-3">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex flex-row gap-3 align-items-center">
                      <img src={review.reviewerImg} alt="avatar" className="avatar avatar-md rounded-circle" />
                      <h5 className="mb-0">{review.reviewer}</h5>
                    </div>
                    <div>
                      <p className="mb-0 fst-italic fs-4 pe-xxl-5">
                        {review.text}
                      </p>
                    </div>
                    <div className="d-flex flex-row gap-2 align-items-center bg-light rounded-3 px-3 py-2">
                      <img src={review.mentorImg} alt="avatar" className="avatar avatar-md rounded-circle d-lg-none d-md-block d-xl-block" />
                      <div>
                        <div className="d-flex flex-row gap-2 align-items-center">
                          <h4 className="mb-0">{review.mentor.name}</h4>
                          <span className="fs-6 px-2 text-success-emphasis bg-success-subtle border border-success rounded-3">{review.mentor.title}</span>
                        </div>
                        <span className="fs-6">{review.mentor.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
