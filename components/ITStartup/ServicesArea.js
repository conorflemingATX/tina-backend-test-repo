import React from "react"
import * as Icon from "react-feather"

// Cloud Hosting Services Images

import CercleShape from "../../images/services-right-image/cercle-shape1.png"

// import CercleShape from "../../images/services-right-image/cercle-shape-edited.png"


import ServiceRightMainPic from "../../images/services-right-image/service-right-main-pic.png"

// Design & Development Images
import ServiceLeftMainPic from "../../images/services-left-image/service-left-main-pic.png"

const ServicesArea = ({ data }) => {
    const { heading, text, services } = data;
    const fullServices = services.slice(0, 8);
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>{heading}</h2>
                <div className="bar"></div>
                <p>
                  {text}
                </p>
              </div>
              <div className="row">
                {fullServices.map(({ serviceName }, i) => {
                    return (
                        <div key={i + "service"}className="col-lg-6 col-md-6">
                          <div className="box">
                            <Icon.Database /> {serviceName}
                          </div>
                        </div>
                    );
                })}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-right-image">
                <img
                  {...CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />
                <img {...ServiceRightMainPic} alt="main-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
