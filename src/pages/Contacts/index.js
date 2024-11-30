import React from "react";
import { Link } from "react-router-dom";

import SecondaryHero from "components/SecondaryHero";

import logo from "images/logo_verde.png";

import { contactsPage, contacts } from "site-structure";

const Contacts = () => {
	return (
		<>
			<SecondaryHero
				img={contactsPage.heroImg}
				title={contactsPage.pageTitle}
				description={contactsPage.description}
			/>

			<div className="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="contact_content">
								<div className="contact_logo">
									<div className="logo d-flex flex-row align-items-center justify-content-start">
										<img src={logo} alt={process.env.REACT_APP_WEBSITE_NAME} />
									</div>
								</div>
								<div className="contact_text">
									<p>
										Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet
										tellus blandit. Odio vestibulum est mattis effic iturut.
									</p>
								</div>
								<div className="contact_list">
									<ul>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>A:</div>
											</div>
											<div>1481 Creekside Lane Avila Beach, CA 931</div>
										</li>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>P:</div>
											</div>
											<div>+53 345 7953 32453</div>
										</li>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>M:</div>
											</div>
											<div>yourmail@gmail.com</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-8 contact_col">
							<div className="contact_title">Get in touch</div>
							<div className="contact_form_container">
								<form action="#" id="contact_form" className="contact_form">
									<div className="row">
										<div className="col-lg-6">
											<div className="input_item">
												<input
													type="text"
													className="contact_input trans_200"
													placeholder="Name"
													required="required"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="input_item">
												<input
													type="email"
													className="contact_input trans_200"
													placeholder="E-mail"
													required="required"
												/>
											</div>
										</div>
									</div>
									<div className="input_item">
										<textarea
											className="contact_input contact_textarea trans_200"
											placeholder="Message"
											required="required"></textarea>
									</div>
									<div className="button accent about_button">
										<Link target="_blank" to="javascript:mailTo('');">
											Invia
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
