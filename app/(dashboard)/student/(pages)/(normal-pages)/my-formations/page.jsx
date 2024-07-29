"use client"

// import node module libraries
import { Fragment, useEffect } from 'react';
import { Col, Row, Nav, Tab, Card, Container } from 'react-bootstrap';
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";
// import widget/custom components
import CourseCard  from './_components/CourseCard';


import { AllCoursesData } from './_components/AllCoursesData';



function Page() {
  
	const dashboardData = {
		avatar: '/assets/images/avatar/avatar-3.jpg',
		name: 'Stella Flores',
		username: '@stellaflores',
		linkname: 'Account Setting',
		link: '/marketing/student/edit-profile',
		verified: false,
		outlinebutton: false,
		level: 'Beginner'
	};

	useEffect(() => {
		document.body.className = 'bg-light';
	});

	return (
    <div dir="rtl">
    <Header />

    <main>
      <section className="pt-5 pb-5">
			<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
			<ComponentHeader />

          {/* My Section */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              <Navbar />
            </div>


            	{/* Content */}
					<Row className="col-lg-9 col-md-8 col-12">
						<Col lg={12} md={12} sm={12}>
							<Row className="mb-6">
								<Col md={12}>
									<Tab.Container defaultActiveKey="bookmarked">
										<Card className="bg-transparent shadow-none ">
											<Card.Header className="border-0 p-0 bg-transparent">
                      <Nav className="nav-lb-tab">
  <Nav.Item className="ms-0">
    <Nav.Link
      eventKey="bookmarked"
      className="mb-sm-3 mb-md-0"
    >
      المحفوظات
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link
      eventKey="learning"
      className="mb-sm-3 mb-md-0"
    >
      قيد التعلم
    </Nav.Link>
  </Nav.Item>
</Nav>

											</Card.Header>
											<Card.Body className="p-0">
												<Tab.Content>
													<Tab.Pane
														eventKey="bookmarked"
														className="pb-4 p-4 ps-0 pe-0"
													>
														{/* bookmarked started */}
														<Row>
															{AllCoursesData.filter(function (datasource) {
																return datasource;
															})
																.slice(0, 8)
																.map((item, index) => (
																	<Col lg={3} md={6} sm={12} key={index}>
																		<CourseCard item={item} />
																	</Col>
																))}
														</Row>
														{/* end of bookmarked */}
													</Tab.Pane>
													<Tab.Pane
														eventKey="learning"
														className="pb-4 p-4 ps-0 pe-0"
													>
														{/* learning courses started */}
														<Row>
															{AllCoursesData.filter(function (datasource) {
																return (
																	datasource.id === 1 ||
																	datasource.id === 2 ||
																	datasource.id === 3 ||
																	datasource.id === 4
																);
															}).map((item, index) => (
																<Col lg={3} md={6} sm={12} key={index}>
																	<CourseCard item={item} showprogressbar />
																</Col>
															))}
														</Row>
														{/* end of learning courses */}
													</Tab.Pane>
												</Tab.Content>
											</Card.Body>
										</Card>
									</Tab.Container>
								</Col>
							</Row>
						</Col>
					</Row>


          </div>

						
        </div>
      </section>
    </main>

  </div>
  )
}

export default Page