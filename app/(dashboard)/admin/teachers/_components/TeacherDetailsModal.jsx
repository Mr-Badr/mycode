import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './TeacherDetailsModal.module.css'; // Adjust the path as needed

const TeacherDetailsModal = ({ show, onClose, teacher }) => {
  if (!teacher) return null;

  const formatDate = (date) => date ? new Date(date).toLocaleDateString('ar-EG') : 'غير متوفر';

  return (
    <Modal show={show} onHide={onClose} dialogClassName={styles.modalContent}>
      <Modal.Header closeButton>
        <h2>{`${teacher.first_name} ${teacher.last_name}`}</h2>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.section}>
          <h3>السيرة الذاتية</h3>
          <p>{teacher.bio || 'غير متوفر'}</p>
        </div>
        <div className={styles.section}>
          <h3>معدل الأجر بالساعة</h3>
          <p>{teacher.hourly_rate ? `${teacher.hourly_rate} دينار` : 'غير متوفر'}</p>
        </div>
        <div className={styles.section}>
          <h3>تاريخ الميلاد</h3>
          <p>{formatDate(teacher.user?.date_birth)}</p>
        </div>
        <div className={styles.section}>
          <h3>رقم الهاتف</h3>
          <p>{teacher.user?.phone || 'غير متوفر'}</p>
        </div>
        <div className={styles.section}>
          <h3>البريد الإلكتروني</h3>
          <p>{teacher.user?.email || 'غير متوفر'}</p>
        </div>
        <div className={styles.section}>
          <h3>العنوان</h3>
          <p>{teacher.user?.address || 'غير متوفر'}</p>
        </div>
        <div className={styles.section}>
          <h3>المدينة</h3>
          <p>{teacher.user?.city || 'غير متوفر'}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeacherDetailsModal;
