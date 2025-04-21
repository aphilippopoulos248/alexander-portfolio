import React from 'react'
import './GoBack.scss'
import logo from '../../assets/ap-logo.png'
import { useNavigate } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import linkedin_icon from "../../assets/icons8-linkedin.svg"
import github_icon from "../../assets/icons8-github-48.svg"
import mail_icon from "../../assets/gmail.svg"

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="go-back">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
          <img alt="" className='nav-mob-close' />
          <div className="go-back-button">
            <li><p onClick={handleGoBack}>Go Back</p></li>
          </div>
      </ul>
    </div>
  )
}

export default GoBack
