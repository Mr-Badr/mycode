"use client";
import React from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const SubjectTable = ({ subjects, handleEditClick, handleDeleteClick }) => {
  // Log the subjects data to the console for debugging
  console.log("Subjects Data:", subjects);

  const pathname = usePathname();

  const columns = [
    {
      title: 'المادة',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <div 
          className="d-flex align-items-center" 
          style={{ cursor: 'pointer' }} 
          onClick={() => window.location.href = `/admin/subjects/${record.id}/courses`}
        >
          <div
            style={{
              width: 80,
              height: 60,
              marginRight: '10px',
              overflow: 'hidden',
              borderRadius: '4px',
              position: 'relative',
            }}
          >
            <img
              src={record.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}` : "../../assets/images/avatar/avatar-12.jpg"}
              alt={record.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
          <h4 style={{ marginRight: "1rem" }}>{record.name}</h4>
        </div>
      ),
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'الأستاذ',
      key: 'teacher',
      render: (text, record) => `${record.teacher.first_name} ${record.teacher.last_name}`,
    },
    {
      title: 'القسم',
      key: 'classe',
      render: (text, record) => record.classe.name,
    },
    {
      title: 'الدورات',
      key: 'courses',
      render: (text, record) => (
        <ul>
          {record.courses.map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (text, record) => (
        <Dropdown overlay={
          <Menu>
            <Menu.Item key="1" onClick={() => handleEditClick(record)}>
              <EditOutlined /> تحرير
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleDeleteClick(record.id)}>
              <DeleteOutlined /> حذف
            </Menu.Item>
          </Menu>
        }>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={subjects} rowKey="id" />
  );
};

export default SubjectTable;
