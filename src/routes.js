import Home from "pages/Home";
import AboutPage from "pages/About";
import ServicesPage from "pages/Services";
import Gallery from "pages/Gallery";
import Contacts from "pages/Contacts";

import { homePage, aboutPage, servicesPage, galleryPage, contactsPage } from "site-structure.js";

const appname = process.env.REACT_APP_WEBSITE_NAME;

const routes = [
	{
		key: "home",
		...homePage,
		component: <Home title={`${homePage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "about",
		...aboutPage,
		component: <AboutPage title={`${aboutPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "services",
		...servicesPage,
		component: <ServicesPage title={`${servicesPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "gallery",
		...galleryPage,
		component: <Gallery title={`${galleryPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
	{
		key: "contacts",
		...contactsPage,
		component: <Contacts title={`${contactsPage.pageTitle} - ${appname}`} />,
		visible: true,
	},
];

export { routes };
