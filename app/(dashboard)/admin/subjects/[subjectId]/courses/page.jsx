"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../../../../../services/axiosInstance'; // Adjust the import path to your Axios instance
import { ArrowLeftOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Table, Button, Modal, Form, Input, Upload } from 'antd';
import Search from 'antd/es/input/Search';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import DOMPurify from 'dompurify'; // Library to sanitize HTML

const CoursesPage = ({ params }) => {
  const { subjectId } = params; // Extract subjectId from params
  const router = useRouter(); // Use router for navigation
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // State for Add Modal
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // State for the image file

  useEffect(() => {
    if (subjectId) {
      axiosInstance.get(`/subjects/${subjectId}/courses`) // Adjust the endpoint if necessary
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            setCourses(response.data.data); // Set the courses data
            setFilteredCourses(response.data.data); // Set filtered courses
          } else {
            console.warn('Unexpected data structure:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
    }
  }, [subjectId]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterCourses(e.target.value);
  };

  const filterCourses = (searchTerm) => {
    if (searchTerm) {
      setFilteredCourses(courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredCourses(courses);
    }
  };

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    form.setFieldsValue({
      title: course.title,
      description: course.description,
      body: course.body
    }); // Populate form with selected course data
    setShowEditModal(true);
  };

  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => {
    setShowAddModal(true); // Show Add Modal
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseAddModal = () => setShowAddModal(false); // Close Add Modal

  const confirmDelete = () => {
    if (selectedCourse) {
      axiosInstance.delete(`/subjects/${sub 

  const handleSaveClick = () => {
    form
      .validateFields()
      .then(values => {
        if (selectedCourse) {
          const formData = new FormData();
          formData.append('subject_id', subjectId);
          formData.append('title', values.title);
          formData.append('slug', values.title.toLowerCase().replace(/\s+/g, '-'));
          formData.append('description', values.description);
          formData.append('body', values.body);
  
          // Append image if available
          if (imageFile) {
            // Check file size (example: 5MB)
            if (imageFile.size > 5 * 1024 * 1024) {
              toast.error('الملف كبير جداً. يرجى استخدام ملف أصغر.', { position: "bottom-right" });
              return;
            }
            formData.append('image', imageFile);
          }
  
          console.log("***");
          console.log(formData);
          console.log("***");
  
          axiosInstance.post(`/courses`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(response => {
              setCourses(courses.map(course => course.id === selectedCourse.id ? response.data : course));
              setFilteredCourses(courses.map(course => course.id === selectedCourse.id ? response.data : course));
              handleCloseEditModal();
            })
            .catch(error => {
              console.error('Error updating course:', error.response ? error.response.data : error.message);
            });
        }
      })
      .catch(error => {
        console.error('Validation failed:', error);
      });
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddCourse = async () => {
    form
      .validateFields()
      .then(async (values) => {
        const { title, description, body } = values;
        const formData = new FormData();
        formData.append('subject_id', subjectId);
        formData.append('title', title);
        formData.append('slug', title.toLowerCase().replace(/\s+/g, '-'));
        formData.append('description', description);
        formData.append('body', body);
        if (imageFile) {
          formData.append('image', imageFile);
        }

        try {
          const response = await axiosInstance.post('/courses', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log('Course added successfully:', response.data);
          toast.success('تم إضافة الدورة بنجاح!', { position: "bottom-right" });
          router.push('/admin/courses');
        } catch (error) {
          console.error('Error adding course:', error.response ? error.response.data : error.message);
          toast.error('حدث خطأ أثناء إضافة الدورة. الرجاء المحاولة مرة أخرى.', { position: "bottom-right" });
        }
      })
      .catch(error => {
        console.error('Validation failed:', error);
      });
  };

  const columns = [
    {
      title: 'عنوان الدورة',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div style={{ cursor: 'pointer', color: 'blue' }} onClick={() => router.push(`/admin/subjects/${subjectId}/courses/${record.id}`)}>
          {text}
        </div>
      ),
    },
    {
      title: 'الصورة',
      key: 'image',
      render: (_, record) => (
        <div>
          <img
            src={record.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}` : '/default-image.jpg'}
            alt={record.title}
            style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }}
            onClick={() => setPreviewImage(`${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}`)}
          />
          {previewImage && (
            <Modal
              visible={!!previewImage}
              footer={null}
              onCancel={() => setPreviewImage(null)}
              width={800}
            >
              <img src={previewImage} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            </Modal>
          )}
        </div>
      ),
      width: 120, // Adjust the width as needed
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'المحتوى',
      dataIndex: 'body',
      key: 'body',
      render: (text) => (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
      ),
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            onClick={() => handleEditClick(record)}
            type="primary"
            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
          >
            <EditOutlined style={{ marginRight: 8 }} />
            تعديل
          </Button>
          <Button
            onClick={() => handleDeleteClick(record)}
            type="default"
            style={{ color: '#ffffff', backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
          >
            <DeleteOutlined style={{ marginRight: 8 }} />
            حذف
          </Button>
        </div>
      ),
      width: 230, // Adjust the width as needed
    },
  ];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid p-6" style={{ direction: 'rtl' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-1">الدورات الخاصة بالمادة</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddClick}
        >
          إضافة دورة جديدة
        </Button>
      </div>

      <Search
        placeholder="بحث"
        onChange={handleSearchChange}
        style={{ marginBottom: 20, width: '100%' }}
      />

      <Table
        columns={columns}
        dataSource={filteredCourses}
        pagination={{
          current: currentPage,
          pageSize: itemsPerPage,
          total: filteredCourses.length,
          onChange: paginate,
        }}
        rowKey="id"
      />

      {/* Edit Modal */}
      <Modal
        title="تعديل الدورة"
        visible={showEditModal}
        onOk={handleSaveClick}
        onCancel={handleCloseEditModal}
        okText="حفظ"
        cancelText="إلغاء"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="عنوان الدورة" rules={[{ required: true, message: 'يرجى إدخال عنوان الدورة' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="الوصف" rules={[{ required: true, message: 'يرجى إدخال وصف الدورة' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="body" label="المحتوى" rules={[{ required: true, message: 'يرجى إدخال محتوى الدورة' }]}>
            <ReactQuill
              value={form.getFieldValue('body')}
              onChange={(value) => form.setFieldsValue({ body: value })}
              theme="snow"
            />
          </Form.Item>
          <Form.Item label="الصورة">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Modal */}
      <Modal
        title="إضافة دورة جديدة"
        visible={showAddModal}
        onOk={handleAddCourse}
        onCancel={handleCloseAddModal}
        okText="إضافة"
        cancelText="إلغاء"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="عنوان الدورة" rules={[{ required: true, message: 'يرجى إدخال عنوان الدورة' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="الوصف" rules={[{ required: true, message: 'يرجى إدخال وصف الدورة' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="body" label="المحتوى" rules={[{ required: true, message: 'يرجى إدخال محتوى الدورة' }]}>
            <ReactQuill
              value={form.getFieldValue('body')}
              onChange={(value) => form.setFieldsValue({ body: value })}
              theme="snow"
            />
          </Form.Item>
          <Form.Item label="الصورة">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}
          </Form.Item>
        </Form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="تأكيد الحذف"
        visible={showDeleteModal}
        onOk={confirmDelete}
        onCancel={handleCloseDeleteModal}
        okText="حذف"
        cancelText="إلغاء"
      >
        <p>هل أنت متأكد أنك تريد حذف هذه الدورة؟</p>
      </Modal>
    </div>
  );
};

export default CoursesPage;
