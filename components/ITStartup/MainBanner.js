import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { tinaField } from "tinacms/dist/react";

// Banner Images
import Man from "../../images/banner-image/man.png"
import Code from "../../images/banner-image/code.png"
import Carpet from "../../images/banner-image/carpet.png"
import Bin from "../../images/banner-image/bin.png"
import Book from "../../images/banner-image/book.png"
import Dekstop from "../../images/banner-image/dekstop.png"
import Dot from "../../images/banner-image/dot.png"
import FlowerTopBig from "../../images/banner-image/flower-top-big.png"
import FlowerTop from "../../images/banner-image/flower-top.png"
import Keyboard from "../../images/banner-image/keyboard.png"
import Pen from "../../images/banner-image/pen.png"
import Table from "../../images/banner-image/table.png"
import TeaCup from "../../images/banner-image/tea-cup.png"
import HeadPhone from "../../images/banner-image/headphone.png"
import MainPic from "../../images/banner-image/main-pic.png"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const MainBanner = ({ data }) => {
    const { mainHeading, taglineText, ctaText } = data.page;
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      data-aos-once="false"
                      data-tina-field={tinaField(data, "mainHeading")}
                    >
                      {mainHeading}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      data-aos-once="false"
                    >
                      {taglineText}
                    </p>

                    <Link
                      href="/contact">
                      <a 
                         className="btn btn-primary"
                         data-aos="fade-up"
                         data-aos-delay="300"
                         data-aos-duration="1200"
                         data-aos-once="false">{ctaText}</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-image">
                    <img
                      {...Man}
                      className="animate__animated animate__fadeInDown animate__delay-0.1s"
                      alt="man"
                    />

                    <img
                      {...Code}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="code"
                    />

                    <img
                      {...Carpet}
                      className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                      alt="carpet"
                    />

                    <img
                      {...Bin}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="bin"
                    />

                    <img
                      {...Book}
                      className="animate__animated animate__bounceIn animate__delay-0.1s"
                      alt="book"
                    />

                    <img
                      {...Dekstop}
                      className="animate__animated animate__fadeInDown animate__delay-0.1s"
                      alt="dekstop"
                    />

                    <img
                      {...Dot}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="dot"
                    />

                    <img
                      {...FlowerTopBig}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="flower-top-big"
                    />

                    <img
                      {...FlowerTop}
                      className="animate__animated animate__rotateIn animate__delay-0.1s"
                      alt="flower-top"
                    />

                    <img
                      {...Keyboard}
                      className="animate__animated animate__fadeInUp animate__delay-0.1s"
                      alt="keyboard"
                    />

                    <img
                      {...Pen}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="pen"
                    />

                    <img
                      {...Table}
                      className="animate__animated animate__zoomIn animate__delay-0.1s"
                      alt="table"
                    />

                    <img
                      {...TeaCup}
                      className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                      alt="tea-cup"
                    />

                    <img
                      {...HeadPhone}
                      className="animate__animated animate__rollIn animate__delay-0.1"
                      alt="headphone"
                    />

                    <img
                      {...MainPic}
                      className="animate__animated animate__fadeInUp animate__delay-0.1"
                      alt="main-pic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <img {...Shape1} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img {...Shape2} alt="shape" />
        </div>
        <div className="shape3">
          <img {...Shape3} alt="shape" />
        </div>
        <div className="shape4">
          <img {...Shape4} alt="shape" />
        </div>
        <div className="shape5">
          <img {...Shape5} alt="shape" />
        </div>
        <div className="shape6 rotateme">
          <img {...Shape4} alt="shape" />
        </div>
        <div className="shape7">
          <img {...Shape4} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img {...Shape2} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default MainBanner
