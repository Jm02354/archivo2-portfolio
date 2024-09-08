import React from 'react'
import './styles/aboutMe.css'
import profileimg from '../imagenes/Fotoprofile.jpg'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {

  const [t] = useTranslation("global")

  return (
    <>
      <h2 className='abt' id='aboutme'>{t("abtme.h1")}</h2>
      <div  className='aboutme_container'>
        
        <div className='aboutme_div'>
          <div className='aboutme_text'>
            <p>{t("abtme.p1")}</p>
            <p>{t("abtme.p2")}</p>
            <p>{t("abtme.p3")}</p>
          </div>
          <div className='aboutme_img'>
            <div className='content'>
              <img className='foto' src={profileimg} alt="fotoprofile" />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default AboutMe
