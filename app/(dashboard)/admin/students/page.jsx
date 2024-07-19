"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import StudentListTable from './_components/StudentListTable';
import StudentModal from './_components/StudentModal';
import DeleteConfirmationModal from './_components/DeleteConfirmationModal';

import { fetchStudents } from './api';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selected, setSelected] = useState({
    id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const studentsData = await fetchStudents();
        setStudents(studentsData);
        setFiltered(studentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., show error toast
        toast.error('حدث خطأ أثناء جلب الطلاب. الرجاء المحاولة مرة أخرى.', {
          position: "bottom-right"
        });
      }
    }

    fetchData();
  }, []);

  const handleEditClick = (student) => {
    setSelected(student);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    // Implement save logic here
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      students.filter(student =>
        student.user.first_name.toLowerCase().includes(term) || student.user.last_name.toLowerCase().includes(term)
      )
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelected({
      id: '',
      first_name: '',
      last_name: '',
      bio: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  return (
    <section className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-1 tajawal-bold">
                الطلاب
                <span className="fs-5 mx-1">(1,22,105 )</span>
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">لوحة التحكم</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">طلاب</li>
                </ol>
              </nav>
            </div>
            <div className="nav btn-group" role="tablist">
              <div className='me-2'>
                <Link href="/admin/students-add" className="btn btn-primary" data-bs-target="#newCatgory" alt="">إضافة طالب جديد</Link>
              </div>
              <button className="btn btn-outline-secondary" data-bs-toggle="tab" data-bs-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="false" tabIndex="-1">
                <span className="fe fe-grid"></span>
              </button>
              <button className="btn btn-outline-secondary active" data-bs-toggle="tab" data-bs-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="true">
                <span className="fe fe-list"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="tab-content">
            <div className="tab-pane fade active show" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
              <div className="card">
                <div className="card-header">
                  <input type="search" className="form-control" placeholder="بحث الطلاب" value={searchTerm} onChange={handleSearchChange} />
                </div>
                <StudentListTable filtered={filtered} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render StudentModal if showEditModal is true */}
      {showEditModal && (
        <StudentModal
          show={showEditModal}
          handleCloseModal={handleCloseEditModal}
          selected={selected}
          handleInputChange={handleInputChange}
          handleSaveClick={handleSaveClick}
        />
      )}

      {/* Render DeleteConfirmationModal if showDeleteModal is true */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          show={showDeleteModal}
          handleCloseModal={handleCloseDeleteModal}
          confirmDelete={confirmDelete}
        />
      )}
    </section>
  );
};

export default Student;
