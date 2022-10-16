import React from 'react'
import './css/Blogs.css'
import HomeBlogCard from './HomeBlogCard'
import Blog1 from '../../Images/blog1.jpeg'
import Blog2 from '../../Images/blog2.png'
import { Link } from 'react-router-dom'

function HomeBlogs() {
  return (
    <div className="blogs">
      <div className="b-heading">
        <span>Explore our </span>
        <span>Blogs</span>
      </div>
      <div className="blogCards">
        <Link to='/blogs/blog1'>
          <HomeBlogCard 
            image = {Blog1}
            title = 'Annual Intramural Competitions'
            date = '20 SEP 2022'
          />
        </Link>
        <Link to='/blogs/blog1'>
          <HomeBlogCard 
            image = {Blog2}
            title = 'Annual Sports Meet 2022'
            date = '27 OCT 2022'
          />
        </Link>
        <Link to='/blogs/blog1'>
          <HomeBlogCard 
            image = {Blog1}
            title = 'Mid Term Examination 2022'
            date = '3 OCT 2022'
          />
        </Link>
      </div>
    </div>
  )
}

export default HomeBlogs