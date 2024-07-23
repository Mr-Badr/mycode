import React from 'react';

const VideoLessonPopup = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div
        role="dialog"
        aria-modal="true"
        className={`fade modal ${show ? 'show' : ''}`}
        tabIndex="-1"
        style={{ display: show ? 'block' : 'none' }}
      >
        <div style={{
          width: "auto",
          margin: "1.75rem",
          transform: "none",
          transition: "transform .3s ease-out",
          marginLeft: "auto",
          marginRight: "auto",
          pointerEvents: "none",
          position: "relative",
          maxWidth: "1000px",
          paddingTop: "8%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">إنشاء درس فيديو</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">المحاضر</label>
                    <input
                      placeholder="المحاضر"
                      required=""
                      type="text"
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">التاريخ</label>
                    <div className="input-group">
                      <input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readOnly="" type="text" style={{ borderRadius: "0px 5px 5px 0px" }} />
                      <span className="input-group-text" id="basic-addon2" style={{ borderRadius: "5px 0px 0px 5px" }}>
                        <i className="fe fe-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">المادة</label>
                    <select className="form-select">
                      <option value="math">الرياضيات</option>
                      <option value="english">الإنجليزية</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">رابط الفيديو</label>
                    <input
                      placeholder="أدخل رابط الفيديو (مثال: https://example.com)"
                      required=""
                      type="text"
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12">
                    <label className="form-label">الوصف</label>
                    <textarea
                      placeholder="الوصف الكامل"
                      required=""
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" dir='ltr'>
              <button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إغلاق</button>
              <button type="button" className="btn btn-primary w-20" onClick={handleClose}>إنشاء</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoLessonPopup;
