import React from 'react';

const StudentModal = ({ show, handleCloseModal, selected, handleInputChange, handleSaveClick }) => {
  return (
    <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">تعديل الطالب</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">الاسم الأول</label>
                <input type="text" className="form-control" name="first_name" value={selected.first_name} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">الاسم الأخير</label>
                <input type="text" className="form-control" name="last_name" value={selected.last_name} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">السيرة الذاتية</label>
                <textarea className="form-control" name="bio" value={selected.bio} onChange={handleInputChange}></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">الأجرة بالساعة</label>
                <input type="text" className="form-control" name="hourly_rate" value={selected.hourly_rate} onChange={handleInputChange} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>إغلاق</button>
            <button type="button" className="btn btn-primary" onClick={handleSaveClick}>حفظ التغييرات</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
