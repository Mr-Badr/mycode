import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';

const AddSubjectModal = ({ show, handleClose, teachers, classes, handleSaveNewSubject }) => {
  const [newSubject, setNewSubject] = useState({
    name: '',
    description: '',
    slug: '',
    teacher_id: '',
    classe_id: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject(prev => ({ ...prev, [name]: value }));
    if (name === 'name') {
      generateSlug(value); // Generate slug based on the subject name
    }
  };

  const generateSlug = (name) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setNewSubject(prev => ({ ...prev, slug }));
  };

  const handleFileChange = (e) => {
    setNewSubject(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = () => {
    handleSaveNewSubject(newSubject);
  };

  return (
    <Modal
      title="إضافة مادة جديدة"
      visible={show}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          إلغاء
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          إضافة
        </Button>,
      ]}
      style={{ direction: 'rtl' }}
    >
      <Form layout="vertical">
        <Form.Item label="اسم المادة">
          <Input
            name="name"
            value={newSubject.name}
            onChange={handleInputChange}
            placeholder="أدخل اسم المادة"
          />
        </Form.Item>
        <Form.Item label="الوصف">
          <Input
            name="description"
            value={newSubject.description}
            onChange={handleInputChange}
            placeholder="أدخل الوصف"
          />
        </Form.Item>
        <Form.Item label="اختر المدرس">
          <Select
            name="teacher_id"
            value={newSubject.teacher_id}
            onChange={(value) => setNewSubject(prev => ({ ...prev, teacher_id: value }))}
            placeholder="اختر المدرس"
          >
            {teachers.map((teacher) => (
              <Select.Option key={teacher.id} value={teacher.id}>
                {`${teacher.first_name} ${teacher.last_name}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="اختر الفصل">
          <Select
            name="classe_id"
            value={newSubject.classe_id}
            onChange={(value) => setNewSubject(prev => ({ ...prev, classe_id: value }))}
            placeholder="اختر الفصل"
          >
            {classes.map((classe) => (
              <Select.Option key={classe.id} value={classe.id}>
                {classe.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="الصورة">
          <input type="file" name="image" onChange={handleFileChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSubjectModal;
