import React from 'react';
import { Modal, Button } from 'antd';

const DeleteModal = ({ visible, onConfirm, onClose }) => {
  return (
    <Modal
      title="تأكيد الحذف"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>إلغاء</Button>,
        <Button key="submit" type="primary" danger onClick={onConfirm}>حذف</Button>
      ]}
    >
      <p>هل أنت متأكد أنك تريد حذف هذا الطالب؟</p>
    </Modal>
  );
};

export default DeleteModal;
