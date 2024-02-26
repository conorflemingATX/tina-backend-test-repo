import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const Features = ({ data }) => {
  const { feature } = data;
  const feats = Array.isArray(feature) ? feature.slice(0, 4) : null;
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="row justify-content-center">
            {feats != null
              ? feats.map(({ heading, description }, i) => (
                  <div
                    className="col-lg-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1200"
                    data-aos-once="false"
                    key={i + "feature"}
                  >
                    <div className="single-box">
                      <div className="icon">
                        <Icon.Server />
                      </div>
                      <h3>
                        <Link href="/feature-details">{heading}</Link>
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
