import React from "react";
import * as Icon from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Team1 from "../../images/team-image/team1.jpg";
import Team2 from "../../images/team-image/team2.jpg";
import Team3 from "../../images/team-image/team3.jpg";
import Team4 from "../../images/team-image/team4.jpg";
import Team5 from "../../images/team-image/team5.jpg";

const Team = ({ data }) => {
  const { heading, text, ourawesometeam } = data;
  const fullServices = Array.isArray(ourawesometeam)
    ? ourawesometeam.slice(0, 8)
    : null;
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>{heading}</h2>
            <div className="bar"></div>
            <p>{text}</p>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="team-slider"
        >
          {fullServices != null
            ? fullServices.map(
                (
                  {
                    teammemberimage,
                    nameofmember,
                    roleofmember,
                    icon1,
                    icon2,
                    icon3,
                    icon4,
                    textarea,
                  },
                  i
                ) => {
                  return (
                    <SwiperSlide key={i + "servcie"} className="single-team">
                      <div className="team-image">
                        <img src={teammemberimage} alt="Team" />
                      </div>

                      <div className="team-content">
                        <div className="team-info">
                          <h3>{nameofmember}</h3>
                          <span>{roleofmember}</span>
                        </div>

                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon.Facebook />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon.Twitter />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon.Linkedin />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://gitlab.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Icon.Gitlab />
                            </a>
                          </li>
                        </ul>

                        <p>{textarea}</p>
                      </div>
                    </SwiperSlide>
                  );
                }
              )
            : null}
        </Swiper>
      </div>
    </>
  );
};

export default Team;
