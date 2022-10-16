import React from 'react'
import { Link } from 'react-router-dom'
import './css/Intro.css'

function HomeIntro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hakeemiyyah</span>
                <span>Arabic College</span>
                <span>Leading Arabic College in Sri Lanka with over 300+ students.</span>
            </div>
            <Link to='/admission'>
                <button className="button i-button">Apply</button>
            </Link>
        </div>
        <div className="i-right">
            {/* <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={AkmIzdn} alt="" />
            <img src={GlassesImoji} alt="" />
            <div style={{ top: '-4%', left: '68%' }}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            <div style={{ top: '18rem', left: '0rem' }}>
                <FloatingDiv image={ThumpUp} txt1='Best Design' txt2='Award' />
            </div> */}
            <div className='blur blurYellow' style={{ top: "0rem", width: "22rem", height: "17rem", left: "9rem" }}></div>
            <div className='blur blurBlue' style={{ top: "10rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
        </div>
    </div>
  )
}

export default HomeIntro