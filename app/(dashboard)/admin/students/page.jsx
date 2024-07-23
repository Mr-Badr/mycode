"use client";
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../services/axiosInstance'; // Import your custom Axios instance
import { toast } from 'react-toastify';
import { Button, Breadcrumb } from 'antd'; // Import Breadcrumb
import StudentSearch from './_components/StudentSearch';
import StudentCard from './_components/StudentCard';
import StudentTable from './_components/StudentTable';
import EditModal from './_components/EditModal';
import DeleteModal from './_components/DeleteModal';
import Link from 'next/link';
import { AppstoreOutlined, TableOutlined } from '@ant-design/icons';

const AdminStudent = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // State to manage view mode

  useEffect(() => {
    axiosInstance.get('students')
      .then(response => {
        setStudents(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setFiltered(
      students.filter(student =>
        student.first_name.toLowerCase().includes(term) || student.last_name.toLowerCase().includes(term)
      )
    );
  };

  const handleEditModalClose = () => setShowEditModal(false);
  const handleDeleteModalClose = () => setShowDeleteModal(false);

  const confirmDelete = () => {
    axiosInstance.delete(`students/${deleteId}`)
      .then(() => {
        const newStudents = students.filter(student => student.id !== deleteId);
        setStudents(newStudents);
        setFiltered(newStudents);
        setShowDeleteModal(false);
        setDeleteId(null);
        toast.success('تم حذف الطالب بنجاح!', {
          position: "bottom-right"
        });
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        toast.error('حدث خطأ أثناء حذف الطالب. الرجاء المحاولة مرة أخرى.', {
          position: "bottom-right"
        });
      });
  };

  return (
    <div className="container-fluid p-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-1">الطلاب</h1>

        <div className="d-flex align-items-center" style={{ marginRight: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: "5px" }}>
            <Button
              type={viewMode === 'cards' ? 'primary' : 'default'}
              icon={<AppstoreOutlined />}
              onClick={() => setViewMode('cards')}
              style={{
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
                margin: '0',
              }}
            />
            <Button
              type={viewMode === 'table' ? 'primary' : 'default'}
              icon={<TableOutlined />}
              onClick={() => setViewMode('table')}
              style={{
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                margin: '0',
              }}
            />
          </div>
          <Button type="primary" style={{ marginLeft: '15px' }}>
            <Link href="/admin/students-add">إضافة طالب جديد</Link>
          </Button>
        </div>
      </div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>الرئيسية</Breadcrumb.Item>
        <Breadcrumb.Item>الطلاب</Breadcrumb.Item>
      </Breadcrumb>

      
      <StudentSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {viewMode === 'cards' ? (
        <div className="row">
          {filtered.map(student => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <StudentTable
          students={filtered}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}

      <EditModal visible={showEditModal} student={selectedStudent} onClose={handleEditModalClose} />
      <DeleteModal visible={showDeleteModal} onConfirm={confirmDelete} onClose={handleDeleteModalClose} />
    </div>
  );
};

export default AdminStudent;
