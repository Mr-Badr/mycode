"use client";
// TeacherTable.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import styles from './TeacherTable.module.css'; // Import CSS Module
import TeacherDetailsModal from "./TeacherDetailsModal";
import EditTeacherModal from "./EditTeacherModal";

const TeacherTable = ({ teachers, handleEditClick, handleDeleteClick }) => {
  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [teacherCourses, setTeacherCourses] = useState({});
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchCoursesForTeacher = async (teacherId) => {
      try {
        const response = await axiosInstance.get(`/teachers/${teacherId}/teacher-courses`);
        setTeacherCourses(prev => ({ ...prev, [teacherId]: response.data.data }));
      } catch (error) {
        console.error(`Error fetching courses for teacher ID ${teacherId}:`, error);
      }
    };

    teachers.forEach(teacher => {
      fetchCoursesForTeacher(teacher.id);
    });
  }, [teachers]);

  const handleShowModal = (modalType, data) => {
    switch (modalType) {
      case 'subject':
        setSelectedSubject(data);
        setShowSubjectModal(true);
        break;
      case 'course':
        setSelectedCourse(data);
        setShowCourseModal(true);
        break;
      case 'details':
        setSelectedTeacher(data);
        setShowDetailsModal(true);
        break;
      case 'edit':
        setSelectedTeacher(data);
        setShowEditModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (modalType) => {
    switch (modalType) {
      case 'subject':
        setShowSubjectModal(false);
        break;
      case 'course':
        setShowCourseModal(false);
        break;
      case 'details':
        setShowDetailsModal(false);
        break;
      case 'edit':
        setShowEditModal(false);
        break;
      default:
        break;
    }
  };

  const handleSaveTeacher = (updatedTeacher) => {
    handleEditClick(updatedTeacher);
    setShowEditModal(false);
  };

  return (
    <div className={styles.rtl}>
      <div className="table-responsive">
        <table className={`${styles.table} table mb-0 text-nowrap table-hover table-centered`}>
          <thead className={`${styles.tableLight} table-light`}>
            <tr>
              <th>الإسم</th>
              <th>الوصف</th>
              <th>معدل الأجر بالساعة</th>
              <th>المواد</th>
              <th>الدروس</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-12.jpg"} alt="" className={`${styles.avatarMd} rounded-circle avatar-md me-2`} />
                    <h5 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h5>
                  </div>
                </td>
                <td className="text-truncate" style={{ maxWidth: '200px' }}>
                  {teacher.bio}
                </td>
                <td style={{ width: '10px' }}>{teacher.hourly_rate}</td>
                <td>
                  {teacher.subjects.length ? (
                    teacher.subjects.map((subject) => (
                      <div key={subject.id}>
                        <div
                          onClick={() => handleShowModal('subject', subject)}
                          className={styles.clickableItem}
                        >
                          {subject.name}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>لا توجد مواد</div>
                  )}
                </td>
                <td>
                  {teacherCourses[teacher.id]?.length ? (
                    teacherCourses[teacher.id].map((courseItem) => (
                      <div key={courseItem.course.id}>
                        <div
                          onClick={() => handleShowModal('course', courseItem.course)}
                          className={styles.clickableItem}
                        >
                          {courseItem.course.title || 'دورة غير متوفرة'}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>لا توجد دروس</div>
                  )}
                </td>
                <td>
                  <div className="hstack gap-4">
                    <span className="dropdown dropstart">
                      <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                        <i className="fe fe-more-vertical"></i>
                      </a>
                      <span className="dropdown-menu">
                        <span className="dropdown-header">الإعدادات</span>
                        <button className="dropdown-item" onClick={() => handleShowModal('details', teacher)}>
                          <i className="fe fe-eye dropdown-item-icon"></i>
                          عرض التفاصيل
                        </button>
                        <button className="dropdown-item" onClick={() => handleShowModal('edit', teacher)}>
                          <i className="fe fe-edit dropdown-item-icon"></i>
                          تعديل
                        </button>
                        <button className="dropdown-item" onClick={() => handleDeleteClick(teacher.id)}>
                          <i className="fe fe-trash dropdown-item-icon"></i>
                          حذف
                        </button>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Subject Modal */}
      <Modal show={showSubjectModal} onHide={() => handleCloseModal('subject')} dialogClassName={styles.modalContent}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSubject?.name || 'موضوع غير متوفر'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>وصف:</strong> {selectedSubject?.description || 'غير متوفر'}</p>
          <p><strong>Slug:</strong> {selectedSubject?.slug || 'غير متوفر'}</p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button variant="secondary" onClick={() => handleCloseModal('subject')}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Course Modal */}
      <Modal show={showCourseModal} onHide={() => handleCloseModal('course')} dialogClassName={styles.modalContent}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse?.title || 'دورة غير متوفرة'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalBodyContent}>
            <div className={styles.modalSection}>
              <h5 className={styles.modalSubTitle}>العنوان:</h5>
              <p className={styles.modalText}>{selectedCourse?.title || 'غير متوفر'}</p>
            </div>
            <div className={styles.modalSection}>
              <h5 className={styles.modalSubTitle}>الوصف:</h5>
              <p className={styles.modalText}>{selectedCourse?.description || 'غير متوفر'}</p>
            </div>
            <div className={styles.modalSection}>
              <h5 className={styles.modalSubTitle}>الموضوع:</h5>
              <p className={styles.modalText}>{selectedCourse?.subject?.name || 'غير متوفر'}</p>
            </div>
            <div className={styles.modalSection}>
              <h5 className={styles.modalSubTitle}>تاريخ الإنشاء:</h5>
              <p className={styles.modalText}>{selectedCourse ? new Date(selectedCourse.created_at).toLocaleDateString('ar-EG') : 'غير متوفر'}</p>
            </div>
            <div className={styles.modalSection}>
              <h5 className={styles.modalSubTitle}>تاريخ التحديث:</h5>
              <p className={styles.modalText}>{selectedCourse ? new Date(selectedCourse.updated_at).toLocaleDateString('ar-EG') : 'غير متوفر'}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button variant="secondary" onClick={() => handleCloseModal('course')}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Teacher Details Modal */}
      <TeacherDetailsModal show={showDetailsModal} onClose={() => handleCloseModal('details')} teacher={selectedTeacher} />

      {/* Edit Teacher Modal */}
      <EditTeacherModal show={showEditModal} onClose={() => handleCloseModal('edit')} teacher={selectedTeacher} onSave={handleSaveTeacher} />
    </div>
  );
};

export default TeacherTable;
