"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "../../../../../_components/Header";
import Navbar from "../../../../../_components/Navbar";
import { toast } from 'react-toastify';
import axiosinstance from '../../../../../../../../services/axiosInstance';
import { getStorageUrl } from '../../../../../../../../utils/getStorageUrl';
import { useParams } from 'next/navigation';
import styles from './CoursesPage.module.css';
import ComponentHeader from '../../../../../_components/ComponentHeader';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const { subjectId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!subjectId) return;

    const fetchCourses = async () => {
      try {
        const response = await axiosinstance.get(`/subjects/${subjectId}`);
        setCourses(response.data.data.courses);
      } catch (error) {
        toast.error('Failed to fetch courses');
      }
    };

    fetchCourses();
  }, [subjectId]);

  const handleCardClick = (courseId) => {
    router.push(`/student/subjects/${subjectId}/subject-course/${courseId}`);
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
              <div className="col-lg-9 col-md-8 col-12">
                <div className={`row ${styles.cardContainer}`}>
                  {courses.map((course) => {
                    const imageUrl = getStorageUrl(course.image);
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-12" key={course.id}>
                        <div 
                          className={styles.courseCard}
                          onClick={() => handleCardClick(course.id)}
                        >
                          <img 
                            src={imageUrl} 
                            alt={course.title} 
                            className={styles.cardImgTop} 
                          />
                          <div className={styles.cardBody}>
                            <h3 className={styles.courseTitle}>{course.title}</h3>
                            <p className={styles.courseDescription}>{course.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CoursesPage;
