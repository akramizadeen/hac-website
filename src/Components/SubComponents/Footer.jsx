import React from "react";
import "./css/Footer.css";
import Wave from '../../Images/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import YouTube from "@iconscout/react-unicons/icons/uil-youtube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
                <Link to='/'>
                    <li className="listItem">Home</li>
                </Link>
                <Link to='/about'>
                    <li className="listItem">About Us</li>
                </Link>
                <Link to='/courses'>
                    <li className="listItem">Courses</li>
                </Link>
                <Link to='/blog'>
                    <li className="listItem">Blog</li>
                </Link>
                <Link to='/contact'>
                    <li className="listItem">Contact Us</li>
                </Link>
            </ul>
        </div>
        <div className="quickLinks">
            <h2>Web Apps</h2>
            <ul>
                <Link to='/'><li className="listItem">Teacher Portal</li></Link>
                <Link to='/'><li className="listItem">Student Portal</li></Link>
                <Link to='/'><li className="listItem">Admin Portal</li></Link>
                <Link to='/'><li className="listItem">Web Master</li></Link>
            </ul>
        </div>
        <div className="quickLinks">
            <h2>Social Media</h2>
            <div className="f-icons">
                <Link to="#">
                    <Insta color="white" size={"3rem"} />
                </Link>
                <Link to="#">
                    <Facebook color="white" size={"3rem"} />
                </Link>
                <Link to="#">
                    <YouTube color="white" size={"3rem"} />
                </Link>
            </div>
        </div>
        <div className="quickLinks">
            <h2>Contact Us</h2>
            <h3>Address</h3>
                <span>11/D, Galadeniya,<br />Udathalawinna</span>
            <h3>Phone</h3>
                <span>+94 81 234 4356</span>
            <h3>Email</h3>
                <span>hakeemiyyah@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;