"use client";

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../services/axiosInstance';
import SubjectTable from './_components/SubjectTable';
import EditSubjectModal from './_components/EditSubjectModal';
import DeleteSubjectModal from './_components/DeleteSubjectModal';
import SearchBar from './_components/SearchBar';
import Breadcrumbs from './_components/Breadcrumbs';
import Pagination from '../../_helpers/Pagination';
import { toast } from 'react-toastify';
import FormData from 'form-data'; // Ensure you have form-data package installed
import { Breadcrumb, Button } from 'antd';
import Link from 'next/link';

const Page = () => {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState({});
  const [subjectIdToDelete, setSubjectIdToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchSubjects();
    fetchTeachers();
    fetchClasses();
  }, []);

  const fetchSubjects = () => {
    axiosInstance.get('/subjects')
      .then(response => setSubjects(response.data.data || []))
      .catch(error => {
        console.error('Error fetching subjects:', error);
        toast.error('حدث خطأ أثناء جلب بيانات المواد. الرجاء المحاولة مرة أخرى.');
      });
  };

  const fetchTeachers = () => {
    axiosInstance.get('/teachers')
      .then(response => setTeachers(response.data.data || []))
      .catch(error => {
        console.error('Error fetching teachers:', error);
        toast.error('حدث خطأ أثناء جلب بيانات المدرسين. الرجاء المحاولة مرة أخرى.');
      });
  };

  const fetchClasses = () => {
    axiosInstance.get('/classes')
      .then(response => setClasses(response.data.data || []))
      .catch(error => {
        console.error('Error fetching classes:', error);
        toast.error('حدث خطأ أثناء جلب بيانات الفصول. الرجاء المحاولة مرة أخرى.');
      });
  };

  const handleSearchChange = (value) => setSearchTerm(value);

  const handleEditClick = (subject) => {
    setSelectedSubject(subject);
    setShowEditModal(true);
  };

  const handleDeleteClick = (subjectId) => {
    setSubjectIdToDelete(subjectId);
    setShowDeleteModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedSubject(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    const formData = new FormData();
    
    // Append each field to the formData object
    formData.append('name', selectedSubject.name || '');
    formData.append('description', selectedSubject.description || '');
    formData.append('slug', selectedSubject.slug || '');
    formData.append('teacher_id', selectedSubject.teacher_id || '');
    formData.append('classe_id', selectedSubject.classe_id || ''); // Make sure this matches the expected API field
  
    // Append the image if it exists
    if (selectedSubject.image) {
      const imageBlob = new Blob([selectedSubject.image], { type: 'image/jpeg' }); // Adjust MIME type if needed
      formData.append('image', imageBlob, 'image.jpg'); // Specify filename if necessary
    }
  
    axiosInstance.post(`/subjects/${selectedSubject.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Response:', response); // Log response to check for success
        setShowEditModal(false);
        toast.success('تم تحديث بيانات المادة بنجاح.');
        fetchSubjects(); // Refresh subjects list
      })
      .catch(error => {
        console.error('Error updating subject:', error.response?.data || error.message); // Improved error logging
        toast.error('حدث خطأ أثناء تحديث بيانات المادة. الرجاء المحاولة مرة أخرى.');
      });
  };
  
  

  const confirmDelete = () => {
    axiosInstance.delete(`/subjects/${subjectIdToDelete}`)
      .then(() => {
        setShowDeleteModal(false);
        toast.success('تم حذف المادة بنجاح.');
        fetchSubjects();
      })
      .catch(error => {
        console.error('Error deleting subject:', error);
        toast.error('حدث خطأ أثناء حذف المادة. الرجاء المحاولة مرة أخرى.');
      });
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSubjects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid p-6">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-1">المواد الدراسية</h1>

        <div className="d-flex align-items-center" style={{ marginRight: '15px' }}>
          <Button type="primary">
            <Link href="/admin/subjects/subjects-add">إضافة مادة جديدة</Link>
          </Button>
        </div>
      </div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>الرئيسية</Breadcrumb.Item>
        <Breadcrumb.Item>المواد الدراسية</Breadcrumb.Item>
      </Breadcrumb>

      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <div className="card">
        <SubjectTable
          subjects={currentItems}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredSubjects.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <EditSubjectModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        subject={selectedSubject}
        handleInputChange={handleInputChange}
        handleSaveClick={handleSaveClick}
        teachers={teachers}
        classes={classes}
      />

      <DeleteSubjectModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Page;
