import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster, toast } from 'react-hot-toast';
import email from '../imagenes/email1.jpg'

import './styles/contactMe.css'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

const ContactMe = () => {

  //COPYTOCLIPBOARD
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 330); 
  };

  //EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_at94iz8', 'template_8n6de8t', form.current, {
        publicKey: 'CDOBH5e3qf9Qrg2Ju',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  }
  
  const message = () => {
    toast.success('Message sent 👌🏽')
  };

  //Translation
  const [t] = useTranslation("global")

  return (
    <>
      <h2 className='ctc' id='contactme'>{t("contact.h2")}</h2>
    <div className='contactme_container'>

      <div className='contactme_form'>

        <div className='form_container'>
            <h2>{t("contact.h22")}</h2>
            <p>{t("contact.p")}</p>
            <div className='btncopy'>
              <a href="mailto:josemariabion@hotmail.com" >josemariabion@hotmail.com</a>
              <CopyToClipboard text="josemariabion@hotmail.com" onCopy={handleCopy}>
                  <ion-icon name="copy-outline"></ion-icon>
              </CopyToClipboard>
              {copied ? <span style={{ color: 'green', marginLeft: '6px' }}>{t("contact.cp")}</span> : null}

            </div>  
            
          <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='h3f'>
                  <h3>{t("contact.h3")}</h3>
                </div>
              <span>👇🏽</span>
              <label>{t("contact.name")}</label>
              <input type="text" placeholder={t("contact.fn")}name='user_name' required />
              <label>{t("contact.email")}</label>
              <input type="email" placeholder={t("contact.ml")} name='user_email' required />
              <label>{t("contact.sub")}</label>
              <input type="text" placeholder={t("contact.sbj")} name='subject' required />
              <label>{t("contact.msm")}</label>  
              <input className='message' type="text" name='message' required />
              <button className='send_btn' onClick={message} type='submit'>{t("contact.send")}</button>
            </form>
              <Toaster
                position='top-right'
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                  className: 'toast',
                  duration: 5000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                    marginTop: '90px',
                  },

                  success: {
                    duration: 1000,
                    theme: {
                      primary: 'green',
                      secondary: 'black',
                    },
                  },
                }}
              />
          </div>
        </div>

        <div className='send_img'>
          <img src={email} alt="email" />
        </div>
      </div>
      </div>
      </>
  )
}

export default ContactMe
