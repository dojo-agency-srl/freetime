import React from "react";

import { skills } from "site-structure.js";

const Skills = () => {
	return (
		<div className="skills">
			<div className="container">
				<div className="row row-lg-eq-height">
					<div className="col-lg-6">
						<div className="extra d-flex flex-column align-items-center justify-content-center text-center">
							<div
								className="background_image"
								style={{
									backgroundImage: `url(${skills.image})`,
								}}></div>
							<div className="extra_title">&nbsp;</div>
							<div className="extra_text">
								<p>&nbsp;</p>
							</div>
							{/* <div className="button extra_button"><a href="#">Join Now</a></div> */}
						</div>
					</div>

					<div className="col-lg-6 skills_col">
						<div className="skills_content">
							<div className="section_title_container">
								<div className="section_subtitle">{skills.overtitle}</div>
								<div className="section_title">{skills.title}</div>
							</div>
							<div className="skills_text">
								<p>{skills.description}.</p>
							</div>

							<ul className="progress_bar_container col_12 clearfix">
								<li className="pb_item">
									<div
										id="skill_1_pbar"
										className="skill_bars"
										data-perc="1.00"
										data-name="skill_1_pbar">
										<svg
											viewBox="0 0 100 4"
											preserveAspectRatio="none"
											sx="width: 100%; height: 100%;">
											<path
												d="M 0,2 L 100,2"
												stroke="transparent"
												strokeWidth="1"
												fillOpacity="0"></path>
											<path
												d="M 0,2 L 100,2"
												stroke="#ff9711"
												strokeWidth="4"
												fillOpacity="0"
												sx="stroke-dasharray: 100, 100; stroke-dashoffset: 0;"></path>
										</svg>
										<div
											className="progressbar-text"
											sx="color: rgb(113, 122, 133); position: absolute; right: 0px; top: -20px; padding: 0px; margin: 0px;">
											100 %
										</div>
									</div>
									<h5>Fitness</h5>
								</li>
								<li className="pb_item">
									<div
										id="skill_2_pbar"
										className="skill_bars"
										data-perc="0.70"
										data-name="skill_2_pbar">
										<svg
											viewBox="0 0 100 4"
											preserveAspectRatio="none"
											sx="width: 100%; height: 100%;">
											<path
												d="M 0,2 L 100,2"
												stroke="transparent"
												strokeWidth="1"
												fillOpacity="0"></path>
											<path
												d="M 0,2 L 100,2"
												stroke="#ff9711"
												strokeWidth="4"
												fillOpacity="0"
												sx="stroke-dasharray: 100, 100; stroke-dashoffset: 30;"></path>
										</svg>
										<div
											className="progressbar-text"
											sx="color: rgb(113, 122, 133); position: absolute; right: 0px; top: -20px; padding: 0px; margin: 0px;">
											70 %
										</div>
									</div>
									<h5>Pilates</h5>
								</li>
								<li className="pb_item">
									<div
										id="skill_3_pbar"
										className="skill_bars"
										data-perc="0.85"
										data-name="skill_3_pbar">
										<svg
											viewBox="0 0 100 4"
											preserveAspectRatio="none"
											sx="width: 100%; height: 100%;">
											<path
												d="M 0,2 L 100,2"
												stroke="transparent"
												strokeWidth="1"
												fillOpacity="0"></path>
											<path
												d="M 0,2 L 100,2"
												stroke="#ff9711"
												strokeWidth="4"
												fillOpacity="0"
												sx="stroke-dasharray: 100, 100; stroke-dashoffset: 15;"></path>
										</svg>
										<div
											className="progressbar-text"
											sx="color: rgb(113, 122, 133); position: absolute; right: 0px; top: -20px; padding: 0px; margin: 0px;">
											85 %
										</div>
									</div>
									<h5>Yoga</h5>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
