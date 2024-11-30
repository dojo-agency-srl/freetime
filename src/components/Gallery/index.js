import React, { useEffect, useRef, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import gallery1 from "images/gallery/gallery_1.jpg";
import gallery2 from "images/gallery/gallery_2.jpg";
import gallery3 from "images/gallery/gallery_3.jpg";
import gallery4 from "images/gallery/gallery_4.jpg";
import gallery5 from "images/gallery/gallery_5.jpg";

const Gallery = () => {
	const owlCarouselRef = useRef(null);
	const items = [gallery1, gallery2, gallery3, gallery4, gallery5];

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
					{items.map((item, index) => (
						<div key={index} className="item">
							<img src={item} alt="" />
						</div>
					))}
				</OwlCarousel>
			</div>
		</div>
	);
};

export default Gallery;
