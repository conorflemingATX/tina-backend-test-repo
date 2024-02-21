import React from "react"
import Link from 'next/link'
import * as Icon from "react-feather"

import Logo from "../../images/nitco-logo1.png"
import MapImg from "../../images/map.png"
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img {...Logo} alt="logo" />
                  </Link>
                </div>
                <p>
                NITCO Inc. is a technology services company that accelerates digital automation with Artificial Intelligence, Machine Learning, Natural Language Processing and Robotic Process Automation. In addition, the company has highly skilled staff serving our clients in Integration Technologies, Data Analytics, Cloud Integration Services and various IT Consulting services.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <a href="https://www.nitcoinc.com/company/about/">About Us</a>
                  </li>
                  <li>
                    <Link href="https://www.nitcoinc.com/company/careers/">Careers</Link>
                  </li>
                  <li>
                    <Link href="https://www.nitcoinc.com/company/our-team/">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog-1">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/term-condition">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    <a href="https://www.google.com/maps/place/Nitco+Inc/@29.7750387,-95.7836527,15z/data=!4m5!3m4!1s0x0:0x179870ae18746b95!8m2!3d29.7750387!4d-95.7836527?shorturl=1" target="_blank" rel="noopener nofollow noreferrer">440 Cobia Dr., Suite 1701<br/>Katy, Texas 77494</a>
                  </li>
                  <li>
                    <Icon.Mail />
                    Email: <a href="mailto:YourPartner@nitcoinc.com">YourPartner@nitcoinc.com</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    US Ohio : <a href="tel:281-503-7002">281-503-7002</a><br/>
                   Malaysia : <a href="tel:03-2276-3999">03-2276-3999</a><br/>
                   India : <a href="tel:040-29881990">040-29881990</a><br/>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/NitcoIncOfficial/"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nitcoofficial/"
                      className="twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/nitcoincofficial"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Nitco, Inc. All Rights Reserved.</p>
                  <p><a className="Footer-module--link--OttrY" href="https://www.nitcoinc.com/privacy-policy">Privacy Policy</a> |&nbsp;   
                  <a className="Footer-module--link--OttrY" href="https://www.nitcoinc.com/cookie-policy">Cookie Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img {...MapImg} className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img {...Shape1} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img {...Shape2} alt="shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
