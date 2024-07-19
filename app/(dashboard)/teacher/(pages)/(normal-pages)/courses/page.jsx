"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React, { useEffect, useState } from 'react'
import ComponentHeader from '../../../_components/ComponentHeader';
import Link from 'next/link';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TiPlus } from "react-icons/ti";
import AddLessonPopup from "../../(add-pages)/courses-add/page"
import { toast } from 'react-toastify'; // Import toast from react-toastify
import axios from 'axios';
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


function Page() {
  
  /* Show model Start */
  const [show, setShow] = useState(false);
  const sectionClassName = "container-fluid p-4";
  const sectionStyle = {};
  /* Show model End */

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


  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedData({
      id: '',
      name: '',
      last_name: '',
      description: '',
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
	return (
    <div dir="rtl">
    <Header />

    <main>
      <section className="pt-5 pb-5">
			<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
			<ComponentHeader />

          {/* My Section */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              <Navbar />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
								{/*  Card  */}
								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header">
										<h3 className="mb-0 tajawal-bold">الدروس</h3>
										<span>إدارة الدروس التدريبية الخاصة بك وتحديثها مثل البث المباشر والمسودة والبصيرة.</span>
									</div>
									{/*  Card body  */}
									<div className="card-body">
										{/*  Form  */}
										<form className="row gx-3">
											<div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
												<input type="search" className="form-control" placeholder="ابحث في الدروس التدريبية الخاصة بك" 
												value={searchTerm}
												onChange={handleSearchChange} />
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
									{/*  Table  */}
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
                      {filtered.map((object) => (
                        <tr key={object.id}>
                          <td>
                            <a href="#" className="text-inherit">
                              <div className="d-flex align-items-center">
                                <div>
                                <img src={object.image ? object.image : "../../assets/images/course/course-react.jpg"} alt="" className="img-4by3-lg rounded" />
                                </div>
                                <div className="ms-3">
                                <h4 className="mb-0 tajawal-bold" 
                                style={{
                                  height: "50px", 
                                  overflow: "hidden", 
                                  textOverflow: "ellipsis", 
                                  whiteSpace: "nowrap", 
                                  maxWidth: "300px"
                                }}>{`${object.title}`}</h4>

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