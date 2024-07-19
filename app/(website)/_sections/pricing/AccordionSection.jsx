"use client"
import React, { useState } from 'react';

const AccordionSection = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionData = [
    {
      title: "هل هناك فترة تجريبية لمدة 14 يومًا؟",
      content: "يتساءل العديد من المستخدمين عن وجود فترة تجريبية لمدة 14 يومًا للتعرف على مميزات التطبيق قبل الاشتراك النهائي"
    },
    {
      title: "ما هي فوائد العضوية المميزة؟",
      content: "تقدم العضوية المميزة فوائد عديدة مثل الوصول إلى محتوى حصري وخدمات إضافية تجعل تجربة المستخدم أكثر تميزًا وفعالية"
    },
    {
      title: "كم من الوقت سأحتاج لتعلم هذا التطبيق؟",
      content: "يتساءل الكثيرون عن الوقت الذي سيحتاجونه لاحتراف استخدام التطبيق واكتساب المهارات اللازمة للاستفادة الكاملة من جميع ميزاته"
    },
    {
      title: "هل هناك دروس مجانية متاحة؟",
      content: "تتوفر دروس مجانية للمستخدمين الجدد لتسهيل عملية التعلم وفهم كيفية استخدام التطبيق بشكل صحيح وفعال"
    }
  ];
  

  return (

    <section className="py-8" dir='rtl'>
				<div className="container my-lg-8">
          
        <div className="row">
      
        <div className="mb-4 mt-6">
        <h2 className="mb-0 fw-semi-bold">الاستفسارات العامة</h2>
        </div>
        <div className="accordion accordion-flush">
          {accordionData.map((item, index) => (
            <div key={index} className={`accordion-item border p-3 rounded-3 mb-2 ${openItem === index ? 'open' : ''}`} dir='ltr'>
              <h3 className="mb-0 fs-4">
                <a
                  aria-expanded={openItem === index}
                  className={`d-flex align-items-center text-inherit text-decoration-none ${openItem === index ? 'text-primary' : ''}`}
                  href="#!"
                  onClick={() => toggleItem(index)}
                >
                  <span className="me-auto">{item.title}</span>
                  <span className="collapse-toggle ms-2">
                    <i className={`fe fe-chevron-down text-muted ${openItem === index ? 'rotate-icon' : ''}`}></i>
                  </span>
                </a>
              </h3>
              <div className={`accordion-collapse ${openItem === index ? 'show text-center' : ''}`}>
                <div className="pt-2 px-0">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
          </div></section>
   
  );
};

export default AccordionSection;
