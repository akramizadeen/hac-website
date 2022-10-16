import React from 'react'
import HomeAbout from '../SubComponents/HomeAbout'
import HomeBlogs from '../SubComponents/HomeBlogs'
import HomeContact from '../SubComponents/HomeContact'
import HomeCourses from '../SubComponents/HomeCourses'
import HomeIntro from '../SubComponents/HomeIntro'

function Home() {
  return (
    <>
    <HomeIntro />
    <HomeAbout />
    <HomeCourses />
    <HomeBlogs />
    <HomeContact />
    </>
  )
}

export default Home