import React from "react";

function Section3() {
  return (
    <section className="pb-14 bg-white" dir="rtl" style={{
			paddingBottom: "6.5rem"
		}}>
      <div className="container">
        <div className="row">
          <div className="border-top-md border-bottom border-end-md  col-lg-3 col-md-6">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-award fs-2 text-info"> </i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">50+</h2>
                <span className="text-dark tajawal-bold" >أستاذ متخصص</span>
              </div>
            </div>
          </div>
          <div className="border-top-md border-bottom border-end-lg  col-lg-3 col-md-6">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-users fs-2 text-warning"> </i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">200+</h2>
                <span className="text-dark tajawal-bold" >دروس و ملخصات</span>
              </div>
            </div>
          </div>
          <div className="border-top-lg border-bottom border-end-md  col-lg-3 col-md-6">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-tv fs-2 text-primary"> </i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">160+</h2>
                <span className="text-dark tajawal-bold" >دروس مسجلة</span>
              </div>
            </div>
          </div>
          <div className="border-top-lg border-bottom  col-lg-3 col-md-6">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-film fs-2 text-success"> </i>
              </div>
              <div className="lh-1">
                <h2 className="mb-1">179+</h2>
                <span className="text-dark tajawal-bold" >فيديوهات أون لاين</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
