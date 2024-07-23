import React from 'react';

const TeacherCard = ({ teacher, handleEditClick, handleDeleteClick }) => {
  // Log the teacher.image value
  console.log(teacher.image);

  // Replace 'public/' with the correct base URL
  const imageUrl = `https://clicschool.logicielab.net/storage/${teacher.image.replace('public/', '')}`;

  return (
    <div key={teacher.id} className="col-xl-3 col-lg-6 col-md-6 col-12">
      <div className="card mb-4" style={{ height: '300px' }}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="text-center">
            <img
              src={imageUrl}
              className="rounded-circle avatar-xl mb-3"
              alt=""
            />
            <h6 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h6>
            <p className="mb-0" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {teacher.bio}
            </p>
          </div>
          <div className="d-flex justify-content-between border-top py-2 mt-4">
            <span>معدل الأجر بالساعة</span>
            <span className="text-dark">{teacher.hourly_rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
