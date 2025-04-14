import Home from "pages/Home";
import AboutPage from "pages/About";
import ServicesPage from "pages/Services";
import Gallery from "pages/Gallery";
import Contacts from "pages/Contacts";

import {
	homePage,
	aboutPage,
	servicesPage,
	galleryPage,
	contactsPage,
} from "site-structure.js";

const appname = process.env.REACT_APP_WEBSITE_NAME;

const routes = [
	{
		key: "home",
		...homePage,
		component: (
			<Home title={homePage.pageTitle} description={homePage.pageDescription} />
		),
		visible: true,
	},
	{
		key: "about",
		...aboutPage,
		component: (
			<AboutPage
				title={aboutPage.pageTitle}
				description={aboutPage.pageDescription}
			/>
		),
		visible: true,
	},
	{
		key: "services",
		...servicesPage,
		component: (
			<ServicesPage
				title={servicesPage.pageTitle}
				description={servicesPage.pageDescription}
			/>
		),
		visible: true,
	},
	{
		key: "gallery",
		...galleryPage,
		component: (
			<Gallery
				title={galleryPage.pageDescription}
				description={galleryPage.pageDescription}
			/>
		),
		visible: true,
	},
	{
		key: "contacts",
		...contactsPage,
		component: (
			<Contacts
				title={contactsPage.pageTitle}
				description={contactsPage.pageDescription}
			/>
		),
		visible: true,
	},
];

export { routes };
