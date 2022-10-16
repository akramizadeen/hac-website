import React from 'react'
import { Link } from 'react-router-dom'
import './css/About.css'
import Principal from '../../Images/principal.jpeg'

function HomeAbout() {
  return (
    <div className="about">
        <div className="a-left">
            <span>Principal's </span>
            <span>Message</span>
            <div className="bg bg1"></div>
            <div className='bg bg2'></div>
            <div className="bg">
              <img className='principal' src={Principal} alt="principal" />
            </div>
        </div>
        <div className="a-right">
            <div className='message'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic voluptate repellendus aperiam voluptates libero quo tenetur iure quaerat nemo aliquid, ex quidem debitis asperiores unde quisquam, sint eius? Saepe?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt, commodi optio temporibus accusantium maiores odit dolores dolorum natus quia aliquid nihil laboriosam veniam.</p>
            </div>
            <Link to='/about'>
              <button className="button a-button">Learn More</button>
            </Link>
            <div className='blur blurYellow'></div>
            <div className='blur blurBlue' style={{ top: "10rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
        </div>
    </div>
  )
}

export default HomeAbout