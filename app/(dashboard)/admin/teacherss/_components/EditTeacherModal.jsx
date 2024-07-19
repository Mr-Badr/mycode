// EditTeacherModal.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure

const EditTeacherModal = ({ show, onClose, teacher, onSave }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: '',
    slug: '',
    image: null, // Change image to null initially
    user: {
      name: '',
      username: '',
      email: '',
      date_birth: '',
      phone: '',
      address: '',
      city: '',
      is_active: true,
      sexe: 'male'
    }
  });

  useEffect(() => {
    if (teacher) {
      setFormData({
        first_name: teacher.first_name || '',
        last_name: teacher.last_name || '',
        bio: teacher.bio || '',
        hourly_rate: teacher.hourly_rate || '',
        slug: teacher.slug || '',
        image: null, // Reset image to null when teacher is set
        user: {
          name: teacher.user?.name || '',
          username: teacher.user?.username || '',
          email: teacher.user?.email || '',
          date_birth: formatDateForInput(teacher.user?.date_birth) || '',
          phone: teacher.user?.phone || '',
          address: teacher.user?.address || '',
          city: teacher.user?.city || '',
          is_active: teacher.user?.is_active || true,
          sexe: teacher.user?.sexe || 'male'
        }
      });
    }
  }, [teacher]);

  const formatDateForInput = (date) => {
    if (!date) return '';
    const [year, month, day] = new Date(date).toISOString().split('T')[0].split('-');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        image: files[0] // Set the selected file
      });
    } else if (name in formData) {
      setFormData({ ...formData, [name]: value });
    } else if (name.startsWith('user.')) {
      const userField = name.substring(5); // Extract field name after 'user.'
      setFormData({
        ...formData,
        user: { ...formData.user, [userField]: value }
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const updatedTeacher = { ...teacher, ...formData };
      
      const formDataToSend = new FormData();
      for (const key in updatedTeacher) {
        if (key === 'image' && updatedTeacher[key]) {
          formDataToSend.append('image', updatedTeacher[key]); // Append file if it exists
        } else if (typeof updatedTeacher[key] === 'object') {
          for (const subKey in updatedTeacher[key]) {
            formDataToSend.append(`user[${subKey}]`, updatedTeacher[key][subKey]);
          }
        } else {
          formDataToSend.append(key, updatedTeacher[key]);
        }
      }

      await axiosInstance.put(`/teachers/${teacher.id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onSave(updatedTeacher);
      onClose();
    } catch (error) {
      console.error('Error updating teacher:', error);
    }
  };
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>تعديل المعلم</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">Slug</label>
            <input
              type="text"
              id="slug"
              name="slug"
              className="form-control"
              value={formData.slug}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">تحميل صورة</label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <hr />
          <h5>معلومات المستخدم</h5>
          <div className="mb-3">
            <label htmlFor="user.name" className="form-label">الاسم</label>
            <input
              type="text"
              id="user.name"
              name="user.name"
              className="form-control"
              value={formData.user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.username" className="form-label">اسم المستخدم</label>
            <input
              type="text"
              id="user.username"
              name="user.username"
              className="form-control"
              value={formData.user.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.email" className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              id="user.email"
              name="user.email"
              className="form-control"
              value={formData.user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.date_birth" className="form-label">تاريخ الميلاد</label>
            <input
              type="date"
              id="user.date_birth"
              name="user.date_birth"
              className="form-control"
              value={formData.user.date_birth}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.phone" className="form-label">رقم الهاتف</label>
            <input
              type="text"
              id="user.phone"
              name="user.phone"
              className="form-control"
              value={formData.user.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.address" className="form-label">العنوان</label>
            <input
              type="text"
              id="user.address"
              name="user.address"
              className="form-control"
              value={formData.user.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user.city" className="form-label">المدينة</label>
            <input
              type="text"
              id="user.city"
              name="user.city"
              className="form-control"
              value={formData.user.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="user.is_active"
              name="user.is_active"
              className="form-check-input"
              checked={formData.user.is_active}
              onChange={() => setFormData({
                ...formData,
                user: { ...formData.user, is_active: !formData.user.is_active }
              })}
            />
            <label htmlFor="user.is_active" className="form-check-label">نشط</label>
          </div>
          <div className="mb-3">
            <label htmlFor="user.sexe" className="form-label">الجنس</label>
            <select
              id="user.sexe"
              name="user.sexe"
              className="form-select"
              value={formData.user.sexe}
              onChange={handleChange}
            >
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
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
