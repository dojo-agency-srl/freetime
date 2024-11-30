import React, { useEffect } from "react";

import SecondaryHero from "components/SecondaryHero";

// import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

import { galleryPage, gallery } from "site-structure";

const Gallery = ({ title }) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(() => {
		initLightboxJS(process.env.REACT_APP_LIGHTBOX_KEY, "individual");
	}, []);

	return (
		<>
			<SecondaryHero
				img={galleryPage.heroImg}
				title={galleryPage.pageTitle}
				description={galleryPage.description}
			/>

			<div className="blog">
				<div className="container">
					<div className="row blog_row">
						<SlideshowLightbox className="slideshow">
							{gallery.images.map((image, index) => (
								<img src={image.source} alt={image.alt} />
							))}
						</SlideshowLightbox>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
