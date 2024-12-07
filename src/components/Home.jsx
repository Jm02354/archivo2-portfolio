import React from "react";
import "./styles/home.css";

//Images
import codingimg from "../imagenes/codingimg1.jpg";
import workcode from "../imagenes/workingcode1.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div id="home" className="home_container">
      <div className="home_div">
        <div className="home_text">
          <h1 className="home_title">
            Hi
            <span className="icon_title"></span>
            {t("home.sp")} <span>Jose Maria</span>
          </h1>
          <h2>{t("home.h2")}</h2>

          <p>{t("home.p")}</p>

          <div className="iconsbtn">
            <a
              href="https://www.linkedin.com/in/josemariachihuanarellano/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/Jm02354" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>

          {/* <div className="downloadbtn">
            <a
              className="effect"
              href="https://drive.google.com/file/d/1DoXvj_PjE9LNBC-ianHijUVgOJS2g-WN/view?usp=sharing"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download CV English Version
            </a>
            <a
              className="effect"
              href="https://drive.google.com/file/d/1SIzv1rUvYl-rneTIK5D2bPo2Ln_tG02d/view?usp=sharing"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download CV German Version
            </a>
          </div> */}
        </div>
        <div className="home_img">
          <img className="codingimg" src={codingimg} alt="codingimg" />
          <img className="codingimg2" src={workcode} alt="typing" />
        </div>
      </div>
    </div>
  );
};

export default Home;
