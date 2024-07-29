"use client";
import React, { Fragment, useState } from 'react';
import { Col, Row, Container, Card, Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { MoreVertical } from 'react-feather';
import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';

// import react-icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLink } from 'react-icons/fa';

// import widget/custom components
import GKYouTube from './_components/GKYouTube';
import GKAccordionDefault from './_components/GKAccordionDefault';

// import data
import CourseIndex from './_components/CourseIndex';

// import your layout to override default layout 
// import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import NavbarDefault from './_components/NavbarDefault';
import BlankLayout from './_components/BlankLayout';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	(<Link
		href="#"
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}>
		{children}
	</Link>)
));
CustomToggle.displayName = 'CustomToggle';

const FacebookIcon = () => <FaFacebookF size={20} className="text-secondary" />;
const TwitterIcon = () => <FaTwitter size={20} className="text-secondary" />;
const LinkedInIcon = () => <FaLinkedinIn size={20} className="text-secondary" />;
const CopyLinkIcon = () => <FaLink size={20} className="text-secondary" />;

const ActionMenu = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle as={CustomToggle}>
				<MoreVertical size="15px" className="text-secondary" />
			</Dropdown.Toggle>
			<Dropdown.Menu align="end">
				<Dropdown.Header>SHARE</Dropdown.Header>
				<Dropdown.Item eventKey="1">
					<FacebookIcon /> Facebook
				</Dropdown.Item>
				<Dropdown.Item eventKey="2">
					<TwitterIcon /> Twitter
				</Dropdown.Item>
				<Dropdown.Item eventKey="3">
					<LinkedInIcon /> LinkedIn
				</Dropdown.Item>
				<Dropdown.Item eventKey="4">
					<CopyLinkIcon /> Copy Link
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export const CourseResume = () => {

	const [YouTubeURL] = useState('PkZNo7MFNFg');

	return (
		<Fragment>
			{/* Geeks SEO settings  */}

			{/* <NavbarDefault login /> */}
			<main>
				<section className="mt-0 course-container">
					<Container fluid>
						<Row>
							<Col sm={12} md={12} lg={12}>
								{/*  Tab content  */}
								<div className="content">
									<div className="mt-5">
										{/*  Video */}
										<div className="d-flex align-items-center justify-content-between mb-4">
											<div>
												<h3 className="mb-0 text-truncate-line-2">
													Introduction
												</h3>
											</div>
											<div className="d-flex justify-content-between">
												<Dropdown className="video-info-icon me-2">
													<Dropdown.Toggle
														bsPrefix=" "
														as="a"
														href="#"
														variant="secondary"
														id="dropdown-basic"
													>
														<i className="fe fe-help-circle text-secondary"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu
														className="p-3"
														style={{ width: '300px' }}
													>
														<span>
															Lorem ipsum dolor sit amet consectetur adipisicing
															elit. cupiditate consequatur rerum eius ad ut
															officiis
														</span>
													</Dropdown.Menu>
												</Dropdown>
												<ActionMenu />
											</div>
										</div>
										<div
											className="embed-responsive position-relative w-100 d-block overflow-hidden p-0"
											style={{ height: '600px' }}
										>
											<GKYouTube videoId={YouTubeURL} height="700" />
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				{/*  Card */}
				<section className="card course-sidebar" id="courseAccordion">
					<SimpleBar style={{ maxHeight: '93vh' }}>
						<Card>
							<Card.Header>
								<h4 className="mb-0">Table of Content</h4>
							</Card.Header>
							{/* Course Index Accordion */}
							<GKAccordionDefault accordionItems={CourseIndex} />
						</Card>
					</SimpleBar>
				</section>
			</main>
		</Fragment>
	);
};

CourseResume.Layout = BlankLayout;

export default CourseResume;
