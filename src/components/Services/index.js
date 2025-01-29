import React from "react";
import { useLocation } from "react-router-dom";

import { homePage, servicesPage, services } from "site-structure.js";

const Services = () => {
	let location;
	location = useLocation();

	return (
		<div
			className={
				location.pathname.indexOf(homePage.route) > -1 ? "services" : "services small"
			}>
			{location.pathname.includes(servicesPage.route) && (
				<div className="overlay"></div>
			)}
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="section_title_container">
							<div className="section_subtitle">{services.overtitle}</div>
							<div className="section_title">{services.title}</div>
						</div>
					</div>
				</div>

				{services.courses.map((category, index) => {
					const categoryName = Object.keys(category)[0];
					const coursesList = category[categoryName];

					return (
						<div className="row services_row" key={index}>
							<h3>{categoryName}</h3>
							{coursesList.map((course, subIndex) => {
								const Icon = course.icon;
								return (
									<div key={subIndex} className="col-xl-4 col-md-6 service_col">
										<div className="service">
											<div className="service_title_container d-flex flex-row align-items-center justify-content-start">
												<div>
													<div className="service_icon">
														<Icon />
													</div>
												</div>
												<div className="service_title">{course.name}</div>
											</div>
											<div className="service_text">
												<p>{course.description}.</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
