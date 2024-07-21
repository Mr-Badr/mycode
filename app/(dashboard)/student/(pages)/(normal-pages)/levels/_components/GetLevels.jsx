// app/admin/levelss/GetLevels.jsx
"use client";
import React, { useEffect, useState } from 'react';
import { fetchData } from './fetchData'; // Adjust path as necessary
import CardList from './CardList'; // Adjust path as necessary
import ContentDetails from './ContentDetails'; // Adjust path as necessary

const getEndpoint = (slugArray) => {
  if (!slugArray || slugArray.length === 0) return 'levels';
  if (slugArray.length === 1) return 'classes';
  if (slugArray.length === 2) return 'subjects';
  if (slugArray.length === 3) return 'courses';
  if (slugArray.length === 4) return 'content'; // Exams, Exercises, Quizzes, Competitions
  if (slugArray.length === 5) return 'solutions';
  return ''; // Handle other cases as needed
};

const GetLevels = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState(''); // Initialize endpoint state with empty string
  const [filterBy, setFilterBy] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    if (!slug || slug.length === 0) {
      setEndpoint('levels'); // If slug is undefined or empty, default to 'levels'
      fetchDataLevels(); // Fetch data for levels directly
      return;
    }

    const fetchDataAsync = async () => {
      const endpoint = getEndpoint(slug);
      setEndpoint(endpoint);

      let data;
      if (slug.length > 0) {
        const filterKey = endpoint === 'classes' ? 'levelSlug' :
                          endpoint === 'subjects' ? 'classSlug' :
                          endpoint === 'courses' ? 'subjectSlug' :
                          endpoint === 'content' ? 'courseSlug' : '';
        data = await fetchData(endpoint, filterKey, slug[slug.length - 1]);
      } else {
        data = await fetchData(endpoint);
      }
      setData(data);
    };

    fetchDataAsync();
  }, [slug]);

  const fetchDataLevels = async () => {
    const data = await fetchData('levels');
    setData(data);
  };

  if (endpoint === 'solutions') {
    return <ContentDetails data={data} />;
  }

  return <CardList params={params} data={data} />;
};

export default GetLevels;

