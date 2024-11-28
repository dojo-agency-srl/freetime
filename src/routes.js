import Home from "pages/Home";

import { homePage } from "site-structure.js";

const appname = process.env.REACT_APP_WEBSITE_NAME;

const routes = [
	{
		key: "home",
		...homePage,
		component: <Home title={`${homePage.pageTitle} - ${appname}`} />,
		visible: true,
	},
];

export { routes };
