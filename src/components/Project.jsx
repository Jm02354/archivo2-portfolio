import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/projects.css";
//Images Projects
import slide_image_1 from "../imgprojects/cookie1.png";
import slide_image_2 from "../imgprojects/weather1.png";
import slide_image_3 from "../imgprojects/rickmorty1.png";
import slide_image_4 from "../imgprojects/registeruser1.png";
import slide_image_5 from "../imgprojects/pokemon1.png";
import slide_image_6 from "../imgprojects/ecommerce1.png";
import slide_image_7 from "../imgprojects/api.jpg";

// import required modules
import {
  EffectCoverflow,
  EffectFlip,
  Navigation,
  Pagination,
} from "swiper/modules";
import { useTranslation } from "react-i18next";

const Project = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <h2 className="pjt" id="projects">
        {t("projects.h2")}
      </h2>
      <div className="projects_container">
        <div className="cards_container">
          <Swiper
            effect={"coverflow"}
            grabCursor={false}
            centeredSlides={false}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                coverflowEffect: {},
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
                coverflowEffect: {
                  rotate: 30,
                  stretch: 15,
                  depth: 60,
                },
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 40,
                  stretch: 20,
                  depth: 70,
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 50,
                  stretch: 30,
                  depth: 100,
                },
              },
            }}
          >
            <SwiperSlide></SwiperSlide>

            <SwiperSlide>
              <img className="card_img" src={slide_image_7} alt="ecommerce" />
              <div className="textcard">
                <h2>API E-Commerce</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/w6-trabajo-final"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://documenter.getpostman.com/view/37160931/2sAXjJ5Cy5"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>
                <div className="parr-card">
                  <p>{t("projects.p1")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="card_img"
                src={slide_image_1}
                alt="fortune cookie"
              />
              <div className="textcard">
                <h2>Fortune Cookie</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/project-first-cookie"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://project-first-cookie.netlify.app/"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>
                <div className="parr-card">
                  <p>{t("projects.p2")}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="card_img" src={slide_image_2} alt="weather" />
              <div className="textcard">
                <h2>Weather - App</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/project-second-weather"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://project-second-weather.netlify.app/"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>

                <div className="parr-card">
                  <p>{t("projects.p3")}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="card_img" src={slide_image_3} alt="rickmorty" />
              <div className="textcard">
                <h2>Rick and Morty</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/entregable-3-rickmorty"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a href="https://ent3-rickmorty.netlify.app/" target="_blank">
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>
                <div className="parr-card">
                  <p>{t("projects.p4")}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="card_img"
                src={slide_image_4}
                alt="registeruser"
              />
              <div className="textcard">
                <h2>Register User</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/registeruser-entregable4"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a
                    href="https://registeruser-ent4.netlify.app/"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>

                <div className="parr-card">
                  <p>{t("projects.p5")}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="card_img" src={slide_image_5} alt="pokemon" />
              <div className="textcard">
                <h2>Pokemon</h2>
                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/pokemon-ent5"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a href="https://pokemon-ent5.netlify.app/" target="_blank">
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>

                <div className="parr-card">
                  <p>{t("projects.p6")}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="card_img" src={slide_image_6} alt="ecommerce" />
              <div className="textcard">
                <h2>E-Commerce</h2>

                <div className="cards_btn">
                  <a
                    href="https://github.com/Jm02354/ecommerce-ent6"
                    target="_blank"
                  >
                    <ion-icon className="btns" name="logo-github"></ion-icon>
                  </a>
                  <a href="https://ecommerce-ent6.netlify.app/" target="_blank">
                    <ion-icon className="btns" name="globe-outline"></ion-icon>
                  </a>
                </div>

                <div className="parr-card">
                  <p>{t("projects.p7")}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Project;
