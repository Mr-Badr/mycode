// components/TeacherDetailsModal.jsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './TeacherDetailsModal.module.css'; // Adjust the path as needed

const TeacherDetailsModal = ({ show, onClose, teacher }) => {
  return (
    <Modal show={show} onHide={onClose} dialogClassName={styles.modalContent}>
      <Modal.Header closeButton>
      <h2>
              {teacher ? `${teacher.first_name} ${teacher.last_name}` : 'تفاصيل المعلم غير متوفرة'}
            </h2>      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {/* Basic Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>البيانات الشخصية:</h3>
          <div className={styles.row}>
            <div className={styles.col}>
              <strong>الإسم:</strong> {teacher ? `${teacher.first_name} ${teacher.last_name}` : 'غير متوفر'}
            </div>
            <div className={styles.col}>
              <strong>البريد الإلكتروني:</strong> {teacher ? teacher.user.email : 'غير متوفر'}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <strong>رقم الهاتف:</strong> {teacher ? teacher.user.phone : 'غير متوفر'}
            </div>
            <div className={styles.col}>
              <strong>تاريخ الميلاد:</strong> {teacher ? new Date(teacher.user.date_birth).toLocaleDateString('ar-EG') : 'غير متوفر'}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <strong>العنوان:</strong> {teacher ? teacher.user.address : 'غير متوفر'}
            </div>
            <div className={styles.col}>
              <strong>المدينة:</strong> {teacher ? teacher.user.city : 'غير متوفر'}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <strong>الحالة:</strong> {teacher ? (teacher.user.is_active ? 'نشط' : 'غير نشط') : 'غير متوفر'}
            </div>
            <div className={styles.col}>
              <strong>الجنس:</strong> {teacher ? (teacher.user.sexe === 'male' ? 'ذكر' : 'أنثى') : 'غير متوفر'}
            </div>
          </div>
        </div>
        
        <hr className={styles.divider} />
        
        {/* Subjects */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>المواد:</h3>
          {teacher && teacher.subjects.length > 0 ? (
            teacher.subjects.map(subject => (
              <div key={subject.id} className={styles.subjectItem}>
                <strong>{subject.name}</strong>
                <p>{subject.description}</p>
                <p><strong>Slug:</strong> {subject.slug}</p>
              </div>
            ))
          ) : (
            <p>لا توجد مواد</p>
          )}
        </div>
        
        <hr className={styles.divider} />
        
        {/* Courses */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>الدروس:</h3>
          {teacher && teacher.teacher_courses.length > 0 ? (
            teacher.teacher_courses.map(courseItem => (
              <div key={courseItem.id} className={styles.courseItem}>
                <p><strong>دورة:</strong> {courseItem.course ? courseItem.course.title : 'غير متوفر'}</p>
                <p><strong>عدد الساعات:</strong> {courseItem.hours}</p>
                <p><strong>تاريخ الإنشاء:</strong> {new Date(courseItem.created_at).toLocaleDateString('ar-EG')}</p>
              </div>
            ))
          ) : (
            <p>لا توجد دورات</p>
          )}
        </div>
        
        <hr className={styles.divider} />
        
        {/* Salary */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>الراتب:</h3>
          {teacher && teacher.teacher_salaries.length > 0 ? (
            teacher.teacher_salaries.map(salary => (
              <div key={salary.id} className={styles.salaryItem}>
                <p><strong>الراتب الشهري:</strong> {salary.montly_salary}</p>
                <p><strong>تاريخ الدفع:</strong> {new Date(salary.paid_at).toLocaleDateString('ar-EG')}</p>
                <p><strong>الوصف:</strong> {salary.status}</p>
              </div>
            ))
          ) : (
            <p>لا توجد معلومات عن الراتب</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="secondary" onClick={onClose}>
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TeacherDetailsModal;
