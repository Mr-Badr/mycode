import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section className="py-8 bg-gray-200" style={{
      background: 'url(../../assets/images/background/course-graphics.svg) no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top center'
    }}>
      <div className="container my-lg-8" dir='rtl'>
        <div className="row justify-content-center text-center">
          <div className="col-md-9 col-12">
            <h2 className="display-4">
            مستقبلك يبدأ هنا
            </h2>
            <p className="lead px-lg-8 mb-6">
            نؤمن بأن التعليم هو مفتاح النجاح في المستقبل، لذا نحرص على تقديم برامج تعليمية متميزة تتناسب مع احتياجات جميع المتعلمين.
            </p>
            <div className="d-grid d-md-block">
              <Link href="/auth/login" className="btn btn-info mx-1">تسجيل الدخول الآن</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero