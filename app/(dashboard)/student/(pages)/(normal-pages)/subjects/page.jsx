"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Update to next/navigation
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import { toast } from 'react-toastify';
import axiosinstance from '../../../../../../services/axiosInstance'; // Adjust the path as per your project structure
import { getStorageUrl } from '../../../../../../utils/getStorageUrl'; // Adjust path as per your project structure

function Page() {
  const [subjects, setSubjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axiosinstance.get('/subjects');
        setSubjects(response.data.data);
      } catch (error) {
        toast.error('Failed to fetch subjects');
      }
    };

    fetchSubjects();
  }, []);

  const handleRowClick = (subjectId) => {
    router.push(`/student/subjects/${subjectId}/subject-course`);
  };

  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <ComponentHeader />

            {/* My Section */}
            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                {/* Card */}
                <div className="card mb-4">
                  {/* Card header */}
                  <div className="card-header">
                    <h3 className="mb-0 tajawal-bold">المواد الدراسية</h3>
                    <span>
                      تصفح جميع المواد الدراسية المتاحة هنا. اكتشف دروسك ومواضيعك بسهولة وابقَ على اطلاع بأحدث المعلومات.
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="card-body">
                    {/* Form */}
                    <form className="row gx-3">
                      <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
                        <input type="search" className="form-control" placeholder="ابحث في المواد الدراسية" />
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
                  {/* Table */}
                  <div className="table-responsive overflow-y-hidden">
                    <table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>المادة</th>
                          <th>الوصف</th>
                          <th>الأستاذ</th>
                          <th>القسم</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjects.map((subject) => {
                          const imageUrl = getStorageUrl(subject.image); // Create a constant for the image URL
                          return (
                            <tr key={subject.id} onClick={() => handleRowClick(subject.id)} style={{ cursor: 'pointer' }}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <a href="#">
                                      <img 
                                        src={imageUrl} 
                                        alt="course" 
                                        className="rounded img-4by3-lg" 
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                      />
                                    </a>
                                  </div>
                                  <div className="ms-3">
                                    <h4 className="mb-1 h5">
                                      <a href="#" className="text-inherit">{subject.name}</a>
                                    </h4>
                                  </div>
                                </div>
                              </td>
                              <td>{subject.description}</td>
                              <td>{subject.teacher ? `${subject.teacher.first_name} ${subject.teacher.last_name}` : 'N/A'}</td>
                              <td>{subject.classe ? subject.classe.name : 'N/A'}</td>
                            </tr>
                          );
                        })}
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
  );
}

export default Page;
