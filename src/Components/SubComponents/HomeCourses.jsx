import React from 'react'
import Card from './Card'
import './css/Courses.css'
import HeartEmoji from '../../Images/heartemoji.png'

function HomeCourses() {
  return (
    <div className="courses">
        <div className="c-heading">
            <span>Courses </span>
            <span>We Offer...</span>
        </div>
        
        <div className="cards">
            <div className="courseCard">
                <Card
                    emoji = {HeartEmoji}
                    heading = 'Sharia'
                    text = 'Figma, Sketch, Photoshop, Adobe, Adobe XD'
                    linkPath = '/courses/sharia'
                />
            </div>
            <div className="courseCard">
                <Card
                    emoji = {HeartEmoji}
                    heading = 'Hifl'
                    text = 'Figma, Sketch, Photoshop, Adobe, Adobe XD'
                    linkPath = '/courses/hifl'
                />
            </div>
            <div className="courseCard">
                <Card
                    emoji = {HeartEmoji}
                    heading = 'Girdhan'
                    text = 'Figma, Sketch, Photoshop, Adobe, Adobe XD'
                    linkPath = 'courses/girdhan'
                />
            </div>
            <div className="courseCard">
                <Card
                    emoji = {HeartEmoji}
                    heading = 'Diploma'
                    text = 'Figma, Sketch, Photoshop, Adobe, Adobe XD'
                    linkPath = 'courses/diploma'
                />
            </div>
        </div>
    </div>
  )
}

export default HomeCourses