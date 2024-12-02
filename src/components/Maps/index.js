import React from "react";

import { coursesProgram } from "site-structure.js";

import "styles/custom.scss";

const Maps = () => {
	return (
		<div className="testimonials component">
			<div
				className="parallax_background parallax-window"
				style={{
					backgroundImage: `url(${coursesProgram.coursesImg})`,
				}}></div>
			<div className="container">
				<div className="row">
					{coursesProgram.locations.map((location, index) => (
						<div className="col-lg-6">
							<div className="section_title_container">
								<div className="section_subtitle">Sede</div>
								<div>
									<div className="section_title">{location.name}</div>

									<div className="test test_1 d-flex flex-row align-items-start justify-content-start">
										<div className="test_content">
											<div className="test_text">
												<p>{location.address}</p>
											</div>
										</div>
									</div>
								</div>

								<iframe
									title="map"
									width="100%"
									height="600"
									frameBorder="0"
									marginHeight="0"
									marginWidth="0"
									loading="async"
									src={location.link}></iframe>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Maps;
