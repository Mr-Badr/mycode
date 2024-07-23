"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { AppstoreOutlined, TableOutlined } from '@ant-design/icons';

const ViewToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1 className="mb-1">الأساتذة</h1>
      <div className="d-flex align-items-center">
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: "5px" }}>    

        <Button
          type={activeView === 'grid' ? 'primary' : 'default'}
          icon={<AppstoreOutlined />}
          onClick={() => setActiveView('grid')}
          style={{
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            margin: '0',
          }}
        />
        <Button
          type={activeView === 'list' ? 'primary' : 'default'}
          icon={<TableOutlined />}
          onClick={() => setActiveView('list')}
          style={{
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            margin: '0',
          }}
        /></div>
        <Button type="primary" style={{ marginLeft: '15px' }}>
          <Link href="/admin/teachers/add-teacher">إضافة أستاذ جديد</Link>
        </Button>
      </div>
    </div>
  );
};

export default ViewToggle;
