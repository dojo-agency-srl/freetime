import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SEO = ({ title, description }) => {
	useEffect(() => {
		document.title = title;
		const metaDescription = document.querySelector("meta[name='description']");

		if (metaDescription) {
			metaDescription.setAttribute("content", description);
		}
	}, []);

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
		</>
	);
};

export default SEO;
