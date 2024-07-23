"use client";
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import styles from './EditTeacherModal.module.css'; // Import the CSS Module

const EditTeacherModal = ({ show, onClose, teacher, onSave }) => {
  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: '',
    image: null
  });

  useEffect(() => {
    if (teacher) {
      setFormData({
        user_id: teacher.user_id || '',
        first_name: teacher.first_name || '',
        last_name: teacher.last_name || '',
        bio: teacher.bio || '',
        hourly_rate: teacher.hourly_rate || '',
        image: null // Reset image on modal open
      });
    }
  }, [teacher]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        image: files[0]
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === 'image' && formData[key]) {
          formDataToSend.append('image', formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      await axiosInstance.put(`/teachers/${teacher.id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onSave({ ...teacher, ...formData });
      onClose();
    } catch (error) {
      console.error('Error updating teacher:', error);
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" dir="rtl">
      <Modal.Header className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>تعديل المعلم</Modal.Title>
        <Button variant="close" className={styles.closeButton} onClick={onClose} />
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="first_name" className="form-label">الإسم الأول</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="last_name" className="form-label">الإسم الأخير</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="hourly_rate" className="form-label">معدل الأجر بالساعة</label>
              <input
                type="number"
                id="hourly_rate"
                name="hourly_rate"
                className="form-control"
                value={formData.hourly_rate}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="bio" className="form-label">السيرة الذاتية</label>
              <textarea
                id="bio"
                name="bio"
                className="form-control"
                rows="3"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="image" className="form-label">تحميل صورة</label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="secondary" onClick={onClose}>
          إغلاق
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          حفظ التغييرات
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTeacherModal;
