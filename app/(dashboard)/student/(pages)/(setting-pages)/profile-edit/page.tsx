"use client";
import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import Header from "../../../../../../app/(dashboard)/student/_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../../../../app/(dashboard)/student/_components/ComponentHeader";

function BillingInfo() {
  const [isChecked, setIsChecked] = useState(false);

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
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="border-0 card">
                  <div className="card-header">
                    <div className="mb-3 mb-lg-0">
                      <h3 className="mb-0 tajawal-bold">تفاصيل الملف الشخصي</h3>
                      <p className="mb-0">
                        لديك السيطرة الكاملة لإدارة إعدادات حسابك الخاص.
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-lg-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center mb-4 mb-lg-0">
                        <img
                          src="../assets/images/avatar/avatar-3.jpg"
                          id="img-uploaded"
                          alt=""
                          className="avatar-xl rounded-circle"
                        />
                        <div className="ms-3">
                          <h4 className="mb-0 tajawal-bold"> محمد</h4>
                          <p className="mb-0">أستاذ في مادة العلوم الفيزيائية</p>
                        </div>
                      </div>
                      <div className="w-15">
                      <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm mx-1"
                          style={{
                            width: "-webkit-fill-available"
                          }}
                        >
                          تعديل
                        </button>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                      <h4 className="mb-0 tajawal-bold">تفاصيل شخصية</h4>
                      <p className="mb-4">
                        قم بتحرير معلوماتك الشخصية وعنوانك.
                      </p>
                      <form className="">
                        <div className="row">
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="formFirstName"
                              >
                                الاسم الأول
                              </label>
                              <input
                                placeholder="الاسم الأول"
                                required
                                type="text"
                                id="formFirstName"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="formLastName"
                              >
                                اسم العائلة
                              </label>
                              <input
                                placeholder="اسم العائلة"
                                required
                                type="text"
                                id="formLastName"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="formPhone">
                                الهاتف
                              </label>
                              <input
                                placeholder="الهاتف"
                                required
                                type="text"
                                id="formPhone"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="formBirthday"
                              >
                                تاريخ الإزدياد
                              </label>
                              <input
                                placeholder="تاريخ الإزدياد"
                                className="form-control flatpickr-input"
                                value=""
                                type="text"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="formBirthday"
                              >
                                العنوان 1
                              </label>
                              <input
                                placeholder="العنوان 1"
                                required
                                type="text"
                                id="formBirthday"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="formBirthday"
                              >
                                العنوان 2
                              </label>
                              <input
                                placeholder="العنوان 2"
                                required
                                type="text"
                                id="formBirthday"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6 col-sm-12">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="formState">
                                الولاية
                              </label>
                              <select
                                name=""
                                className="form-select"
                                id="formState"
                              >
                                <option value="1" className="text-dark">
                                  حي الرياض
                                </option>
                                <option value="2" className="text-dark">
                                  المحمدية
                                </option>
                                <option value="3" className="text-dark">
                                  الجلفة
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-12">
                            <button type="submit" className="btn btn-primary">
                              تعديل الحساب
                            </button>
                          </div>
                        </div>
                      </form>
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

export default BillingInfo;
