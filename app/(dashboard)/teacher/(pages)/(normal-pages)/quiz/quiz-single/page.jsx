"use client"
import Navbar from '../../../../_components/Navbar';
import Header from '../../../../_components/Header';
import React, { useEffect, useState } from 'react'
import ComponentHeader from '../../../../_components/ComponentHeader';

import Link from 'next/link';
import { Card, Modal, Button, Form, Image } from 'react-bootstrap';

// import sub components 
import Question from './_components/Question';

// import widget/custom components
import FormSelect from './_components/FormSelect';

// import data files
import QuizData from './_components/QuizData';

const QuizSingle = () => {
  const [modalShow, setModalShow] = useState(false);

  const AddNewCourse = (props) => {

    const questionTypeOptions = [
      { value: 'Newest', label: 'الأحدث' },
      { value: 'High Rated', label: 'الأعلى تقييماً' },
      { value: 'Low Rated', label: 'الأدنى تقييماً' },
      { value: 'High Earned', label: 'الأعلى ربحاً' }
    ];

    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title>إضافة سؤال للاختبار</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <div className="mb-5">
                <h4 className="mb-3">عام</h4>
                {/* كتابة السؤال */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="quiz-title">اكتب سؤالك هنا</Form.Label>
                  <Form.Control
                    placeholder="عنوان الاختبار"
                    id="quiz-title"
                    options={questionTypeOptions}
                  />
                </Form.Group>

                {/* نوع السؤال */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="question-type">نوع السؤال</Form.Label>
                  <Form.Control
                    as={FormSelect}
                    placeholder="اختر نوع السؤال"
                    id="question-type"
                    options={questionTypeOptions}
                  />
                </Form.Group>
              </div>
              <div className="">
                <h4 className="mb-3">الإجابة</h4>
                {/* إدخال الإجابات الممكنة */}
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <Form.Group className="mb-2" key={index}>
                      <Form.Label
                        className="mb-2 d-flex justify-content-between align-items-center fw-normal"
                        htmlFor={`input-choice-${item}`}>
                        <div><h5 className="mb-0 fw-normal">الخيار {item}</h5></div>
                        <div className="">
                          <div className="d-flex align-items-center lh-1"><span >الإجابة الصحيحة</span>
                            <Form.Check type="switch" id={`custom-switch-${item}`} className="ms-2" />
                          </div>
                        </div>
                      </Form.Label>
                      <Form.Control type="text" id={`input-choice-${item}`} placeholder="اكتب الإجابة" />
                    </Form.Group>
                  )
                })}
                <div className="mb-4">
                  {/* نقاط الإجابة */}
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="point-to-the-answer">نقاط لهذه الإجابة</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="حدد نقاط للإجابة"
                      id="point-to-the-answer"
                      rows={3}
                    />
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button variant="secondary" onClick={props.onHide}>إغلاق</Button>
          <Button variant="primary" onClick={props.onHide}>إضافة اختبار</Button>
        </Modal.Footer>
      </Modal>
    )
  }

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
                <Card.Body>
                  <div className="d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Link href="#">
                        <Image src='/images/course/course-react.jpg' alt="" className="rounded img-4by3-lg" />
                      </Link>
                      <div className="ms-3">
                        <h3 className="mb-2"><Link href="#" className="text-inherit">اختبار React الأساسي</Link></h3>
                        <div>
                          <span><span className="me-2 align-middle"><i className="fe fe-list"></i></span>20 سؤال</span>
                          <span className="ms-2"><span className="me-2 align-middle"><i className="fe fe-clock"></i></span>18 دقيقة</span>
                          <span className="ms-2"><span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>النتيجة</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-lg-block">
                      <Button variant="primary" onClick={() => setModalShow(true)}>إضافة أسئلة جديدة</Button>
                      <AddNewCourse show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                  </div>
                  {QuizData.map((item, index) => {
                    return (
                      <Card className="mb-4" key={index}>
                        <Card.Body>
                          <Question item={item} />
                          <div className="mt-3">
                            <Link href="#" className="btn btn-outline-secondary">تعديل</Link>
                            <Link href="#" className="btn btn-outline-danger ms-2">حذف</Link>
                          </div>
                        </Card.Body>
                      </Card>
                    )
                  })}
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default QuizSingle;
