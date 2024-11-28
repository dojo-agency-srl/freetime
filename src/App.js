import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

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
		setTimeout(handleComplete, 1000); // Simula il tempo di caricamento, puoi rimuoverlo o modificarlo in base alle tue necessità

		return () => {
			handleComplete();
		};
	}, [location]);

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
			<div className="super_container">
				<Header />

				{/* {loading && <Loader />} */}
				<Routes>
					<Route path="*" element={<Navigate to="/error" />} />

					<Route path="/" element={<Navigate to="/home" />} />

					{getRoutes(routes)}
				</Routes>

				<Footer />
			</div>
		</>
	);
};

export default App;
