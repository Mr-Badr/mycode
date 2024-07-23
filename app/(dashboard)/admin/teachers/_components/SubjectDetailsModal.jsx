"use client";
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust the path as needed

const SubjectDetailsModal = ({ isVisible, onClose, subjectId }) => {
  const [subjectData, setSubjectData] = useState(null);

  useEffect(() => {
    if (subjectId) {
      axiosInstance.get(`/subjects/${subjectId}`)
        .then(response => setSubjectData(response.data.data))
        .catch(error => console.error('Error fetching subject data:', error));
    }
  }, [subjectId]);

  if (!subjectData) return null;

  return (
    <Modal
      title={subjectData.name}
      visible={isVisible}
      onCancel={onClose}
      footer={<Button onClick={onClose}>إغلاق</Button>}
    >
      <div>
        {subjectData.image && <img src={subjectData.image} alt={subjectData.name} style={{ width: '100%', height: 'auto' }} />}
        <p><strong>وصف:</strong> {subjectData.description}</p>
        <p><strong>معلم:</strong> {subjectData.teacher.first_name} {subjectData.teacher.last_name}</p>
        <p><strong>فئة:</strong> {subjectData.classe.name}</p>
        <p><strong>دورات:</strong></p>
        {subjectData.courses && subjectData.courses.length ? (
          subjectData.courses.map(course => (
            <div key={course.id}>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              {course.image && <img src={course.image} alt={course.title} style={{ width: '100%', height: 'auto' }} />}
            </div>
          ))
        ) : (
          <p>لا توجد دورات</p>
        )}
      </div>
    </Modal>
  );
};

export default SubjectDetailsModal;
