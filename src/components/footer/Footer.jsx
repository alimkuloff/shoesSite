import { BsTwitter } from "react-icons/bs"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react'
import logo from '../../assets/logo.svg'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import west from '../../assets/west.svg'
import mastercard from '../../assets/mastercard.svg'
import paypal from '../../assets/paypal.svg'
import visa from '../../assets/visa.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import './Footer.css'

const Footer = () => {
    const data = useTranslation();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
  
    const changeLanguage = (lang) => {
       i18n.changeLanguage(lang);
       setLanguage(lang);
    };


  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <div className='footer__title'>
             <img src={logo} alt="" />
             <p>{t('footer1')}</p>
          </div>
          <div className='footer__title'>
            <b>{t('follow')}</b>
            <p>{t('footer2')}</p>
            <div className="footer__icons">
               <a href="https://facebook.com/"><img src={facebook} alt="" /></a>
                <a href="https://twitter.com"><img src={twitter} alt="" /></a>
            </div>
          </div>
          <div className='footer__title'>
            <b>{t('contact')}</b>
            <p>{t('footer3')}</p>
          </div>
        </div>
        <div className="footer__card">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className='footer__imgs'>
              <img src={west} alt="" />
              <img src={mastercard} alt="" />
              <img src={paypal} alt="" />
              <img src={visa} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
