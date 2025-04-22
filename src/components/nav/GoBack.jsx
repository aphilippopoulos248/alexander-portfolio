import React from 'react'
import './GoBack.scss'
import logo from '../../assets/ap-logo.png'
import { useNavigate } from 'react-router-dom'
import arrow_icon from "../../assets/arrow_icon.svg"

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
      </ul>
    </div>
  )
}

export default GoBack
