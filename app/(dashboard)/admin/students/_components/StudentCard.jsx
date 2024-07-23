import React from 'react';
import { Card, Avatar, Button } from 'antd';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-12">
      <Card style={{ height: '300px' }}>
        <div className="text-center">
          <Avatar size={64} src={student.image || "/path/to/default/avatar.jpg"} />
          <h4>{`${student.first_name} ${student.last_name}`}</h4>
          <p>{student.slug}</p>
        </div>
        <div className="d-flex justify-content-between border-top py-2 mt-4">
          <span>الفصل</span>
          <span>{student.classe_id}</span>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <Button type="primary" onClick={() => onEdit(student)}>تعديل</Button>
          <Button type="danger" onClick={() => onDelete(student.id)}>حذف</Button>
        </div>
      </Card>
    </div>
  );
};

export default StudentCard;
