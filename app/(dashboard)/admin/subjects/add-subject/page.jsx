// app/subjects/page.jsx
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './SubjectsPage.module.css';

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get('/api/subject')
      .then(response => {
        setSubjects(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  return (
    <div className={styles.subjectsPage}>
      <h1 className={styles.title}>مواد دراسية</h1>
      <div className={styles.subjectsContainer}>
        {subjects.map(subject => (
          <div key={subject.id} className={styles.subjectCard}>
            <img src={subject.image} alt={subject.name} className={styles.subjectImage} />
            <div className={styles.subjectInfo}>
              <h2 className={styles.subjectName}>{subject.name}</h2>
              <p className={styles.subjectDescription}>{subject.description}</p>
              <div className={styles.subjectDetails}>
                <span className={styles.subjectTeacher}>المعلم: {subject.teacher.first_name} {subject.teacher.last_name}</span>
                <span className={styles.subjectClass}>القسم: {subject.classe.name}</span>
              </div>
              <Link href={`/subjects/${subject.slug}`}>
                <a className={styles.subjectLink}>عرض الدروس</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
