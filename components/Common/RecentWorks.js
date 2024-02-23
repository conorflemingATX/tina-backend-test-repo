import React from "react"
import Link from 'next/link'
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Work Images
import WorksImage1 from "../../images/works-image/works-image1.jpg"
import WorksImage2 from "../../images/works-image/works-image2.jpg"
import WorksImage3 from "../../images/works-image/works-image3.jpg"
import WorksImage4 from "../../images/works-image/works-image4.jpg"
import WorksImage5 from "../../images/works-image/works-image5.jpg"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"
import Head from "next/head"

const RecentWorks = ({data}) => {
  const {heading,text,RecentWorks} = data;
  const fullServices = Array.isArray(RecentWorks) ? RecentWorks.slice(0,8): null;
  return (
    <>
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
            <div className="bar"></div>
            <p>
             {text}
            </p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="works-slides"
        > 

     {fullServices != null
       ? fullServices.map(({Heading, text, worksimage}, i) => {
        return (
          <SwiperSlide key={i + "service"} className="single-works">
          <img src={worksimage} alt="Works" />
          {/* <Link href="/project-details" className="icon">
            <Icon.Settings />
          </Link> */}
          <div className="works-content">
            <h3
              style={{ color: "white" }}>{Heading}
            </h3>
            <p>
              {text}
            </p>
          </div>
        </SwiperSlide>
        );
       })
      : null }  
        </Swiper>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img {...Shape2} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img {...Shape2} alt="shape" />
        </div>
        <div className="shape7">
          <img {...Shape4} alt="shape" />
        </div>
        <div className="shape4">
          <img {...Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default RecentWorks
