import React from 'react';

const DeleteConfirmationModal = ({ show, handleCloseModal, confirmDelete }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">تأكيد الحذف</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <p>هل أنت متأكد أنك تريد حذف هذا الطالب؟</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>إلغاء</button>
            <button type="button" className="btn btn-danger" onClick={confirmDelete}>تأكيد الحذف</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
