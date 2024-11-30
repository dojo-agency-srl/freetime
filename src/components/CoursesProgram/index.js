import React from "react";
import { Link } from "react-router-dom";

import { coursesProgram } from "site-structure.js";

import "styles/custom.scss";

const CoursesProgram = () => {
	return (
		<div className="testimonials component">
			<div
				className="parallax_background parallax-window"
				style={{
					backgroundImage: `url(${coursesProgram.coursesImg})`,
				}}></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="section_title_container">
							<div className="section_subtitle">{coursesProgram.overtitle}</div>
							<div className="section_title">{coursesProgram.title}</div>
						</div>

						<div className="test test_1 d-flex flex-row align-items-start justify-content-start">
							<div className="test_content">
								<div className="test_text">
									<p>{coursesProgram.description}</p>
								</div>
							</div>
						</div>

						<div className="locations">
							{coursesProgram.locations.map((location, index) => (
								<div className="button accent about_button">
									<Link target="_blank" to={location.link}>
										{location.name}
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoursesProgram;
