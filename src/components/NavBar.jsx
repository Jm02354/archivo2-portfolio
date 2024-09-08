import React, { useState } from 'react'
import './styles/navBar.css'
import germanyFlag from '../imagenes/germany.png';
import britishFlag from '../imagenes/united-kingdom.png'
import { useTranslation } from 'react-i18next';
import Particle from './Particle';
const body = document.querySelector('body')

const NavBar = () => {

  const [isDark, setIsDark] = useState(false)

  //Translation
  const [t, i18n] = useTranslation("global")

  //Menu responsive
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false);
  };

  //Darkmode
  const handleDark = () => {
    setIsDark(!isDark)
    body.classList.toggle('dark')
  }

  return (
    <header className='header'>
       <div className='nav container'>

        <button onClick={handleDark} className='darklight'>
          <ion-icon name={isDark ? "sunny-outline" : "moon-outline"}></ion-icon>
        </button>

        <div className={`menu ${menu && 'active'}`}>
          <button onClick={handleMenu} className='btn_menuclose'>
                  <ion-icon name="close-circle-outline"></ion-icon>
          </button>
          <ul className='menu_list'>
            <li className='menu_item'>
              <a href="#home" className='menu_link' onClick={closeMenu}>{t("navBar.nb1")}</a>
            </li>
            <li>
              <a href="#aboutme" className='menu_link' onClick={closeMenu}>{t("navBar.nb2")}</a>
            </li>
            <li>
              <a href="#projects" className='menu_link' onClick={closeMenu}>{t("navBar.nb3")}</a>
            </li>
            <li>
              <a href="#skills" className='menu_link' onClick={closeMenu}>{t("navBar.nb4")}</a>
            </li>
            <li>
              <a href="#contactme" className='menu_link' onClick={closeMenu}>{t("navBar.nb5")}</a>
            </li>
            <li>
              <a className='menu_link'>{t("navBar.nb6")}: </a>      
              </li>
            <li className='menu_link' onClick={closeMenu}>
              <img onClick={() => i18n.changeLanguage("en")} className='flag' src={britishFlag} alt="english" />
            </li>
            <li className='menu_link' onClick={closeMenu}>
              <img onClick={() => i18n.changeLanguage("de")} className='flag2' src={germanyFlag} alt="german" />
            </li>
          </ul>
        </div>

          <button onClick={handleMenu} className='btn_menuopen'>
            <ion-icon name="menu-outline"></ion-icon>
        </button>
        <Particle isDark={isDark}/>
      </div>
    </header>
  )
}

export default NavBar
