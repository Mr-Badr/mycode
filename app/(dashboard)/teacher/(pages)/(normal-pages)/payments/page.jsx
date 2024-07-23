"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React from 'react'
import ComponentHeader from '../../../_components/ComponentHeader';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


function Page() {
	return (
		<div dir='rtl'>
			<Header />
			<main>
				<section className="pt-5 pb-5">
					<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
						{/*  User info  */}
						<ComponentHeader />

						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<div className="col-lg-9 col-md-8 col-12">
								{/*  Card  */}
								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header border-bottom-0">
										<h3 className=" mb-3 tajawal-bold">تاريخ السحب</h3>
										<div className="row align-items-center">
											<div className="col-lg-3 col-md-6 mb-2 mb-lg-0">
												{/*  Custom select  */}
												<select className="form-select">
													<option value="">30 days</option>
													<option value="Last 7 days">2 Months</option>
													<option value="High Rated">6 Months</option>
												</select>
											</div>
											<div className="col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0">
												{/*  Custom select  */}
												<select className="form-select">
													<option value="">Oct 2020</option>
													<option value="Jan 2021">Jan 2021</option>
													<option value="May 2021">May 2021</option>
												</select>
											</div>
											<div className="col-lg-4 col-md-6 mb-2 mb-lg-0">
												{/*  Custom select  */}
												<select className="form-select">
													<option value="">نوع المعاملة</option>
													<option value="cash transactions">Cash Transactions</option>
													<option value="non-cash transactions">Non Cash Transactions</option>
													<option value="credit transactions">Credit Transactions</option>
												</select>
											</div>
											<div className="col-lg-2 col-md-6 text-lg-end">
												{/*  Button  */}
												<a href="#" className="btn btn-outline-secondary btn-icon" download="">
													<i className="fe fe-download"></i>
												</a>
											</div>
										</div>
									</div>
									{/*  Table  */}
									<div className="table-responsive">
										<table className="table mb-0 text-nowrap table-hover table-centered table-with-checkbox">
											<thead className="table-light">
												<tr>
													<th>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="checkAll" />
															<label className="form-check-label" htmlFor="checkAll"></label>
														</div>
													</th>
													<th>ID</th>
													<th>الطريقة</th>
													<th>الحالة</th>
													<th>الكمية</th>
													<th>التاريخ</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawTwo" />
															<label className="form-check-label" htmlFor="withdrawTwo"></label>
														</div>
													</td>
													<td>#1060</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-warning">قيد الانتظار</span>
													</td>
													<td>$1200</td>
													<td>Sept 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawThree" />
															<label className="form-check-label" htmlFor="withdrawThree"></label>
														</div>
													</td>
													<td>#1038</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$2000</td>
													<td>Aug 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawFour" />
															<label className="form-check-label" htmlFor="withdrawFour"></label>
														</div>
													</td>
													<td>#1016</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$3590</td>
													<td>July 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawFive" />
															<label className="form-check-label" htmlFor="withdrawFive"></label>
														</div>
													</td>
													<td>#1008</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$4500</td>
													<td>Aug 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawSix" />
															<label className="form-check-label" htmlFor="withdrawSix"></label>
														</div>
													</td>
													<td>#1002</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$4500</td>
													<td>May 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawSeven" />
															<label className="form-check-label" htmlFor="withdrawSeven"></label>
														</div>
													</td>
													<td>#982</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$1232</td>
													<td>April 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawEight" />
															<label className="form-check-label" htmlFor="withdrawEight"></label>
														</div>
													</td>
													<td>#970</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-danger">Cancel</span>
													</td>
													<td>$4235</td>
													<td>March 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawNine" />
															<label className="form-check-label" htmlFor="withdrawNine"></label>
														</div>
													</td>
													<td>#965</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$1231</td>
													<td>Feb 15, 2020</td>
												</tr>
												<tr>
													<td>
														<div className="form-check">
															<input type="checkbox" className="form-check-input" id="withdrawTen" />
															<label className="form-check-label" htmlFor="withdrawTen"></label>
														</div>
													</td>
													<td>#953</td>
													<td>PayPal</td>
													<td>
														<span className="badge bg-success">Paid</span>
													</td>
													<td>$5435</td>
													<td>Jan 15, 2020</td>
												</tr>
											</tbody>
										</table>
										<div className="card-footer">
											<nav>
												<ul className="pagination justify-content-center mb-0">
													<li className="page-item disabled">
														<a className="page-link mx-1 rounded" href="#">
															<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
																</path></svg>
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