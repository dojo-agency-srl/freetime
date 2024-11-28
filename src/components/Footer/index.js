import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "images/logo.png";
import footerBg from "images/footer.png";

import "styles/custom.scss";

import { footer } from "site-structure.js";
import { routes } from "routes.js";

const Footer = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const renderRoutes = () =>
		routes.map((route) => {
			// se è una route con figli
			if (route.visible) {
				return (
					<>
						<li key={route.key}>
							<Link to={route.route} key={route.key + "-link"}>
								{route.linkName}
							</Link>
						</li>
					</>
				);
			}

			return null;
		});

	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="footer_container">
							<div className="footer_content">
								<div className="footer_logo">
									<div className="logo d-flex flex-row align-items-center justify-content-center">
										<img src={logo} alt={process.env.REACT_APP_WEBSITE_NAME} />
									</div>
								</div>
								<nav className="footer_nav">
									<ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
										{renderRoutes()}
									</ul>
								</nav>
								<div className="newsletter_container">
									<form action="#" id="newsletter_form" className="newsletter_form">
										<input
											type="text"
											className="newsletter_input"
											placeholder={footer.inputPlaceholder}
											required="required"
										/>
										<button className="newsletter_button">{footer.cta}</button>
									</form>
								</div>
								<div className="copyright d-flex flex-row align-items-start justify-content-sm-center justify-content-center">
									Copyright &copy;{new Date().getFullYear()} | All
									rights reserved | Made by{" "}
									<a href="https://www.dojoagency.it" target="_blank">
										&nbsp;Dojo Agency
									</a>
								</div>
								<a href="https://colorlib.com" target="_blank" style={{ display: "none" }}>
									Colorlib
								</a>
							</div>
							<div className="footer_image text-center">
								<img src={footerBg} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
