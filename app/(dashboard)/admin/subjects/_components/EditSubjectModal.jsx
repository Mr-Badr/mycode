"use client"



import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, Upload, Typography, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './EditSubjectModal.module.css';
import { toast } from 'react-toastify'; // Ensure toast is imported

const { Title } = Typography;


const EditSubjectModal = ({ show, handleClose, subject, handleInputChange, handleSaveClick, teachers, classes }) => {
  const [fileList, setFileList] = useState([]);
  const [imagePreview, setImagePreview] = useState(subject.image || '');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (subject.image) {
      setImagePreview(subject.image);
    }
  }, [subject.image]);

  const handleFileUpload = (file) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result); // Update image preview
    };
    reader.readAsDataURL(file);
    return false; // Prevent default upload behavior
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      // Handle successful upload
      toast.success('تم تحميل الصورة بنجاح!', {
        position: "bottom-right"
      });
    } else if (info.file.status === 'error') {
      toast.error('فشل تحميل الصورة. حاول مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  const handleUploadChange = ({ fileList }) => setFileList(fileList);

  return (
    <Modal
      title="تحرير المادة"
      visible={show}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          إلغاء
        </Button>,
        <Button key="submit" type="primary" onClick={handleSaveClick}>
          حفظ
        </Button>,
      ]}
      dir="rtl" // Set direction to RTL
    >
      <Form
        style={{ direction: 'rtl' }}
        layout="vertical" // Ensure vertical layout
        initialValues={subject} // Populate form with existing subject data
      >
<Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="اسم المادة"
              name="name"
              rules={[{ required: true, message: 'يرجى إدخال اسم المادة!' }]}
            >
              <Input
                name="name"
                value={subject.name}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="الاسم المختصر"
              name="slug"
              rules={[{ required: true, message: 'يرجى إدخال الاسم المختصر!' }]}
            >
              <Input
                name="slug"
                value={subject.slug}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="الوصف"
              name="description"
              rules={[{ required: true, message: 'يرجى إدخال الوصف!' }]}
            >
              <Input
                name="description"
                value={subject.description}
                onChange={handleInputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="المدرس"
              name="teacher_id"
              rules={[{ required: true, message: 'يرجى اختيار المدرس!' }]}
            >
              <Select
                name="teacher_id"
                value={subject.teacher_id}
                onChange={(value) => handleInputChange({ target: { name: 'teacher_id', value } })}
                className={styles.selectRtl}
              >
                {teachers.map(teacher => (
                  <Select.Option key={teacher.id} value={teacher.id}>
                    {teacher.first_name} {teacher.last_name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="القسم"
          name="class_id"
          rules={[{ required: true, message: 'يرجى اختيار القسم!' }]}
        >
          <Select
            name="class_id"
            value={subject.class_id}
            onChange={(value) => handleInputChange({ target: { name: 'class_id', value } })}
            className={styles.selectRtl}
          >
            {classes.map(classItem => (
              <Select.Option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="الصورة">
          <Upload
            customRequest={({ file, onSuccess, onError }) => {
              handleFileUpload(file); // Handle file upload
              onSuccess(); // Notify the completion of the upload
            }}
            showUploadList={false}
            accept="image/*"
            fileList={fileList}
            onChange={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>تحميل صورة</Button>
          </Upload> 
          {imagePreview && <img
           src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${imagePreview.replace('public/', '')}`}
           alt="preview"
            style={{ width: '100%', marginTop: 10 }}
          />}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditSubjectModal;





