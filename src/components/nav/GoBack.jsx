import React from 'react'
import './GoBack.scss'
import logo from '../../assets/ap-logo.svg'
import { useNavigate } from 'react-router-dom'
import arrow_icon from "../../assets/arrow_icon.svg"
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
      <ul className="go-back-menu">
        <li className="go-back-button" onClick={handleGoBack}>
          <img src={arrow_icon} alt="Arrow icon" />
          <p>Go Back</p>
        </li>
        <div className="go-back-connect">
          <a href="mailto:alexanderphilippopoulos@gmail.com">
            <img src={mail_icon} alt="Mail" />
          </a>
          <a href="https://www.linkedin.com/in/alexander-philippopoulos-037268258/">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/aphilippopoulos248">
            <img src={github_icon} alt="GitHub" />
          </a>
        </div>
      </ul>
    </div>
  )
}

export default GoBack
