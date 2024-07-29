"use client";
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/teacher/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Typography, Tooltip } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import icons
import { toast } from 'react-toastify'; // Import toast from react-toastify
import styles from './Page.module.css'; // Import CSS Module

const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

const { Meta } = Card;
const { Title } = Typography;

function Page() {
  const [courses, setCourses] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [courseExercises, setCourseExercises] = useState({});

  useEffect(() => {
    // Fetch courses and exercises
    const fetchData = async () => {
      try {
        const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const exercisesResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exercices`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setCourses(courseResponse.data.data);
        setExercises(exercisesResponse.data.data);

        // Map exercises to their courses
        const groupedExercises = exercisesResponse.data.data.reduce((acc, exercise) => {
          if (!acc[exercise.course_id]) {
            acc[exercise.course_id] = [];
          }
          acc[exercise.course_id].push(exercise);
          return acc;
        }, {});

        setCourseExercises(groupedExercises);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Get course details by their IDs
  const getCourse = (courseId) => {
    return courses.find(course => course.id === courseId);
  };

  // Handle view all exercises
  const handleViewAllClick = (courseId) => {
    toast.info(`عرض جميع التمارين لدورة ${courseId}`); // Replace with your actual logic
  };

  // Handle edit click
  const handleEditClick = (exercise) => {
    toast.info(`تعديل التمرين ${exercise.id}`); // Replace with your actual logic
  };

  // Handle delete click
  const handleDeleteClick = (exerciseId) => {
    toast.info(`حذف التمرين ${exerciseId}`); // Replace with your actual logic
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
              <div className="tab-content col-lg-9 col-md-8 col-12">
                <div className="fade pb-4 tab-pane active show">
                  <div className="bg-transparent shadow-none card">
                    <div className="px-0 py-0 card-body">
                      {Object.keys(courseExercises).map(courseId => {
                        const course = getCourse(parseInt(courseId));
                        return (
                          <div key={courseId} className={styles.courseSection}>
                            <Title level={3} className={styles.courseTitle}>{course.title}</Title>
                            <Row gutter={16}>
                              {courseExercises[courseId].map(exercise => (
                                <Col span={8} key={exercise.id} className={styles.exerciseCol}>
                                  <Card className={styles.exerciseCard}>
                                    <div className={styles.actions}>
                                      <Tooltip title="عرض جميع التمارين">
                                        <EyeOutlined onClick={() => handleViewAllClick(courseId)} />
                                      </Tooltip>
                                    </div>
                                    <Meta
                                      title={exercise.name}
                                      description={exercise.description}
                                      className={styles.cardMeta}
                                    />
                                    <div className={styles.cardFooter}>
                                      <Tooltip title="تعديل">
                                        <EditOutlined onClick={() => handleEditClick(exercise)} />
                                      </Tooltip>
                                      <Tooltip title="حذف">
                                        <DeleteOutlined onClick={() => handleDeleteClick(exercise.id)} />
                                      </Tooltip>
                                    </div>
                                  </Card>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        );
                      })}
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
