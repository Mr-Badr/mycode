import React, { useState, useEffect } from 'react';

const AddFormationPopup = ({ show, handleClose, formationData }) => {
  const [formData, setFormData] = useState({
    name: '',
    formation_type_id: '',
    description: '',
    image: '',
    status: 'active',
    date_form: '',
  });

  useEffect(() => {
    if (formationData) {
      setFormData({
        name: formationData.name || '',
        formation_type_id: formationData.formation_type_id || '',
        description: formationData.description || '',
        image: formationData.image || '',
        status: formationData.status || 'active',
        date_form: formationData.date_form || '',
      });
    }
  }, [formationData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData here, e.g., send to API
    console.log('Form Data:', formData);
    handleClose(); // Close popup after submission
  };

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
          maxWidth: "800px", // Adjust maxWidth if needed
          paddingTop: "8%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تعديل الدورة</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">اسم الدورة</label>
                    <input
                      id="name"
                      placeholder="اسم الدورة"
                      required
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">نوع الدورة</label>
                    <select
                      id="formation_type_id"
                      className="form-select"
                      value={formData.formation_type_id}
                      onChange={handleChange}
                    >
                      <option value="1">دورة صيفية</option>
                      {/* Add other options as needed */}
                    </select>
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">الوصف</label>
                    <textarea
                      id="description"
                      placeholder="وصف الدورة"
                      required
                      className="form-control"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">رابط الصورة</label>
                    <input
                      id="image"
                      placeholder="رابط الصورة"
                      type="text"
                      className="form-control"
                      value={formData.image}
                      onChange={handleChange}
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">حالة الدورة</label>
                    <select
                      id="status"
                      className="form-select"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                    </select>
                  </div>
                  <div className="mb-3 col-lg-12">
                    <label className="form-label">تاريخ الدورة</label>
                    <input
                      id="date_form"
                      placeholder="حدد تاريخ الدورة"
                      type="date"
                      className="form-control"
                      value={formData.date_form}
                      onChange={handleChange}
                      style={{ textAlign: "right" }}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>إغلاق</button>
                  <button type="submit" className="btn btn-primary">تأكيد</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFormationPopup;
