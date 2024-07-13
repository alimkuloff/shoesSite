import { AiFillStar } from "react-icons/ai"; 
import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import img from '../../assets/hero2.png'
import mc1 from '../../assets/mc1.svg'
import mc2 from '../../assets/mc2.svg'
import mc3 from '../../assets/mc3.svg'
import h3 from '../../assets/3.png'

const Header = () => {
    const data = useTranslation();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
  
    const changeLanguage = (lang) => {
       i18n.changeLanguage(lang);
       setLanguage(lang);
    };


  return (
    <div>
        <div className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__title">
                  <h3>{t("adidas")}</h3>
                  <p>{t("adidasDesc")}</p>
                  <Link className='header__btn' to={"/"}>{t("adidasBtn")}</Link>
               </div>
                  <img className='header__img' src={img} alt="" />
               </div>
            </div>
        </div>

      <div className="container">
        <div className="mini__cards">
          <div className="mini__card">
            <img src={mc1} alt="" />
            <p>{t("minicard1")}</p>
            <small>{t("minicardtext")}</small>
          </div>
          <div className="mini__card">
            <img src={mc2} alt="" />
            <p>{t("minicard2")}</p>
            <small>{t("minicardtext")}</small>
          </div>
          <div className="mini__card">
            <img src={mc3} alt="" />
            <p>{t("minicard3")}</p>
            <small>{t("minicardtext")}</small>
          </div>
        </div>

        <div className='rated'>
          <h3 className="rated__title">{t("most")}</h3>

          <div className='rated__wrapper'>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
