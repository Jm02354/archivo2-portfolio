import React from 'react'
import './styles/footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <footer className='footer'>
      <div className='footer_container'>
        <p>&copy; 2024 - All rights reserved</p>
        <div className='footer_btn'>
            <a href="https://github.com/Jm02354" target='_blank'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/josemariachihuanarellano/" target='_blank'>
              <ion-icon name="logo-github"></ion-icon>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
