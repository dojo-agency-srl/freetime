import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "styles/font-awesome.scss";

import { hero, contactsPage } from "site-structure.js";

const Hero = () => {
	return (
		<>
			<div className="home">
				<div
					className="background_image"
					style={{
						backgroundImage: `url(${hero.image})`,
					}}></div>
				<div className="overlay"></div>
				<div className="home_container">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="home_content text-center">
									<div className="video_link">
										<a
											className="vimeo video_button d-flex flex-column align-items-center justify-content-center"
											href="https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0&autopause=0">
											<div className="video_link_content d-flex flex-row align-items-center justify-content-start">
												<div className="video_icon accent d-flex flex-column align-items-center justify-content-center">
													<FontAwesomeIcon icon={hero.overtitleIcon} />
												</div>
												<span className="video_text">{hero.overtitle}</span>
											</div>
										</a>
									</div>
									<div className="home_title">{hero.title}</div>
									<div className="home_subtitle">{hero.subtitle}</div>
									<div className="button home_button ml-auto mr-auto">
										<Link to={contactsPage.route}>{hero.cta}</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="boxes">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
								{hero.boxes.map((box, index) => (
									<div className="box">
										<div className="box_icon d-flex flex-column align-items-center justify-content-center">
											<FontAwesomeIcon icon={box.icon} />
										</div>
										<div className="box_title">{box.title}</div>
										<div className="box_text">
											<p>{box.description}.</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
