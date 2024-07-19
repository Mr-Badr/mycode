import axios from 'axios';

const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Fetch all students with their associated user, level, and class details
export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${apiUrl}/students`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const students = response.data.data;
    console.log(students[0].classe_id);

    // Fetch user, level, and class details for each student sequentially
    const studentsWithDetails = [];
    for (let i = 0; i < students.length; i++) {
      const student = students[i];

      // Fetch user details
      const userResponse = await axios.get(`${apiUrl}/users/${student.user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Fetch class details
      const classResponse = await axios.get(`${apiUrl}/classes/${student.class_id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Fetch level details
      const levelId = classResponse.data.level_id;
      const levelResponse = await axios.get(`${apiUrl}/levels/${levelId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Prepare the student object with all details
      const studentWithDetails = {
        ...student,
        user: userResponse.data,
        class: classResponse.data,
        level: levelResponse.data
      };

      studentsWithDetails.push(studentWithDetails);
    }

    return studentsWithDetails;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
