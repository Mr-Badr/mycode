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
		date_start: '',
		description: '',
		date_end: ''
	});
	const [deleteId, setDeleteId] = useState(null);

	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_API_URL}/competitions`, {
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
		axios.delete(`https://clicschool.logicielab.net/api/competitions/${deleteId}`, {
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
		const { id, user_id, name, date_start, description, date_end } = selected;

		axios.put(`https://clicschool.logicielab.net/api/competitions/${id}`,
			{ user_id, name, date_start, description, date_end },
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(() => {
				const newObjects = objects.map(object =>
					object.id === id ? { ...object, user_id, name, date_start, description, date_end } : object
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
			date_start: '',
			description: '',
			date_end: ''
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
				object.name.toLowerCase().includes(term) || object.date_start.toLowerCase().includes(term)
			)
		);
	};

	const handleCloseEditModal = () => {
		setShowEditModal(false);
		setSelected({
			id: '',
			name: '',
			date_start: '',
			description: '',
			date_end: ''
		});
	};

	const handleCloseDeleteModal = () => {
		setShowDeleteModal(false);
		setDeleteId(null);
	};

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
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
									<div className="card-header d-flex align-items-center justify-content-between">
										<div>
											<h3 className="mb-0 tajawal-bold">مسابقاتي</h3>
										</div>
									</div>
									{/*  Card body  */}
									<div className="card-body p-0">
									<div className="card-header border-bottom-0">
							<form className="d-flex align-items-center">
								<span className="position-absolute ps-3 search-icon">
									<i className="fe fe-search"></i>
								</span>
								<input type="search" className="form-control ps-6" placeholder="البحث عن المسابقات"
									value={searchTerm}
									onChange={handleSearchChange} />
							</form>
						</div>
										<div className="table-responsive">
										<table className="table mb-0 text-nowrap table-hover table-centered">
								<thead className="table-light">
									<tr>
										<th>المسابقات</th>
										<th>الوصف</th>
										<th>تاريخ البداية</th>
										<th>تاريخ النهاية</th>
									</tr>
								</thead>
								<tbody>
									{filtered.map((object) => (
										<tr key={object.id}>
											<td>
													<div className="d-flex align-items-center">
														<div>

												<a href="#" className="text-inherit">
															<img
																src={object.image ? object.image : "../../assets/images/course/course-gatsby.jpg"}
																alt="" className="img-4by3-lg rounded" />
												</a>
																</div>
													<div className='ms-3'>
<h4 className='mb-1 h5'> 
{object.name}
</h4>
													</div>
													</div>
											</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
												{object.description}
											</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100px' }}>
  {formatDate(object.date_start)}
</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100px' }}>
  {formatDate(object.date_end)}
</td>

											{/* <td>
												<div className="hstack gap-4">
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu">
															<span className="dropdown-header">الإعدادات</span>
															<button className="dropdown-item" onClick={() => handleEditClick(object)}>
																<i className="fe fe-edit dropdown-item-icon"></i>
																تعديل
															</button>
															<button className="dropdown-item" onClick={() => handleDeleteClick(object.id)}>
																<i className="fe fe-trash dropdown-item-icon"></i>
																حذف
															</button>
														</span>
													</span>
												</div>
											</td> */}
										</tr>
									))}
								</tbody>
							</table>
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