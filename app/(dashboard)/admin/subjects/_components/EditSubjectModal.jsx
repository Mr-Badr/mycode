"use client";
import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import axiosInstance from '../../../../../services/axiosInstance';
import DOMPurify from 'dompurify'; // Library to sanitize HTML

const EditSubjectModal = ({ show, handleClose, subject, handleInputChange, handleSaveClick, teachers, classes }) => {
  const [fileList, setFileList] = useState([]);
  const [imagePreview, setImagePreview] = useState(subject.image || '');
  const [imageFile, setImageFile] = useState(null);
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    if (subject.image) {
      setImagePreview(`${process.env.NEXT_PUBLIC_STORAGE_URL}/${subject.image.replace('public/', '')}`);
    }
    if (subject.description) {
      setEditorContent(subject.description); // Set initial HTML content
    }
  }, [subject.image, subject.description]);

  const handleFileUpload = (file) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const handleUploadChange = ({ fileList }) => setFileList(fileList);

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      toast.success('تم تحميل الصورة بنجاح!', {
        position: "bottom-right"
      });
    } else if (info.file.status === 'error') {
      toast.error('فشل تحميل الصورة. حاول مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('name', subject.name);
      formData.append('slug', subject.slug);
      formData.append('description', editorContent); // Save as HTML
      formData.append('teacher_id', subject.teacher_id);
      formData.append('classe_id', subject.classe_id); // Corrected the field name

      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await axiosInstance.post(`/subjects/${subject.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast.success('تم تحديث المادة بنجاح!', {
          position: "bottom-right",
        });
        handleClose();
      } else {
        throw new Error('حدث خطأ أثناء تحديث بيانات المادة.');
      }
    } catch (error) {
      toast.error(error.message || 'حدث خطأ أثناء تحديث بيانات المادة. الرجاء المحاولة مرة أخرى.', {
        position: "bottom-right",
      });
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    handleInputChange({ target: { name: 'name', value: name } });
    handleInputChange({ target: { name: 'slug', value: slug } });
  };

  return (
    <Modal
      title="تحرير المادة"
      visible={show}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          إلغاء
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          حفظ
        </Button>,
      ]}
      width={800}
      dir="rtl"
    >
      <Form
        layout="vertical"
        initialValues={subject}
        style={{ direction: 'rtl' }}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="اسم المادة"
              name="name"
              rules={[{ required: true, message: 'يرجى إدخال اسم المادة!' }]}
            >
              <Input
                name="name"
                value={subject.name}
                onChange={handleNameChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
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
              >
                {teachers.map(teacher => (
                  <Select.Option key={teacher.id} value={teacher.id}>
                    {teacher.first_name} {teacher.last_name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="القسم"
              name="classe_id"
              rules={[{ required: true, message: 'يرجى اختيار القسم!' }]}
            >
              <Select
                name="classe_id"
                value={subject.classe_id}
                onChange={(value) => handleInputChange({ target: { name: 'classe_id', value } })}
              >
                {classes.map(classItem => (
                  <Select.Option key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="الوصف"
              name="description"
              rules={[{ required: true, message: 'يرجى إدخال وصف المادة!' }]}
            >
              <ReactQuill
                theme="snow"
                value={editorContent} // Set initial HTML content
                onChange={(value) => setEditorContent(value)} // Handle content change
                modules={{
                  toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 
                     {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']                                         
                  ],
                }}
                formats={[
                  'header', 'font', 'size', 'bold', 'italic', 'underline',
                  'strike', 'blockquote', 'list', 'bullet', 'indent',
                  'link', 'image', 'video'
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="الصورة">
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={handleFileUpload}
                onChange={handleUploadChange}
                onPreview={() => {}}
                onRemove={() => {
                  setImagePreview('');
                  setImageFile(null);
                }}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  <div>
                    <UploadOutlined />
                    <div className="ant-upload-text">تحميل صورة</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="معاينة الوصف">
              <div
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorContent) }}
                style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditSubjectModal;
