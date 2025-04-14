import React from "react";

import SecondaryHero from "components/SecondaryHero";
import About from "components/About";
import Team from "components/Team";
import Skills from "components/Skills";

import { aboutPage } from "site-structure.js";

const AboutPage = ({ title, description, name }) => {
	return (
		<>
			<SecondaryHero
				img={aboutPage.heroImg}
				title={aboutPage.pageName}
				description={aboutPage.description}
			/>

			<About />

			<Team />

			<Skills />
		</>
	);
};

export default AboutPage;
