"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React from 'react';
import ComponentHeader from '../../../_components/ComponentHeader';
import Link from 'next/link';
import { Card, Table, Image } from 'react-bootstrap';

// import data files
import QuizListData from './_data/QuizListData';

const Quiz = () => {
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

              <Card className="col-lg-9 col-md-8 col-12">
                {/* Card header */}
                <Card.Header className="d-flex align-items-center justify-content-between">
                  <div className="">
                    <h3 className="mb-0">الاختبارات</h3>
                  </div>
                  <div>
                    <Link href="#" className="btn btn-primary btn-sm">إضافة اختبار جديد</Link>
                  </div>
                </Card.Header>
                {/* Card body */}
                <Card.Body className="p-0">
                  <Table responsive className="table-centered">
                    <tbody>
                      {QuizListData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td >
                              <div className="d-flex align-items-center">
                                {/* quiz img */}
                                <Link href="/teacher/quiz/quiz-single/" > <Image src={item.image} alt="" className="rounded img-4by3-lg" /></Link>
                                {/* quiz content */}
                                <div className="ms-3">
                                  <h4 className="mb-2">
                                    <Link href="/teacher/quiz/quiz-single/" className="text-inherit">{item.title}</Link>
                                  </h4>
                                  <div>
                                    <span><span className="me-2 align-middle"><i className="fe fe-list"></i></span>{item.questions} أسئلة</span>
                                    <span className="ms-2"><span className="me-2 align-middle"><i className="fe fe-clock"></i></span>{item.duration}</span>
                                    <Link href="/teacher/quiz/quiz-result/" className="ms-2 text-body"><span
                                      className="me-2 align-middle"><i className="fe fe-file-text"></i></span>النتائج</Link>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              {/* icon */}
                              <div>
                                <Link href="#" className="text-inherit"><i className="fe fe-settings"></i></Link>
                                <Link href="#" className="ms-2 link-danger"><i className="fe fe-trash-2"></i></Link>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>

            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Quiz;
