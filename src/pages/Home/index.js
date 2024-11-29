import React, { useEffect } from "react";

import Hero from "components/Hero";
import About from "components/About";
import Testimonials from "components/Testimonials";
import Gallery from "components/Gallery";
import Services from "components/Services";

const Home = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<Hero />

			<About />

			<Testimonials />

			<Gallery />

			<Services />
		</>
	);
};

export default Home;
