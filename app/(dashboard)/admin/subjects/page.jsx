"use client";
import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../../../../services/axiosInstance';
import SubjectTable from './_components/SubjectTable';
import EditSubjectModal from './_components/EditSubjectModal';
import DeleteSubjectModal from './_components/DeleteSubjectModal';
import AddSubjectModal from './_components/AddSubjectModal';
import SearchBar from './_components/SearchBar';
import Pagination from '../../_helpers/Pagination';
import { toast } from 'react-toastify';
import { Breadcrumb, Button } from 'antd';
import FormData from 'form-data'; // Ensure you have form-data package installed

const Page = () => {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState({});
  const [subjectIdToDelete, setSubjectIdToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchSubjects = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/subjects');
      setSubjects(response.data.data || []);
    } catch (error) {
      console.error('Error fetching subjects:', error);
      toast.error('حدث خطأ أثناء جلب بيانات المواد. الرجاء المحاولة مرة أخرى.');
    }
  }, []);

  const fetchTeachers = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/teachers');
      setTeachers(response.data.data || []);
    } catch (error) {
      console.error('Error fetching teachers:', error);
      toast.error('حدث خطأ أثناء جلب بيانات المدرسين. الرجاء المحاولة مرة أخرى.');
    }
  }, []);

  const fetchClasses = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/classes');
      setClasses(response.data.data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
      toast.error('حدث خطأ أثناء جلب بيانات الفصول. الرجاء المحاولة مرة أخرى.');
    }
  }, []);

  useEffect(() => {
    fetchSubjects();
    fetchTeachers();
    fetchClasses();
  }, [fetchSubjects, fetchTeachers, fetchClasses]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value || '');
  };

  const handleEditClick = (subject) => {
    setSelectedSubject(subject);
    setShowEditModal(true);
  };

  const handleDeleteClick = (subjectId) => {
    setSubjectIdToDelete(subjectId);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => setShowAddModal(true);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedSubject(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    const formData = new FormData();
    formData.append('name', selectedSubject.name || '');
    formData.append('description', selectedSubject.description || '');
    formData.append('slug', selectedSubject.slug || '');
    formData.append('teacher_id', selectedSubject.teacher_id || '');
    formData.append('classe_id', selectedSubject.classe_id || '');

    if (selectedSubject.image) {
      const imageBlob = new Blob([selectedSubject.image], { type: 'image/jpeg' });
      formData.append('image', imageBlob, 'image.jpg');
    }

    try {
      await axiosInstance.post(`/subjects/${selectedSubject.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowEditModal(false);
      toast.success('تم تحديث بيانات المادة بنجاح.');
      fetchSubjects(); // Refresh subjects data
    } catch (error) {
      console.error('Error updating subject:', error.response?.data || error.message);
      toast.error('حدث خطأ أثناء تحديث بيانات المادة. الرجاء المحاولة مرة أخرى.');
    }
  };

  const handleSaveNewSubject = async (newSubject) => {
    const formData = new FormData();
    formData.append('name', newSubject.name || '');
    formData.append('description', newSubject.description || '');
    formData.append('slug', newSubject.slug || '');
    formData.append('teacher_id', newSubject.teacher_id || '');
    formData.append('classe_id', newSubject.classe_id || '');

    if (newSubject.image) {
      const imageBlob = new Blob([newSubject.image], { type: 'image/jpeg' });
      formData.append('image', imageBlob, 'image.jpg');
    }

    try {
      await axiosInstance.post('/subjects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowAddModal(false);
      toast.success('تم إضافة المادة بنجاح.');
      fetchSubjects(); // Refresh subjects data
    } catch (error) {
      console.error('Error adding subject:', error);
      toast.error('حدث خطأ أثناء إضافة المادة. الرجاء المحاولة مرة أخرى.');
    }
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete(`/subjects/${subjectIdToDelete}`);
      setShowDeleteModal(false);
      toast.success('تم حذف المادة بنجاح.');
      fetchSubjects(); // Refresh subjects data
    } catch (error) {
      console.error('Error deleting subject:', error);
      toast.error('حدث خطأ أثناء حذف المادة. الرجاء المحاولة مرة أخرى.');
    }
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
          <Button type="primary" onClick={handleAddClick}>
            إضافة مادة جديدة
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

      <AddSubjectModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
        teachers={teachers}
        classes={classes}
        handleSaveNewSubject={handleSaveNewSubject}
      />
    </div>
  );
};

export default Page;
