import React from "react";

// Define an array of objects containing card data
const cardData = [
  {
    title: "تحقيق تجربة تعليمية مبتكرة وممتعة",
    description:
      "نحن نسعى جاهدين لتوفير تجربة تعليمية فريدة ومبتكرة تلهم الطلاب وتحفزهم على التعلم بشغف وإبداع. من خلال استخدام أحدث التقنيات وتطبيق أساليب تعليمية ممتعة وتفاعلية، نسعى لجعل رحلة التعلم مثيرة وممتعة للجميع.",
      image: "../../assets/images/teachers/24.jpeg",
    },
  {
    title: "توفير تعليم عالي الجودة لكافة التلاميذ بغض النظر عن مكان تواجدهم",
    description:
      "نحن ملتزمون بتوفير فرص تعليمية متساوية وعالية الجودة لجميع الطلاب، بغض النظر عن مكان تواجدهم أو خلفيتهم الثقافية. نسعى جاهدين لتحقيق الوصول المتساوي إلى التعليم وتقديم تجارب تعلم شاملة تلبي احتياجات الطلاب المختلفة.",
      image: "../../assets/images/teachers/21.jpeg",
    },
  {
    title: "المساهمة في تكافؤ الفرص",
    description:
      "نحن نعمل على المساهمة في تعزيز تكافؤ الفرص التعليمية من خلال توفير بيئة تعليمية شاملة ومتنوعة تتيح للجميع فرصة الوصول إلى التعليم على السواء. نسعى جاهدين لتقديم فرص تعليمية تساعد على تحقيق النجاح لجميع الطلاب بغض النظر عن خلفيتهم الاجتماعية أو الاقتصادية.",
      image: "../../assets/images/teachers/22.jpeg",
    },
];

function Section1() {
  return (
    <section className="py-8" dir="rtl">
      <div className="container my-lg-8">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 mb-6">
            <h2 className="display-4 mb-3 tajawal-bold">أهدافنا</h2>
            <p className="lead">
              هل تبحث عن تجربة تعليمية مميزة تحفزك على تحقيق أهدافك؟ انضم إلينا
              اليوم واحصل على فرصة لا مثيل لها لاستكشاف عالم التعلم عبر
              الإنترنت. انطلق في رحلة تعليمية فريدة، حيث تجد الدعم والإلهام
              والفرص لتطوير مهاراتك واكتساب معرفة جديدة. احجز الآن للانضمام إلى
              مجتمعنا المثير وابدأ في بناء مستقبلك الأكاديمي بثقة ونجاح!
            </p>
          </div>
        </div>
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={`Image ${index + 1}`}
                />
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.description}</p>
                </div>
                {/* <div className="card-footer">
                  <a href="#!" className="btn btn-light-primary text-primary">
                    إكتشف المزيد
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section1;
