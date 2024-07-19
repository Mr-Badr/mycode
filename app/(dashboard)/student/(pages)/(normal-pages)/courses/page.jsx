"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { toast } from 'react-toastify';
import Pagination from '../../../_components/Pagination';
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token

function Page() {
  const [objects, setObjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selected, setSelected] = useState({
    id: '',
    name: '',
    last_name: '',
    description: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setObjects(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (object) => {
    setSelected(object);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`https://clicschool.logicielab.net/api/courses/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        const newObjects = objects.filter(object => object.id !== deleteId);
        setObjects(newObjects);
        setFiltered(newObjects);
        setShowDeleteModal(false);
        setDeleteId(null);
        toast.success('تم الحذف بنجاح!', {
          position: "bottom-right"
        });
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        toast.error('حدث خطأ أثناء الحذف. الرجاء المحاولة مرة أخرى.', {
          position: "bottom-right"
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    const { id, user_id, name, last_name, description, hourly_rate } = selected;

    axios.put(`https://clicschool.logicielab.net/api/courses/${id}`,
      { user_id, name, last_name, description, hourly_rate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const newObjects = objects.map(object =>
          object.id === id ? { ...object, user_id, name, last_name, description, hourly_rate } : object
        );
        setObjects(newObjects);
        setFiltered(newObjects);
        setShowEditModal(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      objects.filter(object =>
        object.title.toLowerCase().includes(term)
      )
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelected({
      id: '',
      name: '',
      last_name: '',
      description: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div dir="rtl">
      <Header />
      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <ComponentHeader />
            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="card mb-4">
                  <div className="card-header">
                    <h3 className="mb-0 tajawal-bold">الدروس</h3>
                    <span>إدارة الدروس التدريبية الخاصة بك وتحديثها مثل البث المباشر والمسودة والبصيرة.</span>
                  </div>
                  <div className="card-body">
                    <form className="row gx-3">
                      <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="ابحث في الدروس التدريبية الخاصة بك"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                      </div>
                      <div className="col-lg-3 col-md-5 col-12">
                        <select className="form-select">
                          <option value="">تاريخ الإنشاء</option>
                          <option value="Newest">الأحدث</option>
                          <option value="High Rated">تقييم عالي</option>
                          <option value="Law Rated">تصنيف منخفض</option>
                          <option value="High Earned">مكاسب عالية</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="table-responsive overflow-y-hidden">
                    <table className="table mb-0 text-nowrap table-centered table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>الدروس</th>
                          <th>الوصف</th>
                          <th>المادة الدراسية</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((object) => (
                          <tr key={object.id}>
                            <td>
                              <a href="#" className="text-inherit">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img
                                      src={object.image ? object.image : "../../assets/images/course/course-react.jpg"}
                                      alt=""
                                      className="img-4by3-lg rounded"
                                    />
                                  </div>
                                  <div className="ms-3">
                                    <h4 className="mb-0 tajawal-bold" style={{ height: "50px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "300px" }}>
                                      {object.title}
                                    </h4>
                                    <span>Added on 7 July, 2024</span>
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                              {object.description}
                            </td>
                            <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                              {object.subject_id}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer">
                    <Pagination
                      itemsPerPage={itemsPerPage}
                      totalItems={filtered.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
