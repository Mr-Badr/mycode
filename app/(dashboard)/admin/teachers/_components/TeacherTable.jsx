"use client";

import React, { useState, useEffect } from 'react';
import { Table, Button, Dropdown, Menu } from 'antd';
import { EditOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import CourseDetailsModal from "./CourseDetailsModal";
import SubjectDetailsModal from "./SubjectDetailsModal";
import EditTeacherModal from "./EditTeacherModal";

const TeacherTable = ({ teachers, handleEditClick, handleDeleteClick }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [teacherCourses, setTeacherCourses] = useState({});

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
      case 'subjectDetails':
        axiosInstance.get(`/subjects/${data.subject_id}`)
          .then(response => {
            setSelectedDetail(response.data.data);
            setShowDetailsModal(true);
          })
          .catch(error => {
            console.error(`Error fetching subject details for ID ${data.subject_id}:`, error);
          });
        break;
      case 'courseDetails':
        axiosInstance.get(`/classes/${data.course_id}`)
          .then(response => {
            setSelectedDetail(response.data.data);
            setShowDetailsModal(true);
          })
          .catch(error => {
            console.error(`Error fetching class details for ID ${data.course_id}:`, error);
          });
        break;
      case 'edit':
        setSelectedDetail(data);
        setShowEditModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setShowEditModal(false);
  };

  const handleSaveTeacher = (updatedTeacher) => {
    handleEditClick(updatedTeacher);
    setShowEditModal(false);
  };

  const columns = [
    {
      title: 'الإسم',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div className="d-flex align-items-center">
          <img
            src={record.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}` : "../../assets/images/avatar/avatar-12.jpg"}
            alt={record.name}
            style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }}
          />
          <h6 style={{ marginRight: "1rem" }}>{`${record.first_name} ${record.last_name}`}</h6>
        </div>
      ),
    },
    {
      title: 'الوصف',
      dataIndex: 'bio',
      key: 'bio',
      render: text => (
        <div style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </div>
      ),
    },
    {
      title: 'معدل الأجر بالساعة',
      dataIndex: 'hourly_rate',
      key: 'hourly_rate',
    },
    {
      title: 'المواد',
      key: 'subjects',
      render: (_, record) => (
        <div>
          {teacherCourses[record.id] && teacherCourses[record.id].length ? (
            teacherCourses[record.id].map(courseItem => (
              <div
                key={courseItem.course.id}
                onClick={() => handleShowModal('subjectDetails', courseItem.course)}
                style={{ cursor: 'pointer', color: '#1890ff' }}
              >
                {courseItem.course.subject.name}
              </div>
            ))
          ) : (
            <div>لا توجد مواد</div>
          )}
        </div>
      ),
    },
    {
      title: 'الدروس',
      key: 'courses',
      render: (_, record) => (
        <div>
          {teacherCourses[record.id] && teacherCourses[record.id].length ? (
            teacherCourses[record.id].map(courseItem => (
              <div
                key={courseItem.course.id}
                onClick={() => handleShowModal('courseDetails', courseItem.course)}
                style={{ cursor: 'pointer', color: '#1890ff' }}
              >
                {courseItem.course.title || 'دورة غير متوفرة'}
              </div>
            ))
          ) : (
            <div>لا توجد دروس</div>
          )}
        </div>
      ),
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => handleShowModal('edit', record)} icon={<EditOutlined />}>
                تعديل
              </Menu.Item>
              <Menu.Item key="delete" onClick={() => handleDeleteClick(record.id)} icon={<DeleteOutlined />}>
                حذف
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button>
            <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={teachers}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      {showDetailsModal && selectedDetail && selectedDetail.subject && (
        <SubjectDetailsModal
          isVisible={showDetailsModal}
          onClose={handleCloseModal}
          subjectId={selectedDetail.subject.id}
        />
      )}

      {showDetailsModal && selectedDetail && selectedDetail.course && (
        <CourseDetailsModal
          isVisible={showDetailsModal}
          onClose={handleCloseModal}
          courseId={selectedDetail.course.id}
        />
      )}

      {showEditModal && selectedDetail ? (
        <EditTeacherModal 
          show={showEditModal} 
          onClose={handleCloseModal} 
          teacher={selectedDetail} 
          onSave={handleSaveTeacher} 
        />
      ) : null}
    </div>
  );
};

export default TeacherTable;
