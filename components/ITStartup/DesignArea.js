import React from "react"
import * as Icon from "react-feather"
import CercleShape from "../../images/services-right-image/cercle-shape1.png"
import ServiceLeftMainPic from "../../images/services-left-image/service-left-main-pic.png"

const DesignArea = ({data}) => { 
  const {heading,text,services} = data;
  const fullServices = Array.isArray(services) ? services.slice(0,8) : null;
  return (
    <>
      <div className="services-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
             
              <div className="services-left-image">
                <img
                  {...CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />
                <img {...ServiceLeftMainPic} alt="main-pic" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <h2>{heading}</h2>
                <div className="bar"></div>
                <p>
                 {text}
                </p>
              </div>

              <div className="row">
              {fullServices != null 
                    ? fullServices.map(({ serviceName }, i) => {
                        return (
                <div key={i + "service"} className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Layout /> {serviceName}
                  </div>
                </div>
               );
              })
              : null }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignArea
