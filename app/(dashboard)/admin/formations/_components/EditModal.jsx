import React from 'react';

const EditModal = ({
  showEditModal,
  handleCloseEditModal,
  handleSaveClick,
  selected,
  selectedFormationType,
  handleFormationTypeChange,
  formationTypes,
  handleInputChange,
  handleImageChange,
  handleDateChange,
}) => {
  // Only render the modal if showEditModal is true
  if (!showEditModal) return null;

  return (
    <>
    {showEditModal && (
      <div className="fade modal-backdrop show"></div>
    )}
    <div
      className={`modal fade ${showEditModal ? 'show d-block' : ''}`}
      tabIndex="-1"
      style={{
        marginTop: "5rem"
      }}
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {selected && selected.id ? 'تعديل الدورة' : 'إضافة دورة'}
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseEditModal}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mt-2">
                <label htmlFor="name">الاسم</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={selected?.name || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="formationType">نوع الدورة</label>
                <select
                  id="formationType"
                  className="form-control"
                  value={selectedFormationType || ''}
                  onChange={handleFormationTypeChange}
                  required
                >
                  <option value="">اختر نوع الدورة</option>
                  {formationTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="description">الوصف</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={selected?.description || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="status">الحالة</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={selected?.status || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="date_form">تاريخ الدورة</label>
                <input
                  type="date"
                  className="form-control"
                  id="date_form"
                  name="date_form"
                  value={selected?.date_form || ''}
                  onChange={handleDateChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="image">الصورة</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                />
                {selected?.image && (
                  <img
                    src={selected.image}
                    alt="Preview"
                    className="img-thumbnail mt-2"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseEditModal}
            >
              إغلاق
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveClick}
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default EditModal;
