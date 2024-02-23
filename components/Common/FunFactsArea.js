import React from "react"
import Link from 'next/link'

import MapImg from "../../images/map.png"
//import CoverPage from "../../images/cover-page.png";

const FunFactsArea = ({data}) => {
  const {heading, text, facts,contactheading,contacttext,contactarea} = data;
  const fullServices = Array.isArray(facts) ? facts.slice(0,8): null;
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
            <div className="bar"></div>
            <p>
             {text}
            </p>
          </div>

          <div className="row">
            {fullServices !=null
              ? fullServices.map(({numbers, field}, i) => {
                return (
               <div key={i + "service"}className="col-lg-3 col-md-3 col-6">
                  <div className="funfact">
                    <h3>{numbers}</h3>
                    <p>{field}</p>
                  </div>
                </div>
                );
              })
              : null }
          </div>

          <div className="contact-cta-box">
            <h3>{contactheading}</h3>
            <p>{contacttext}</p>

            <a href="/contact" className="btn btn-primary">
              {contactarea}
            </a>
          </div>
         
          <div className="map-bg">
            <img {...MapImg} alt="map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFactsArea
