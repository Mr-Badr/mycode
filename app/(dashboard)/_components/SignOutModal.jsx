import React from 'react';

const SignOutModal = ({ show, handleClose }) => {
  return (
    <>
      {show && <div className="fade modal-backdrop show"></div>}
      <div
        role="dialog"
        aria-modal="true"
        className={`fade modal ${show ? "show" : ""}`}
        tabIndex={-1}
        style={{ paddingRight: "17px", display: show ? "block" : "none", marginTop: "18%" }}
      >
        <div className="modal-dialog">
          <div className="modal-content text-start">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تسجيل الخروج</div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="row">
                  <div className="col-12">
                    <h2>هل تريد تسجيل الخروج ؟</h2>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" dir='ltr'>
              <button
                type="button"
                className="btn btn-secondary w-20"
                onClick={handleClose}
              >
                إغلاق
              </button>
              <button
                type="button"
                className="btn btn-danger w-20"
              >
                تأكيد
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOutModal;
