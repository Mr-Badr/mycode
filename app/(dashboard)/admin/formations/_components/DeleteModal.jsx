import React from 'react';

const DeleteModal = ({ showDeleteModal, handleCloseDeleteModal, confirmDelete }) => (
  showDeleteModal && (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">حذف</h5>
            <button type="button" className="close" onClick={handleCloseDeleteModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>هل أنت متأكد أنك تريد حذف هذا العنصر؟</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>إغلاق</button>
            <button type="button" className="btn btn-danger" onClick={confirmDelete}>حذف</button>
          </div>
        </div>
      </div>
    </div>
  )
);

export default DeleteModal;
