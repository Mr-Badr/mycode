"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, Card, Typography, Input, Breadcrumb, Button, Modal, Form, Input as AntdInput } from 'antd';
import axiosinstance from '../../../../../../services/axiosInstance'; // Adjust the import path to your Axios instance

const { Title } = Typography;
const { Search } = Input;

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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (subjectId) {
      axiosinstance.get(`/subjects/${subjectId}/courses`) // Adjust the endpoint if necessary
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
    form.setFieldsValue(course); // Populate form with selected course data
    setShowEditModal(true);
  };

  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const confirmDelete = () => {
    // Implement delete logic here
    handleCloseDeleteModal();
  };

  const handleSaveClick = () => {
    form
      .validateFields()
      .then(values => {
        // Implement save logic here
        axiosinstance.put(`/courses/${selectedCourse.id}`, values)
          .then(response => {
            // Update state with new data
            setCourses(courses.map(course => course.id === selectedCourse.id ? response.data : course));
            setFilteredCourses(courses);
            handleCloseEditModal();
          })
          .catch(error => {
            console.error('Error updating course:', error);
          });
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
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'الصورة',
      key: 'image',
      render: (_, record) => (
        <img
          src={record.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}` : '/default-image.jpg'}
          alt={record.title}
          style={{ width: 80, height: 60, objectFit: 'cover' }}
        />
      ),
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (_, record) => (
        <div>
  <Button
    onClick={() => handleEditClick(record)}
    type="primary"
    style={{ 
      marginRight: 16, // Increased margin between buttons
      backgroundColor: '#1890ff', 
      borderColor: '#1890ff' 
    }}
  >
    تعديل
  </Button>
  <Button
    onClick={() => handleDeleteClick(record)}
    type="default"
    style={{ 
      color: '#ffffff', // White text color
      backgroundColor: '#ff4d4f', 
      borderColor: '#ff4d4f',
      marginLeft: 8 // Margin to the left of the delete button
    }}
  >
    حذف
  </Button>
</div>

      ),
    },
  ];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid p-6">
      <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
        <Breadcrumb>
          <Breadcrumb.Item>الرئيسية</Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => router.push('/subjects')}>المواد</Breadcrumb.Item>
          <Breadcrumb.Item>الدورات</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={2}>الدورات الخاصة بالمادة</Title>
        <Button
          onClick={() => router.back()}
          type="default"
          style={{ marginTop: 16, backgroundColor: '#f0f0f0' }}
        >
          العودة
        </Button>
      </div>

      <Search
        placeholder="ابحث عن دورة"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: 20 }}
      />

      <Card>
        <Table
          columns={columns}
          dataSource={filteredCourses}
          rowKey="id"
          pagination={{
            current: currentPage,
            pageSize: itemsPerPage,
            onChange: paginate,
            total: filteredCourses.length,
          }}
        />
      </Card>

      <Modal
        title="تعديل الدورة"
        visible={showEditModal}
        onCancel={handleCloseEditModal}
        onOk={handleSaveClick}
        okText="حفظ"
        cancelText="إلغاء"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="عنوان الدورة" rules={[{ required: true, message: 'يرجى إدخال عنوان الدورة' }]}>
            <AntdInput />
          </Form.Item>
          <Form.Item name="description" label="الوصف" rules={[{ required: true, message: 'يرجى إدخال الوصف' }]}>
            <AntdInput.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="image" label="رابط الصورة" rules={[{ required: true, message: 'يرجى إدخال رابط الصورة' }]}>
            <AntdInput />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="تأكيد الحذف"
        visible={showDeleteModal}
        onCancel={handleCloseDeleteModal}
        onOk={confirmDelete}
        okText="حذف"
        cancelText="إلغاء"
      >
        <p>هل أنت متأكد أنك تريد حذف هذه الدورة؟</p>
      </Modal>
    </div>
  );
};

export default CoursesPage;
