import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { testimonials } from "site-structure.js";

const Testimonials = () => {
	const stars = [0, 1, 2, 3, 4];

	return (
		<div className="testimonials">
			<div
				className="parallax_background parallax-window"
				style={{
					backgroundImage: `url(${testimonials.image})`,
				}}></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="section_title_container">
							<div className="section_subtitle">{testimonials.overtitle}</div>
							<div className="section_title">{testimonials.title}</div>
						</div>

						<div className="test test_1 d-flex flex-row align-items-start justify-content-start">
							<div className="test_content">
								<div className="test_name">
									<a href="#">{testimonials.reviews[0].name}</a>
								</div>
								<div className="test_title">{testimonials.reviews[0].date}</div>
								<div className="test_text">
									<p>
										{testimonials.reviews[0].text}
									</p>
								</div>
								<div className={`rating rating_${testimonials.reviews[0].rating} test_rating `}>
									{stars.map((number) => (
										<i><FontAwesomeIcon icon={testimonials.ratingIcon} /></i>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="test d-flex flex-row align-items-start justify-content-start">
							<div className="test_content">
								<div className="test_name">
									<a href="#">{testimonials.reviews[1].name}</a>
								</div>
								<div className="test_title">{testimonials.reviews[1].date}</div>
								<div className="test_text">
									<p>
										{testimonials.reviews[1].text}
									</p>
								</div>
								<div className={`rating rating_${testimonials.reviews[1].rating} test_rating `}>
									{stars.map((number) => (
										<i><FontAwesomeIcon icon={testimonials.ratingIcon} /></i>
									))}
								</div>
							</div>
						</div>

						<div className="test d-flex flex-row align-items-start justify-content-start">
							<div className="test_content">
								<div className="test_name">
									<a href="#">{testimonials.reviews[2].name}</a>
								</div>
								<div className="test_title">{testimonials.reviews[2].date}</div>
								<div className="test_text">
									<p>
										{testimonials.reviews[2].text}
									</p>
								</div>
								<div className={`rating rating_${testimonials.reviews[2].rating} test_rating `}>
									{stars.map((number) => (
										<i><FontAwesomeIcon icon={testimonials.ratingIcon} /></i>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
