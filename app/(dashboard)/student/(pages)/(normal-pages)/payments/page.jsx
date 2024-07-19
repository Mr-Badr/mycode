"use client";
import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


function Payement() {
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
                  <div className="d-lg-flex justify-content-between align-items-center card-header">
                    <div className="mb-3 mb-lg-0">
                      <h3 className="mb-0 tajawal-bold">الخطة الحالية</h3>
                      <span>فيما يلي معلومات خطتك النشطة الحالية.</span>
                    </div>
                    <div>
                      <Link href="#" className="btn btn-outline-primary btn-sm">
                        التبديل إلى الفواتير السنوية
                      </Link>
                    </div>
                  </div>
                  {/*  Card body  */}
                  <div className="card-body">
                    <h2 className="tajawal-bold mb-0">$39/شهريا</h2>
                    <p className="mb-0">
                      رسوم الشهر القادم الخاصة بك
                      <span className="text-success mx-1">$39</span>
                      سيتم تطبيقه على طريقة الدفع الأساسية الخاصة بك في
                      <span className="text-success mx-1">July 20, 2020.</span>
                    </p>
                  </div>
                </div>
                {/*  Card  */}
                <div className="card mb-4">
                  {/*  Card header  */}
                  <div className="card-header">
                    <h3 className="mb-0 tajawal-bold">طرق الدفع</h3>
                    <span>يتم استخدام طريقة الدفع الأساسية بشكل افتراضي</span>
                  </div>
                  {/*  Card body  */}
                  <div className="card-body">
                    {/*  List group  */}
                    <ul className="list-group list-group-flush">
                      {/*  List group item  */}
                      <li className="list-group-item px-0 pb-3 pt-0">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <img
                              src="../assets/images/creditcard/visa.svg"
                              alt="card"
                              className="me-3"
                            />
                            <div>
                              <h5 className="mb-0 tajawal-bold">Visa ending in 1234</h5>
                              <p className="mb-0 fs-6">Expires in 10/2021</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="badge bg-success me-4">أساسي</span>
                            <span className="dropdown dropstart">
                              <Link
                                className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                href="#"
                                role="button"
                                id="paymentDropdown"
                                data-bs-toggle="dropdown"
                                data-bs-offset="-20,20"
                                aria-expanded="false"
                              >
                                <i className="fe fe-more-vertical"></i>
                              </Link>
                              <span
                                className="dropdown-menu"
                                aria-labelledby="paymentDropdown"
                              >
                                <span className="dropdown-header">
                                  الإعدادات
                                </span>
                                <Link className="dropdown-item" href="#">
                                  <i className="fe fe-edit dropdown-item-icon"></i>
                                  تعديل
                                </Link>
                                <Link className="dropdown-item" href="#">
                                  <i className="fe fe-trash dropdown-item-icon"></i>
                                  حذف
                                </Link>
                                <Link className="dropdown-item" href="#">
                                  <i className="fe fe-credit-card dropdown-item-icon"></i>
                                  اجعلها أساسية
                                </Link>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      {/*  List group item  */}
                      <li className="list-group-item px-0 py-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <img
                              src="../assets/images/creditcard/mastercard.svg"
                              alt="card"
                              className="me-3"
                            />
                            <div>
                              <h5 className="mb-0 tajawal-bold">
                                Mastercard ending in 1234
                              </h5>
                              <p className="mb-0 fs-6">Expires in 03/2022</p>
                            </div>
                          </div>
                          <span className="dropdown dropstart">
                            <Link
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown1"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </Link>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown1"
                            >
                              <span className="dropdown-header">الإعدادات</span>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon"></i>
                                تعديل
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon"></i>
                                حذف
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-credit-card dropdown-item-icon"></i>
                                اجعلها أساسية
                              </Link>
                            </span>
                          </span>
                        </div>
                      </li>
                      {/*  List group item  */}
                      <li className="list-group-item px-0 py-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <img
                              src="../assets/images/creditcard/discover.svg"
                              alt="card"
                              className="me-3"
                            />
                            <div>
                              <h5 className="mb-0 tajawal-bold">Discover ending in 1234</h5>
                              <p className="mb-0 fs-6">Expires in 07/2021</p>
                            </div>
                          </div>
                          <span className="dropdown dropstart">
                            <Link
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown2"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </Link>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown2"
                            >
                              <span className="dropdown-header">الإعدادات</span>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon"></i>
                                تعديل
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon"></i>
                                حذف
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-credit-card dropdown-item-icon"></i>
                                اجعلها أساسية
                              </Link>
                            </span>
                          </span>
                        </div>
                      </li>
                      {/*  List group item  */}
                      <li className="list-group-item px-0 py-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <img
                              src="../assets/images/creditcard/americanexpress.svg"
                              alt="card"
                              className="me-3"
                            />
                            <div>
                              <h5 className="mb-0 tajawal-bold">
                                American Express ending in 1234
                              </h5>
                              <p className="mb-0 fs-6">Expires in 12/2021</p>
                            </div>
                          </div>
                          <span className="dropdown dropstart">
                            <Link
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown3"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </Link>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown3"
                            >
                              <span className="dropdown-header">الإعدادات</span>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon"></i>
                                تعديل
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon"></i>
                                حذف
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-credit-card dropdown-item-icon"></i>
                                اجعلها أساسية
                              </Link>
                            </span>
                          </span>
                        </div>
                      </li>
                      {/*  List group item  */}
                      <li className="list-group-item px-0 py-3 border-bottom">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <img
                              src="../assets/images/creditcard/paypal.svg"
                              alt="card"
                              className="me-3"
                            />
                            <div>
                              <h5 className="mb-0 tajawal-bold">
                                Paypal Express ending in 1234
                              </h5>
                              <p className="mb-0 fs-6">Expires in 10/2021</p>
                            </div>
                          </div>
                          <span className="dropdown dropstart">
                            <Link
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown4"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </Link>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown4"
                            >
                              <span className="dropdown-header">الإعدادات</span>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon"></i>
                                تعديل
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon"></i>
                                حذف
                              </Link>
                              <Link className="dropdown-item" href="#">
                                <i className="fe fe-credit-card dropdown-item-icon"></i>
                                اجعلها أساسية
                              </Link>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                    {/*  button */}
                    <Link
                      href="#"
                      className="btn btn-outline-primary mt-4"
                      data-bs-toggle="modal"
                      data-bs-target="#paymentModal"
                    >
                      إضافة طريقة دفع
                    </Link>
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

export default Payement;
