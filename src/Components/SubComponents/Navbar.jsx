import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div to='/' className="n-name">Hakeemiyyah</div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: 'none' }}>
                    <Link to='/' className='n-listItem'>Home</Link>
                    <Link to='/about' className='n-listItem'>About</Link>
                    <Link to='/courses' className='n-listItem'>Courses</Link>
                    <Link to='/blog' className='n-listItem'>Blog</Link>
                    <Link to='/contact' className='n-listItem'>Contact</Link>
                </ul>
            </div>
            <Link to='/admission'>
                <button to='/admission' className="button n-button">Admission</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar