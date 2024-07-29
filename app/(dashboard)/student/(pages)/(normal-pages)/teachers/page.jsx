"use client";
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Tag, Space } from 'antd'; // Import Ant Design components

const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43';

function Page() {
  const [teachers, setTeachers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [courseDetails, setCourseDetails] = useState({});
  const [loadingCourses, setLoadingCourses] = useState({});

  useEffect(() => {
    // Fetch teachers
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teachers`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Fetched teachers:', response.data.data); // Log teachers data
        setTeachers(response.data.data);
        setFiltered(response.data.data);
        fetchCourses(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
      });
  }, []);

  const fetchCourses = async (teachers) => {
    let coursePromises = [];

    // Collect all course IDs from teachers
    teachers.forEach(teacher => {
      teacher.teacher_courses.forEach(teacherCourse => {
        if (!courseDetails[teacherCourse.course_id] && !loadingCourses[teacherCourse.course_id]) {
          setLoadingCourses(prev => ({ ...prev, [teacherCourse.course_id]: true }));
          coursePromises.push(
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/${teacherCourse.course_id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }).then(response => {
              console.log(`Fetched course ${teacherCourse.course_id}:`, response.data.data); // Log course data
              setCourseDetails(prev => ({ ...prev, [teacherCourse.course_id]: response.data.data }));
              setLoadingCourses(prev => ({ ...prev, [teacherCourse.course_id]: false }));
            }).catch(error => {
              console.error(`Error fetching course ${teacherCourse.course_id}:`, error);
              setLoadingCourses(prev => ({ ...prev, [teacherCourse.course_id]: false }));
            })
          );
        }
      });
    });

    try {
      await Promise.all(coursePromises);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
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

  const columns = [
    {
      title: 'الإسم',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <img
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}`}
            alt="" className="rounded-circle avatar-md me-2" />
          <h5 className="mb-0 tajawal-bold">{`${record.first_name} ${record.last_name}`}</h5>
        </div>
      )
    },
    {
      title: 'الوصف',
      dataIndex: 'bio',
      key: 'bio',
      render: text => (
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
          {text}
        </div>
      )
    },
    {
      title: 'الدورات',
      key: 'courses',
      render: (text, record) => (
        <Space size="middle">
          {record.teacher_courses.map(course => {
            const courseId = course.course_id;
            const courseDetail = courseDetails[courseId];
            console.log('Course ID:', courseId, 'Details:', courseDetail); // Log course ID and details
            if (!courseDetail && !loadingCourses[courseId]) {
              fetchCourses([record]); // Fetch course details if not already available
            }
            return (
              <Tag key={courseId}>
                {courseDetail ? courseDetail.title : 'Loading...'}
              </Tag>
            );
          })}
        </Space>
      )
    },
    {
      title: 'المواضيع',
      key: 'subjects',
      render: (text, record) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {record.subjects.map(subject => (
            <span
              key={subject.id}
              style={{
                display: 'inline-block',
                backgroundColor: '#f5f5f5',
                color: '#000',
                borderRadius: '4px',
                padding: '4px 8px',
                fontSize: '14px'
              }}
            >
              {subject.name}
            </span>
          ))}
        </div>
      )
    }
  ];

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
                <div className="card">
                  <div className="card-header border-bottom-0">
                    <div className="row">
                      <div className="col pe-0">
                        <input type="search" className="form-control" placeholder="البحث عن طريق الإسم"
                          value={searchTerm}
                          onChange={handleSearchChange} />
                      </div>
                    </div>
                  </div>

                  <Table
                    dataSource={filtered}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: true }}
                  />
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
