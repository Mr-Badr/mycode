"use client";
import React from 'react';
import { Modal, Button } from 'antd';

const DeleteSubjectModal = ({ show, handleClose, confirmDelete }) => {
  return (
    <Modal
      title="حذف المادة"
      visible={show}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          إلغاء
        </Button>,
        <Button key="submit" type="primary" danger onClick={confirmDelete}>
          حذف
        </Button>,
      ]}
    >
      <p>هل أنت متأكد أنك تريد حذف هذه المادة؟</p>
    </Modal>
  );
};

export default DeleteSubjectModal;
