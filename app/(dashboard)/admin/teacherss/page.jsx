"use client";

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../services/axiosInstance'; // Adjust path as per your project structure
import TeacherCard from './_components/TeacherCard';
import TeacherTable from './_components/TeacherTable';
import EditTeacherModal from './_components/EditTeacherModal';
import DeleteTeacherModal from './_components/DeleteTeacherModal';
import SearchBar from './_components/SearchBar';
import Breadcrumbs from './_components/Breadcrumbs';
import Pagination from '../../_helpers/Pagination';
import ViewToggle from './_components/ViewToggle';
import { toast } from 'react-toastify';

const Page = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [teacherIdToDelete, setTeacherIdToDelete] = useState(null);
  const [activeView, setActiveView] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  // Fetch teachers
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axiosInstance.get('/teachers')
      .then(response => {
        setTeachers(response.data.data || []); // Ensure default value if data is not available
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
        toast.error('حدث خطأ أثناء جلب بيانات الأساتذة. الرجاء المحاولة مرة أخرى.');
      });
  };

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleEditClick = (teacher) => {
    setSelectedTeacher(teacher);
    setShowEditModal(true);
  };

  const handleDeleteClick = (teacherId) => {
    setTeacherIdToDelete(teacherId);
    setShowDeleteModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedTeacher(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    axiosInstance.put(`/teachers/${selectedTeacher.id}`, selectedTeacher)
      .then(() => {
        setShowEditModal(false);
        toast.success('تم تحديث بيانات الأستاذ بنجاح.');
        fetchTeachers(); // Refresh the data after update
      })
      .catch(error => {
        console.error('Error updating teacher:', error);
        toast.error('حدث خطأ أثناء تحديث بيانات الأستاذ. الرجاء المحاولة مرة أخرى.');
      });
  };

  const confirmDelete = () => {
    axiosInstance.delete(`/teachers/${teacherIdToDelete}`)
      .then(() => {
        setShowDeleteModal(false);
        toast.success('تم حذف الأستاذ بنجاح.');
        fetchTeachers(); // Refresh the data after delete
      })
      .catch(error => {
        console.error('Error deleting teacher:', error);
        toast.error('حدث خطأ أثناء حذف الأستاذ. الرجاء المحاولة مرة أخرى.');
      });
  };

  const filteredTeachers = teachers.filter(teacher =>
    `${teacher.first_name} ${teacher.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid p-6">
      <div className="col-lg-12 col-md-12 col-12">
        <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
          <Breadcrumbs />
          <ViewToggle activeView={activeView} setActiveView={setActiveView} />
        </div>
      </div>

      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      {activeView === 'grid' ? (
        <div className="row">
          {currentItems.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              handleEditClick={() => handleEditClick(teacher)}
              handleDeleteClick={() => handleDeleteClick(teacher.id)}
            />
          ))}
        </div>
      ) : (
        <div className="card">
          <TeacherTable
            teachers={currentItems}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
      )}

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredTeachers.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <EditTeacherModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        teacher={selectedTeacher}
        handleInputChange={handleInputChange}
        handleSaveClick={handleSaveClick}
      />

      <DeleteTeacherModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Page;
