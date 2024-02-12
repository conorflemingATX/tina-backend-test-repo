import React from "react"
import * as Icon from "react-feather"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:YourPartner@nitcoinc.com">
                    YourPartner@nitcoinc.com{" "}
                  </a>
                  </p>
                {/*} <p>
                  <a href="mailto:info@spet.com">info@spet.com</a>
                  </p>*/}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                  {/*} 27 Division St, New York, NY 10002, United States of America*/}
                  <a
                    href="https://www.google.com/maps/place/Nitco+Inc/@29.7750387,-95.7836527,15z/data=!4m5!3m4!1s0x0:0x179870ae18746b95!8m2!3d29.7750387!4d-95.7836527?shorturl=1"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    440 Cobia Dr., Suite 1701
                    <br />
                    Katy, Texas 77494
                  </a>
                  <br />
                  <p>Mon - Fri, 9am - 6pm </p>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <b>
                    <i>US Ohio: </i>
                  </b>
                  <a href="tel:281-503-7002">281-503-7002</a>
                </p>
                <p>
                  <b>
                    <i> Malaysia: </i>
                  </b>
                  <a href="tel:03-2276-3999">03-2276-3999</a>
                </p>
                <p>
                  <b>
                    <i> India: </i>
                  </b>
                  <a href="tel:040-29881990">040-29881990</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
