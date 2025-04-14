import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import SEO from "components/SEO";

const Layout = ({ title, description, name }) => {
	return (
		<>
			<SEO title={title} description={description} />

			<div className="super_container">
				<Header />

				<Outlet />

				<Footer />
			</div>
		</>
	);
};

export default Layout;
