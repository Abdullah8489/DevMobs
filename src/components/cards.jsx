import React from 'react'
import './cards.css'
import { BsLinkedin } from 'react-icons/bs';
import { IconContext } from "react-icons";

export default function cards() {
  return (
    <>
    <div className="card-main-container">
      <div className="card-inner-container">
        <div className="card-upper-portion">
          <div className="card-img-container">
            <img src="/images/abd.jpg" alt="person-img" className='card-image' />
          </div>
          <div className="card-content">
            <h2>Abdullah Nazim</h2>
            <h3>Front-End Engineer</h3>
          </div>
        </div>
      </div>

      <div className='card-link-icon'>
        <a href="https://www.linkedin.com/in/abdullah-sheikh-50520a207/" target='_blank'>
          
        <IconContext.Provider value={{ size: 35, className:'icon-direct-class' }}>
          <BsLinkedin />
        </IconContext.Provider>

        </a>
      </div>

    </div>
    </>
  )
}
