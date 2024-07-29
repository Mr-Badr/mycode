"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Typography, Breadcrumb, Image, Card } from 'antd';
import axiosinstance from '../../../../../../../services/axiosInstance';
import styles from './CourseDetails.module.css'; // Import your CSS module

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const CourseDetails = () => {
  const { courseId } = useParams(); 
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courseId) {
      axiosinstance.get(`/courses/${courseId}`)
        .then(response => {
          setCourse(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching course details:', error);
        });
    }
  }, [courseId]);

  if (!course) return <div>Loading...</div>;

  const handleCardClick = (url) => {
    // Implement your card click behavior here
    // For example, you could navigate to a detailed page or open a modal
    console.log(`Card clicked: ${url}`);
    // Example: router.push(url);
  };

  return (
    <div dir="rtl">
      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <div className="row mt-0 mt-md-4">
              <div className="col-12">
                <Breadcrumb>
                  <Breadcrumb.Item onClick={() => router.push('/subjects')}>المواد</Breadcrumb.Item>
                  <Breadcrumb.Item onClick={() => router.back()}>الدورات</Breadcrumb.Item>
                  <Breadcrumb.Item>تفاصيل الدورة</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.courseDetailContainer}>
                  <Image 
                    src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${course.image.replace('public/', '')}`} 
                    alt={course.title} 
                    className={styles.courseImage}
                  />
                  <Title level={2} className={styles.courseTitle}>{course.title}</Title>
                  <Paragraph className={styles.courseDescription}>{course.description}</Paragraph>
                  <div className={styles.courseBody}>
                    <h2>محتوى الدورة:</h2>
                    <Paragraph>{course.body}</Paragraph>
                  </div>
                  
                  {course.quizzes.length > 0 && (
                    <div className={styles.cardsContainer}>
                      <Title level={3}>الاختبارات</Title>
                      <div className={styles.cardsRow}>
                        {course.quizzes.map(quiz => (
                          <Card 
                            key={quiz.id} 
                            className={styles.card} 
                            bordered={false}
                            onClick={() => handleCardClick(`/quizzes/${quiz.id}`)} // Replace with actual URL
                          >
                            <Meta
                              title={quiz.name.length > 20 ? `${quiz.name.substring(0, 20)}...` : quiz.name}
                              description={quiz.description.length > 50 ? `${quiz.description.substring(0, 50)}...` : quiz.description}
                            />
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.exercices.length > 0 && (
                    <div className={styles.cardsContainer}>
                      <Title level={3}>التمارين</Title>
                      <div className={styles.cardsRow}>
                        {course.exercices.map(exercice => (
                          <Card 
                            key={exercice.id} 
                            className={styles.card} 
                            bordered={false}
                            onClick={() => handleCardClick(`/exercices/${exercice.id}`)} // Replace with actual URL
                          >
                            <Meta
                              title={exercice.name.length > 20 ? `${exercice.name.substring(0, 20)}...` : exercice.name}
                              description={exercice.description.length > 50 ? `${exercice.description.substring(0, 50)}...` : exercice.description}
                            />
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CourseDetails;
