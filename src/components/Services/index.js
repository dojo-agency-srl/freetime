import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { services } from "site-structure.js";

const Services = () => {
  return (
    <div className="services">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section_title_container">
                        <div className="section_subtitle">{services.overtitle}</div>
                        <div className="section_title">{services.title}</div>
                    </div>
                </div>
            </div>
            <div className="row services_row">
                {services.courses.map((course, index) => {
                    const Icon = course.icon;

                    return (
                        <div className="col-xl-4 col-md-6 service_col">
                            <div className="service">
                                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                                    <div>
                                        <div className="service_icon">
                                            <Icon />
                                        </div>
                                    </div>
                                    <div className="service_title">{course.name}</div>
                                </div>
                                <div className="service_text">
                                    <p>
                                        {course.description}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Services