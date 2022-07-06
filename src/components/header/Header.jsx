import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'
const Header = () => {
  return (
    <header>
      <div className="header__container container">
        <h5>Hello I'am </h5>
        <h1>Toshit Kale</h1>
        <h5 className="text-light">Competitive Coder</h5>
        <CTA/>
          <Headersocial/>
        <div className="me">
        <img src={ME} alt="me" />
        </div>
          <a href="#contact"className=' scroll__down'>Scroll down </a>
      </div>
    </header>
  )
}

export default Header