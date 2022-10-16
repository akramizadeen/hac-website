import React from 'react'
import './css/BlogCard.css'

function HomeBlogCard({image, title, date}) {
  return (
    <div class="blog-card">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
  )
}

export default HomeBlogCard