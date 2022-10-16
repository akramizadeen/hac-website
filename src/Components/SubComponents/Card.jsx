import React from 'react'
import { Link } from 'react-router-dom'
import './css/Card.css'

function Card({emoji, heading, text, linkPath}) {
    return (
      <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{text}</span>
        <Link to={linkPath}>
          <button className="c-button">LEARN MORE</button>
        </Link>
      </div>
    )
  }

export default Card