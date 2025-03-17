import React, { useEffect, useRef, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { gallery } from "site-structure.js";

const Gallery = () => {
	const owlCarouselRef = useRef(null);

	useEffect(() => {
		// aggiungo listener per l'evento popstate
		const handlePopstate = () => {
			// riavvia Owl Carousel quando viene scatenato l'evento popstate
			if (owlCarouselRef.current) {
				owlCarouselRef.current.onInitialize();
			}
		};

		window.addEventListener("popstate", handlePopstate);

		// cleanup: rimuovi il listener quando il componente viene smontato
		return () => {
			window.removeEventListener("popstate", handlePopstate);
		};
	}, []);

	return (
		<div className="gallery">
			<div className="gallery_slider_container">
				<OwlCarousel
					ref={owlCarouselRef}
					className="owl-theme gallery_slider"
					loop
					items={5}
					autoplay
					autoplayTimeout={5000}>
					{gallery.images.slice(0, 5).map((item, index) => (
						<div key={index} className="item">
							<img src={item.source} alt={item.alt} />
						</div>
					))}
				</OwlCarousel>
			</div>
		</div>
	);
};

export default Gallery;
