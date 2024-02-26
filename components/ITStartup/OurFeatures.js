import React from "react";

import * as Icon from "react-feather";

const OurFeatures = ({ data }) => {
  const { heading, text, ourfeatures } = data;
  const fullServices = Array.isArray(ourfeatures)
    ? ourfeatures.slice(0, 8)
    : null;
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
            <div className="bar"></div>
            <p>{text}</p>
          </div>
          <div className="row justify-content-center">
            {fullServices != null
              ? fullServices.map(({ featureName, featureDescription }, i) => {
                  return (
                    <div
                      key={i + "feature"}
                      className="col-lg-6 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      <div className="single-features">
                        <div className="icon">
                          <Icon.Settings />
                        </div>
                        <h3 style={{ color: "white" }}>{featureName}</h3>
                        <p>{featureDescription}</p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;
