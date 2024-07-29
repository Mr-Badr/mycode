import React from 'react';

const LiveBroadcastPopup = ({ show, handleClose }) => {
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
              <div className="modal-title tajawal-bold">إنشاء بث مباشر</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">عنوان البث</label>
                    <input
                      placeholder="أدخل عنوان البث المباشر"
                      required=""
                      type="text"
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">المحاضر</label>
                    <input
                      placeholder="اسم المحاضر"
                      required=""
                      type="text"
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">تاريخ البث</label>
                    <div className="input-group">
                      <input
                        className="form-control flatpickr flatpickr-input"
                        placeholder="حدد تاريخ البث"
                        aria-describedby="basic-addon2"
                        readOnly=""
                        type="text"
                        style={{ borderRadius: "0px 5px 5px 0px" }}
                      />
                      <span className="input-group-text" id="basic-addon2" style={{ borderRadius: "5px 0px 0px 5px" }}>
                        <i className="fe fe-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">رابط البث المباشر</label>
                    <input
                      placeholder="أدخل رابط البث المباشر (مثال: https://example.com)"
                      required=""
                      type="text"
                      id="text"
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">وصف البث</label>
                    <textarea
                      placeholder="أدخل وصفاً للبث المباشر"
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
              <button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إلغاء</button>
              <button type="button" className="btn btn-primary w-20">إنشاء</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveBroadcastPopup;
