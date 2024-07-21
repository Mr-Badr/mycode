"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from "../../../../../../_components/Header";
import Navbar from "../../../../../../_components/Navbar";
import { toast } from 'react-toastify';
import axiosinstance from '../../../../../../../../../services/axiosInstance';
import { getStorageUrl } from '../../../../../../../../../utils/getStorageUrl';
import styles from './CourseDetailPage.module.css'; // Import your CSS module

function CourseDetailPage() {
  const [course, setCourse] = useState(null);
  const { subjectId, courseId } = useParams();

  useEffect(() => {
    if (!courseId) return;

    const fetchCourseDetail = async () => {
      try {
        const response = await axiosinstance.get(`/subjects/${subjectId}/courses/${courseId}`);
        setCourse(response.data.data);
      } catch (error) {
        toast.error('Failed to fetch course details');
      }
    };

    fetchCourseDetail();
  }, [courseId, subjectId]);

  if (!course) return <div>Loading...</div>;

  return (
    <div dir="rtl">
      <Header />
      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className={styles.courseDetailContainer}>
                  <img 
                    src={getStorageUrl(course.image)} 
                    alt={course.title} 
                    className={styles.courseImage} 
                  />
                  <h1 className={styles.courseTitle}>{course.title}</h1>
                  <p className={styles.courseDescription}>{course.description}</p>
                  <div className={styles.courseBody}>
                    <h2>محتوى الدورة:</h2>
                    <p>{course.body}</p>
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

export default CourseDetailPage;
