import React from 'react'

function CTA() {
  return (
    <section className="py-8 bg-gray-200">
  <div className="container my-lg-8">
    <div className="row">
      <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
        <span className="fs-4 ls-md text-uppercase fw-semibold" style={{
                  color: '#e82782',
                }}>اكتشف تجربة جديدة</span>
        <h2 className="display-3 mt-4 mb-3 fw-bold">انضم إلينا في رحلة التعلم الممتعة</h2>
        <p className="lead px-lg-8 mb-6">صمم لتلبية احتياجات الطلاب والمعلمين والأهل، يقدم لك تجربة فريدة ومتميزة لتعليم أفضل</p>
        <a href="/auth/register" className="btn btn-primary">ابدأ الآن مجانًا</a>
      </div>
    </div>
  </div>
</section>

  )
}

export default CTA