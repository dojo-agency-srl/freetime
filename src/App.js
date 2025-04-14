import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "components/Layout";

// import Loader from "components/Loader";
import Header from "components/Header";
import Footer from "components/Footer";

import { routes } from "routes.js";

let location;

const App = () => {
	const [loading, setLoading] = useState(false);
	location = useLocation();

	//setto scroll pagina a 0 quando viene cambiata route
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;

		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		handleStart();
		setTimeout(handleComplete, 1000);

		return () => {
			handleComplete();
		};
	}, [location]);

	const currentRoute =
		routes.find((route) => route.route === location.pathname) || {};

	const {
		pageName = "Home",
		pageTitle = "Freetime",
		pageDescription = "Freetime.",
	} = currentRoute;

	const getRoutes = (routes) =>
		routes.map((route) => {
			if ("collapse" in route) {
				getRoutes(route.collapse);
			}

			if (route.route != undefined)
				return (
					<Route
						exact
						path={route.route}
						element={route.component}
						key={route.key}></Route>
				);
			else return;
		});

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Layout title={pageTitle} description={pageDescription} name={pageName} />
					}>
					<Route path="/" element={<Navigate to="/home" />} />

					{getRoutes(routes)}
				</Route>
			</Routes>
		</>
	);
};

export default App;
