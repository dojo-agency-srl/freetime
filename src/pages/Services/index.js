import React, { useEffect } from "react";

import SecondaryHero from "components/SecondaryHero";
import Services from "components/Services";
import CoursesProgram from "components/CoursesProgram";

import { servicesPage } from "site-structure.js";

const ServicesPage = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<SecondaryHero
				img={servicesPage.heroImg}
				title={servicesPage.pageTitle}
				description={servicesPage.description}
			/>

			<Services />

			<CoursesProgram />
		</>
	);
};

export default ServicesPage;
