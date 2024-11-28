import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from "images/logo.png";

import { contacts, homePage } from "site-structure.js";
import { routes } from "routes.js";

const Header = () => {
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
		<>
			<header className={scrolled ? "header scrolled" : "header"}>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
								<div className="logo d-flex flex-row align-items-center justify-content-start">
									<Link className="logo-link" target="_self" to={homePage.route}>
										<img src={logo} alt={process.env.REACT_APP_WEBSITE_NAME} />
									</Link>
								</div>
								<nav className="main_nav">
									<ul className="d-flex flex-row align-items-center justify-content-start">
										{renderRoutes()}
									</ul>
								</nav>
								<div className="phone accent-color d-flex flex-row align-items-center justify-content-start ml-auto">
									<FontAwesomeIcon icon={contacts.phoneIcon} className="accent-text" />
									<div>{contacts.phone}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
				<div className="hamburger">
					<div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
						<span>menu</span>
						<div className="hamburger_container">
							<div className="menu_hamburger">
								<div
									className="line_1 hamburger_lines"
									sx="transform: matrix(1, 0, 0, 1, 0, 0);"></div>
								<div className="line_2 hamburger_lines" sx="visibility: inherit; opacity: 1;"></div>
								<div
									className="line_3 hamburger_lines"
									sx="transform: matrix(1, 0, 0, 1, 0, 0);"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="menu trans_800">
				<div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
					<ul>
						{renderRoutes()}
					</ul>
				</div>
				<div className="menu_phone d-flex flex-row align-items-center justify-content-start">
					<FontAwesomeIcon icon={contacts.phoneIcon} className="accent-text" />
					<span>{contacts.phone}</span>
				</div>
			</div>
		</>
	);
};

export default Header;
