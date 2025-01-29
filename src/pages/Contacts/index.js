import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SecondaryHero from "components/SecondaryHero";
import Maps from "components/Maps";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import logo from "images/logo_verde.png";

import { contactsPage, contacts } from "site-structure";

const Contacts = ({ title }) => {
	const [isAccepted, setIsAccepted] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsAccepted(event.target.checked);
	};

	useEffect(() => {
		document.title = title;
	}, []);

	const onSubmit = (mailMessage) => {
		window.location.href = `mailTo:${contacts.email}?subject=Richiesta info da ${mailMessage.sender}, ${mailMessage.phone}&body=${mailMessage.text}`;
	};

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			sender: "",
			phone: "",
			text: "",
		},
	});

	return (
		<>
			<SecondaryHero
				img={contactsPage.heroImg}
				title={contactsPage.pageTitle}
				description={contactsPage.description}
			/>

			<div className="contact">
				<div className="overlay"></div>
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
									<p>{contactsPage.description2}.</p>
								</div>
								<div className="contact_list">
									<ul style={{ zIndex: 2, position: "relative" }}>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>{contacts.phoneLabel}:</div>
											</div>
											<div>{contacts.phone}</div>
										</li>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>{contacts.phoneLabel2}:</div>
											</div>
											<div>{contacts.phone2}</div>
										</li>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>{contacts.emailLabel}:</div>
											</div>
											<div>{contacts.email}</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-8 contact_col">
							<div className="contact_title">{contactsPage.title}</div>
							<div className="contact_form_container">
								<form action="#" id="contact_form" className="contact_form">
									<div className="row">
										<div className="col-lg-12">
											<Controller
												key="sender"
												name="sender"
												control={control}
												rules={{
													required: contactsPage.form.fields[0].errorMessage,
													minLength: {
														value: contactsPage.form.fields[0].length,
														message:
															"Il campo Nome e Cognome deve contenere almeno " +
															contactsPage.form.fields[0].length +
															" caratteri",
													},
												}}
												render={({ field }) => (
													<div className="input_item">
														<input
															type="text"
															id="name"
															name="name"
															className="contact_input trans_200"
															placeholder={contactsPage.form.fields[0].placeholder}
															{...field}
														/>
													</div>
												)}
											/>
											<ErrorMessage
												key="senderError"
												errors={errors}
												name="sender"
												render={({ message }) => <p className="help-block text-danger">{message}</p>}
											/>
										</div>
										<div className="col-lg-6">
											<div className="input_item"></div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<Controller
												key="phone"
												name="phone"
												control={control}
												rules={{
													required: contactsPage.form.fields[1].errorMessage,
													pattern: {
														value: /^(\+?[1-9]{1}[0-9]{9,14})$/,
														message:
															"Numero di telefono non valido. Assicurati che il formato sia corretto (non usare spazi).",
													},
												}}
												render={({ field }) => (
													<div className="input_item">
														<input
															type="phone"
															id="phone"
															name="phone"
															className="contact_input trans_200"
															placeholder={contactsPage.form.fields[1].placeholder}
															{...field}
														/>
													</div>
												)}
											/>
											<ErrorMessage
												key="phoneError"
												errors={errors}
												name="phone"
												render={({ message }) => <p className="help-block text-danger">{message}</p>}
											/>
										</div>
										<div className="col-lg-6">
											<div className="input_item"></div>
										</div>
									</div>
									<div className="input_item">
										<Controller
											key="text"
											name="text"
											control={control}
											render={({ field }) => (
												<textarea
													className="contact_input contact_textarea trans_200"
													placeholder={contactsPage.form.fields[1].placeholder}
													required="required"
													{...field}></textarea>
											)}
										/>
									</div>
									<div className="acceptance-container">
										<input
											type="checkbox"
											id="acceptance-checkbox"
											className="acceptance-checkbox"
											onChange={handleCheckboxChange} // Aggiungi l'evento per aggiornare lo stato
										/>
										<label htmlFor="acceptance-checkbox" className="acceptance-label">
											<div>
												Letta la <Link to="">Privacy Policy</Link>, presto il mio consenso ad essere
												ricontattato
											</div>
										</label>
									</div>
									<div className="button accent about_button">
										<Link
											onClick={handleSubmit(onSubmit)}
											className="button-link"
											style={{
												pointerEvents: isAccepted ? "auto" : "none",
												opacity: isAccepted ? 1 : 0.2,
											}}>
											{contactsPage.form.cta}
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Maps />
		</>
	);
};

export default Contacts;
