import React from 'react';
import { Modal } from 'antd';

const CourseDetailsModal = ({ show, onClose, details }) => {
  return (
    <Modal
      title="تفاصيل الدورة"
      visible={show}
      onCancel={onClose}
      footer={null}
    >
      {details ? (
        <div>
          <h3>{details.title}</h3>
          <p>{details.description}</p>
          <p>{details.body}</p>
          <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${details.image.replace('public/', '')}`} alt={details.title} style={{ width: '100%', height: 'auto' }} />
        </div>
      ) : (
        <p>لا توجد بيانات لعرضها</p>
      )}
    </Modal>
  );
};

export default CourseDetailsModal;
