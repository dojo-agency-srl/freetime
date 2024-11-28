import React from "react";

import Hero from "components/Hero";
import About from "components/About";
import Testimonials from "components/Testimonials";
import Gallery from "components/Gallery";
import Services from "components/Services";

const Home = () => {
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
