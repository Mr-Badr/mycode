import React from 'react';

const DeleteTeacherModal = ({ showDeleteModal, handleCloseDeleteModal, confirmDelete }) => {
  return (
    <>
      {showDeleteModal && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div role="dialog" aria-modal="true" className={`fade modal ${showDeleteModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div style={{
          width: "auto",
          margin: "1.75rem",
          transform: "none",
          transition: "transform .3s ease-out",
          marginLeft: "auto",
          marginRight: "auto",
          pointerEvents: "none",
          position: "relative",
          maxWidth: "30%",
          paddingTop: "10%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تأكيد الحذف</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseDeleteModal}></button>
            </div>
            <div className="modal-body">
              <p>هل أنت متأكد أنك تريد الحذف؟</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary w-20" onClick={handleCloseDeleteModal}>إلغاء</button>
              <button type="button" className="btn btn-danger w-20" onClick={confirmDelete}>حذف</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTeacherModal;
