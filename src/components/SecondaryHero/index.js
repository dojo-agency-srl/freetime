import React from 'react';

const SecondaryHero = ({ img, title, description }) => {
  return (
    <div className="home small">
		<div className="background_image cover" style={{
            backgroundImage: `url(${img})`,
        }}></div>
		<div className="overlay"></div>
		<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content">
							<div className="home_title">{title}</div>
							<div className="home_subtitle">{description}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default SecondaryHero;