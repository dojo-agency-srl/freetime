import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "images/logo.png";
import footerBg from "images/footer.png";

import "styles/custom.scss";

import { footer } from "site-structure.js";
import { routes } from "routes.js";

const Footer = () => {
	const [scrolled, setScrolled] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [isAccepted, setIsAccepted] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsAccepted(event.target.checked);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (inputData) => {
		const data = {
			email: inputData.email,
			attributes: {
				email: "",
			},
			listIds: [0],
		};

		try {
			const isInResponse = await fetch(
				"https://api.brevo.com/v3/contacts/" + encodeURIComponent(data.email),
				{
					method: "GET",
					headers: {
						Accept: "application/json",
						"api-key": "test",
					},
				}
			);

			debugger;

			if (isInResponse.status === 200) {
				setResponseMessage("Sei già iscritto alla newsletter");
			} else if (isInResponse.status === 404) {
				try {
					const response = await axios.post("https://api.brevo.com/v3/contacts", data, {
						headers: {
							"Content-Type": "application/json",
							"api-key": "test",
						},
					});

					setResponseMessage(
						"La tua iscrizione alla newsletter è avvenuta correttamente"
					);
				} catch (error) {
					setResponseMessage("Ops, qualcosa è andato storto. Riprova più tardi");
				}
			} else {
				setResponseMessage("Ops, qualcosa è andato storto. Riprova più tardi");
			}
		} catch (error) {
			setResponseMessage("Ops, qualcosa è andato storto. Riprova più tardi");
		}
	};

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
									<div className="logo d-flex flex-column align-items-center justify-content-center">
										<img src={logo} alt={process.env.REACT_APP_WEBSITE_NAME} />
										<br />
										<div class="payoff">Enjoy your body</div>
									</div>
								</div>
								<nav className="footer_nav">
									<ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
										{renderRoutes()}
										<li>
											<Link to="https://www.instagram.com/freetime_fitness/" target="_blank">
												Instagram
											</Link>
										</li>
										<li>
											<Link to="">Privacy Policy</Link>
										</li>
										<li>
											<Link to="">Cookie Policy</Link>
										</li>
									</ul>
								</nav>

								<div className="newsletter_container" style={{ display: "none" }}>
									<form
										id="newsletter_form"
										className="newsletter_form"
										onSubmit={handleSubmit(onSubmit)}>
										<div class="acceptance-container">
											<input
												type="checkbox"
												id="acceptance-checkbox"
												class="acceptance-checkbox"
												onChange={handleCheckboxChange}
											/>
											<label for="acceptance-checkbox" class="acceptance-label">
												<div>
													Letta la <Link to="">Privacy Policy</Link>, presto il mio consenso per l’invio
													di comunicazioni promozionali
												</div>
											</label>
										</div>
										<input
											type="text"
											{...register("email", {
												required: "L'email è obbligatoria",
												pattern: {
													value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
													message: "Inserisci un'email valida",
												},
											})}
											className="newsletter_input"
											placeholder={footer.inputPlaceholder}
										/>

										<button
											type="submit"
											className="newsletter_button"
											style={{
												pointerEvents: isAccepted ? "auto" : "none",
												opacity: isAccepted ? 1 : 0.2,
											}}>
											{footer.cta}
										</button>
									</form>
								</div>
								{errors.email && <p>{errors.email.message}</p>}
								{responseMessage && <p style={{ color: "#fff" }}>{responseMessage}</p>}
								<div className="copyright d-flex flex-row align-items-start justify-content-center">
									<div style={{ lineHeight: 1.5 }}>
										Copyright &copy;{new Date().getFullYear()} | All rights reserved | Made by{" "}
										<a href="https://www.dojoagency.it" target="_blank">
											Dojo Agency
										</a>
									</div>
								</div>
								<a href="https://colorlib.com" target="_blank" style={{ opacity: "0" }}>
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
