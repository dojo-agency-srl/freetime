import React from "react";

import { team } from "site-structure.js";

const Team = () => {
	return (
		<div className="team">
			<div
				className="parallax_background parallax-window"
				style={{
					backgroundImage: `url(${team.image})`,
				}}></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="section_title_container">
							<div className="section_subtitle">{team.overtitle}</div>
							<div className="section_title">{team.title}</div>
						</div>
					</div>
				</div>
				<div className="row team_row">
					{team.members.map((member, index) => (
						<div className="col-lg-3 team_col">
							<div className="team_item">
								<div className="team_image">
									<img src={member.image} alt="" />
								</div>
								<div className="team_panel d-flex flex-column align-items-center justify-content-center text-center">
									<div className="team_name">
										<a href="#">{member.name}</a>
									</div>
									<div className="team_title">{member.job}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
