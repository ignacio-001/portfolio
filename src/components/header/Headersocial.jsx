import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/toshit-kale-131740200/" rel="noreferrer" target=" _blank"> <BsLinkedin/></a>
        <a href="https://github.com/ignacio-001"rel="noreferrer" target={"_blank"}><FaGithub/></a>
    </div>
  )
}

export default Headersocial