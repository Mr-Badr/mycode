import Image from "next/image";

const ContactInfo = async () => {
  return (
    <section className="text-center bg-white" style={{ paddingTop: '5rem', paddingBottom: '5rem' }} dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="mb-6 mb-lg-8">
              <h2 className="tajawal-bold tajawal-bold">
                ابدأ رحلتك مع
                <u className="text-warning">
                  <span className="text-primary mx-2">CLIC SCHOOL</span>
                </u>
              </h2>
              <h2 className="tajawal-bold tajawal-bold">
                تواصل معنا لبدء تحقيق أهدافك اليوم
              </h2>
              <p className="mb-0 lead">
                اكتشف الفرص الغير محدودة! اتصل بنا الآن للبدء في تحويل أفكارك إلى واقع، والوصول إلى خبرتنا المتخصصة لمساعدتك في تحقيق أهدافك بكل ثقة ونجاح
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 col-12 cursor-pointer">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/map.avif"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body" dir="ltr">
                <h3 className="mb-3 tajawal-bold">
                  البريد الإلكتروني
                </h3>
                clicschoolsba@gmail.com
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 col-12 cursor-pointer">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/phone1.avif"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body" dir="ltr">
                <h3 className="mb-3 tajawal-bold">
                  خدمة الواتساب
                </h3>
                +213 541 60 24 59
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 col-12 cursor-pointer">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/email.avif"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body" dir="ltr">
                <h3 className="mb-3 tajawal-bold">
                  للاتصال والاستفسار
                </h3>
                +213 541 60 24 59
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactInfo;
