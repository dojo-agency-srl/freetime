import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SecondaryHero from "components/SecondaryHero";
import Maps from "components/Maps";

import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import logo from "images/logo_verde.png";

import { contactsPage, contacts } from "site-structure";

const Contacts = ({ title }) => {
	const ref = React.createRef();

	useEffect(() => {
		document.title = title;
	}, []);

	const onSubmit = (mailMessage) => {
		window.location.href = `mailTo:${contacts.email}?Contatto da sito a nome ${mailMessage.sender}&subject=Info:&body=${mailMessage.text}`;
	};

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			sender: "",
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
									<p>{contactsPage.description}.</p>
								</div>
								<div className="contact_list">
									<ul>
										<li className="d-flex flex-row align-items-start justify-content-start">
											<div>
												<div>{contacts.phoneLabel}:</div>
											</div>
											<div>{contacts.phone}</div>
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
															ref={ref}
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
													ref={ref}
													{...field}></textarea>
											)}
										/>
									</div>
									<div className="button accent about_button">
										<Link ref={ref} onClick={handleSubmit(onSubmit)}>
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
