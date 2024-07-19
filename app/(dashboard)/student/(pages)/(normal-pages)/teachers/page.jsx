"use client"
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token

function Page() {

  /* Show model Start */
  const [show, setShow] = useState(false);
  const sectionClassName = "container-fluid p-4";
  const sectionStyle = {};
  /* Show model End */

  const [teachers, setTeachers] = useState([]);
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
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teachers`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setTeachers(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (teacher) => {
    setSelected(teacher);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`https://clicschool.logicielab.net/api/teachers/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        const newTeachers = teachers.filter(teacher => teacher.id !== deleteId);
        setTeachers(newTeachers);
        setFiltered(newTeachers);
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
    const { id, user_id, first_name, last_name, bio, hourly_rate } = selected;

    axios.put(`https://clicschool.logicielab.net/api/teachers/${id}`,
      { user_id, first_name, last_name, bio, hourly_rate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const newTeachers = teachers.map(teacher =>
          teacher.id === id ? { ...teacher, user_id, first_name, last_name, bio, hourly_rate } : teacher
        );
        setTeachers(newTeachers);
        setFiltered(newTeachers);
        setShowEditModal(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };


  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedData({
      id: '',
      first_name: '',
      last_name: '',
      bio: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setDeleteId(null);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      teachers.filter(teacher =>
        teacher.first_name.toLowerCase().includes(term) || teacher.last_name.toLowerCase().includes(term)
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

              {/* My Section */}
              <div className="col-lg-9 col-md-8 col-12">

                {/*  Tab content  */}
                <div className="tab-content">
                <div className="card">
                      <div className="card-header border-bottom-0">
                        <div className="row">
                          <div className="col pe-0">
                            <form>
                              <input type="search" className="form-control" placeholder="البحث عن طريق الإسم"
                                value={searchTerm}
                                onChange={handleSearchChange} />
                            </form>
                          </div>
                        </div>
                      </div>
                      {/*  Table  */}
                      <div className="table-responsive">
                        <table className='table mb-0 text-nowrap table-hover table-centered'>
                          <thead className='table-light'>
                            <tr>
                              <th>الإسم</th>
                              <th>الوصف</th>
                              <th>معدل الأجر بالساعة</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filtered.map((teacher) => (
                              <tr key={teacher.id}>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-12.jpg"} alt="" className="rounded-circle avatar-md me-2" />
                                    <h5 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h5>
                                  </div>
                                </td>
                                <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                                  {teacher.bio}
                                </td>
                                <td style={{ width: '10px' }}>{teacher.hourly_rate}</td>
                                
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="pt-2 pb-4">
                        {/*  Pagination  */}
                        <nav>
                          <ul className="pagination justify-content-center mb-0">
                            <li className="page-item disabled">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link mx-1 rounded" href="#">1</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">2</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">3</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Page