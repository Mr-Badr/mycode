"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, UserOutlined, SolutionOutlined, BookOutlined, CalendarOutlined, ReadOutlined, FileTextOutlined, TrophyOutlined, UsergroupAddOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import styles from './Sidebar2.module.css'; // Import the CSS Module

const { Sider } = Layout;
const { Title } = Typography;

function Navbar() {
  const pathname = usePathname();

  return (
    <Sider width={250} className={styles.sidebar}>
      <div className={styles.navbarContainer}>
        <SimpleBar style={{ maxHeight: '100vh' }}>
          <div className={styles.simpleBarContent}>
            <div className={styles.logo}>
              <Avatar src="../../assets/images/lgg.png" size={64} />
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[pathname]}
              selectedKeys={[pathname]}
            >
              <Menu.Item key="/admin" icon={<HomeOutlined />}>
                <Link href="/admin">لوحة التحكم</Link>
              </Menu.Item>

              <Menu.Item key="/admin/subjects" icon={<BookOutlined />}>
                <Link href="/admin/subjects">المواد الدراسية</Link>
              </Menu.Item>

              <Menu.SubMenu key="teachers" icon={<UserOutlined />} title="إدارة الأساتذة">
                <Menu.Item key="/admin/teachers">
                  <Link href="/admin/teachers">جميع الأساتذة</Link>
                </Menu.Item>
                <Menu.Item key="/admin/teachers/add-teacher">
                  <Link href="/admin/teachers/add-teacher">إضافة أستاذ</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu key="students" icon={<UsergroupAddOutlined />} title="إدارة الطلاب">
                <Menu.Item key="/admin/students">
                  <Link href="/admin/students">جميع الطلاب</Link>
                </Menu.Item>
                <Menu.Item key="/admin/students/add-student">
                  <Link href="/admin/students/add-student">إضافة طالب</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu key="formations" icon={<CalendarOutlined />} title="الدورات">
                <Menu.Item key="/admin/formations">
                  <Link href="/admin/formations">جميع الدورات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/formations/formation-add">
                  <Link href="/admin/formations/formation-add">إضافة دورة جديدة</Link>
                </Menu.Item>
              </Menu.SubMenu>

              {/* <Menu.SubMenu key="lessons" icon={<ReadOutlined />} title="الدروس">
                <Menu.Item key="/admin/lessons">
                  <Link href="/admin/lessons">جميع الدروس</Link>
                </Menu.Item>
                <Menu.Item key="/admin/lessons-add">
                  <Link href="/admin/lessons-add">إضافة درس جديدة</Link>
                </Menu.Item>
              </Menu.SubMenu> */}

              {/* <Menu.SubMenu key="exercices" icon={<FileTextOutlined />} title="التمارين">
                <Menu.Item key="/admin/exercices">
                  <Link href="/admin/exercices">جميع التمارين</Link>
                </Menu.Item>
                <Menu.Item key="/admin/exercices-add">
                  <Link href="/admin/exercices-add">إضافة تمرين</Link>
                </Menu.Item>
              </Menu.SubMenu> */}

              <Menu.SubMenu key="competitions" icon={<TrophyOutlined />} title="المسابقات">
                <Menu.Item key="/admin/competitions">
                  <Link href="/admin/competitions">جميع المسابقات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/competitions/competitions-add">
                  <Link href="/admin/competitions/competitions-add">إضافة مسابقة</Link>
                </Menu.Item>
              </Menu.SubMenu>

              {/* <Menu.SubMenu key="quizzes" icon={<SolutionOutlined />} title="الإختبارات">
                <Menu.Item key="/admin/quizzes">
                  <Link href="/admin/quizzes">جميع الإختبارات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/quizzes-add">
                  <Link href="/admin/quizzes-add">إضافة إختبار</Link>
                </Menu.Item>
              </Menu.SubMenu> */}

              <Menu.SubMenu key="validations" icon={<FileTextOutlined />} title="المصادقة">
                <Menu.Item key="/admin/validations">
                  <Link href="/admin/validations">كل المصادقات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-courses">
                  <Link href="/admin/validations-courses">الدورات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-lessons">
                  <Link href="/admin/validations-lessons">الدروس</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-competitions">
                  <Link href="/admin/validations-competitions">المسابقات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-quizzes">
                  <Link href="/admin/validations-quizzes">الإختبارات</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-exercices">
                  <Link href="/admin/validations-exercices">التمارين</Link>
                </Menu.Item>
                <Menu.Item key="/admin/validations-exercices-solutions">
                  <Link href="/admin/validations-exercices-solutions">حلول التمارين</Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="/admin/lives" icon={<VideoCameraOutlined />}>
                <Link href="/admin/lives">البثوث المباشرة</Link>
              </Menu.Item>
            </Menu>
          </div>
        </SimpleBar>
      </div>
    </Sider>
  );
}

export default Navbar;
