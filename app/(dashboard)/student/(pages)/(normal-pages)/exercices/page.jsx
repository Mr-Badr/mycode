"use client"
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
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
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exercices`, {
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
    axios.delete(`https://clicschool.logicielab.net/api/exercices/${deleteId}`, {
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

    axios.put(`https://clicschool.logicielab.net/api/exercices/${id}`,
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
        object.name.toLowerCase().includes(term) || object.last_name.toLowerCase().includes(term)
      )
    );
  };
  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
        <div className="container-fluid p-4" style={{maxWidth: "75%"}}>
            <ComponentHeader />

            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              {/* My Section */}
              <div className="tab-content col-lg-9 col-md-8 col-12">
                <div
                  role="tabpanel"
                  id="react-aria8931981306-:r25:-tabpane-grid"
                  aria-labelledby="react-aria8931981306-:r25:-tab-grid"
                  className="fade pb-4 tab-pane"
                >
                  <div className="bg-transparent shadow-none card">
                    <div className="px-0 py-0 card-body">
                      <div className="row">
                        <div className="mb-3 col-xl-12 col-lg-12 col-sm-12">
                          <div className="row">
                            <div className="pe-0 col">
                              <div className="mb-3">
                                <input
                                  placeholder="Search by Name"
                                  type="search"
                                  id="formSearchbyName"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-auto">
                              <a
                                className="btn btn-secondary"
                                href="/marketing/instructor/instructor-students/"
                              >
                                Export CSV
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
                                  src="../assets/images/avatar/avatar-3.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Reva Yokk</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>Los Angeles,
                                  CA
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">7 July, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">0%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
                                  src="../assets/images/avatar/avatar-5.jpg"
                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Dianna Smiley</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>United
                                  Kingdom
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">6 July, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">12%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Nia Sikhone</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>United State
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">12 June, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">14%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Jacob Jones</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>India
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">2 July, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">33%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Kristin Watson</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>New York
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">1 July, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">24%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Nia Sikhone</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>Netherland
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">12 June, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">45%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Rivao Luke</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>New York
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">1 July, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Nia Sikhone</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>Netherland
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">12 June, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">68%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                          <div className="mb-4 card">
                            <div className="card-body">
                              <div className="text-center">
                                <img
src="../assets/images/avatar/avatar-3.jpg"                                  alt=""
                                  className="rounded-circle avatar-xl mb-3"
                                />
                                <h4 className="mb-1">Xiaon Merry</h4>
                                <p className="mb-0 fs-6">
                                  <i className="fe fe-map-pin me-1"></i>Netherland
                                </p>
                                <a
                                  className="btn btn-sm btn-outline-secondary mt-3"
                                  href="/marketing/instructor/instructor-students/"
                                >
                                  الحل
                                  </a>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                                <span>Enrolled</span>
                                <span className="text-dark">8 June, 2020</span>
                              </div>
                              <div className="d-flex justify-content-between pt-2 fs-6">
                                <span>Progress</span>
                                <span className="text-success">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul
                        className="justify-content-center mb-0 pagination"
                        role="navigation"
                        aria-label="Pagination"
                      >
                        <li className="previous paginationDisabled">
                          <a
                            className="page-link mx-1 rounded "
                            tabIndex="-1"
                            role="button"
                            aria-disabled="true"
                            aria-label="Previous page"
                            rel="prev"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14px"
                              height="14px"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a
                            rel="canonical"
                            role="button"
                            className="page-link mx-1 rounded"
                            tabIndex="-1"
                            aria-label="Page 1 is your current page"
                            aria-current="page"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            rel="next"
                            role="button"
                            className="page-link mx-1 rounded"
                            tabIndex="0"
                            aria-label="Page 2"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            role="button"
                            className="page-link mx-1 rounded"
                            tabIndex="0"
                            aria-label="Page 3"
                          >
                            3
                          </a>
                        </li>
                        <li className="next">
                          <a
                            className="page-link mx-1 rounded"
                            tabIndex="0"
                            role="button"
                            aria-disabled="false"
                            aria-label="Next page"
                            rel="next"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14px"
                              height="14px"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="react-aria8931981306-:r25:-tabpane-list"
                  aria-labelledby="react-aria8931981306-:r25:-tab-list"
                  className="fade pb-4 tab-pane active show"
                >
                  <div className="card">
                    <div className="px-0 py-0 card-body">
                      <div className="row">
                        <div className="mb-lg-0 mb-2 ps-5 py-4 col">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search By Name"
                            value=""
                          />
                        </div>
                        <div className="mb-lg-0 mb-2 pe-5 py-4 col-auto">
                          <a
                            className="btn btn-secondary"
                            href="/marketing/instructor/instructor-students/"
                          >
                            Export CSV
                          </a>
                        </div>
                      </div>
                      <div className="border-0 overflow-y-hidden">
                        <div className="table-responsive">
                        <table className="table mb-0 text-nowrap table-hover table-centered">
								<thead className="table-light">
									<tr>
										<th>التمرين </th>
										<th>الوصف</th>
										<th>الدرس</th>
									</tr>
								</thead>
								<tbody>
								{filtered.map((object) => (
                        <tr key={object.id}>
										<td>
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">
												{object.name}
												</a>
											</h5>
										</td>
										<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {object.description}
                          </td>
										<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {object.course_id}
                          </td>

									
									</tr>
									))}
								</tbody>
							</table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="pb-5">
                            <nav>
                              <ul className="justify-content-center mb-0 pagination">
                                <li className="disabled page-item">
                                  <button
                                    type="button"
                                    disabled=""
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    <i className="fe fe-chevron-left"></i>
                                  </button>
                                </li>
                                <li className="active page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    1
                                  </button>
                                </li>
                                <li className="page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    2
                                  </button>
                                </li>
                                <li className="page-item">
                                  <button
                                    type="button"
                                    className="page-link mx-1 rounded btn btn-primary"
                                  >
                                    <i className="fe fe-chevron-right"></i>
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
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
