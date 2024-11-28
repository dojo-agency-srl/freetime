import React from "react";

import { about } from "site-structure.js";

import "styles/custom.scss";

const About = () => {
	return (
		<div className="about">
			<div className="container about_container">
				<div className="row">
					<div className="col-lg-6">
						<div className="about_content">
							<div className="section_title_container">
								<div className="section_subtitle">{about.overtitle}</div>
								<div className="section_title">
									{about.titleLight} <span>{about.titleBold}</span>
								</div>
							</div>
							<div className="text_highlight">
								{about.subtitle}.
							</div>
							<div className="about_text">
								<p>
									{about.description}.
								</p>
							</div>
							<div className="button accent about_button">
								<a href="#">{about.cta}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about_background">
				<div className="container fill_height">
					<div className="row fill_height">
						<div className="col-lg-6 offset-lg-6 fill_height">
							<div className="about_image">
								<img src={about.image} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
