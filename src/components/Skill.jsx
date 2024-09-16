import React from 'react'
import './styles/skills.css'

import html from "../imagenes/html.png"
import css from "../imagenes/css.png"
import javascript from "../imagenes/javascript.png"
import react from "../imagenes/react.png"
import VSC from "../imagenes/vsc.png"
import nodejs from "../imagenes/nodejs.png"
import postman from "../imagenes/postman.png"
import github from "../imagenes/github.png"
import postgres from "../imagenes/postgres.png"
import gif from "../imagenes/learning.gif"
import { useTranslation } from 'react-i18next'

const Skill = () => {

  const [t] = useTranslation("global")

  return (
    <>
    <h2 className='skl' id='skills'>{t("skills.h2")}</h2>
    <div className='skills_container'>
      
      <div className="banner">
        <div className="slider" style={{ '--quantity': 9}}>
          <div className="item" style={{ '--position': 1 }}>
            <img src={html} alt="" />
            <h2>HTML</h2>
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img src={css} alt="" />
            <h2>CSS</h2>
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img src={javascript} alt="" />
            <h2>Javascript</h2>
          </div>
          <div className="item" style={{ '--position': 4 }}>
            <img src={react} alt="" />
            <h2>React</h2>
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img src={VSC} alt="" />
            <h2>Visual Studio Code</h2>
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img src={nodejs} alt="" />
            <h2>Nodejs</h2>
          </div>
          <div className="item" style={{ '--position': 7 }}>
            <img src={postman} alt="" />
            <h2>Postman</h2>
          </div>
          <div className="item" style={{ '--position': 8 }}>
            <img src={github} alt="" />
            <h2>Github</h2>
          </div>
          <div className="item" style={{ '--position': 9 }}>
            <img src={postgres} alt="" />
            <h2>Postgres</h2>
          </div>
        </div>
        <div className='learning'>
          <img src={gif} alt="" />
        </div>
      </div>
      <div className='skills_text'>
          <p>{t("skills.p")}</p>
      </div>
    </div>
    
    </>
  )
}

export default Skill 