import logo from "../assets/logo.png"
import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram,FaEnvelope } from "react-icons/fa"
// import { FaSquareTwitter } from "react-icons/fa6"
// import { FaPhoneAlt } from "react-icons/fa"
const NavBar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-1/4" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/karthick2305/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Karthick0023" target="_blank"><FaGithub/></a>
            <a href="karthick2352003@gmail.com" target="_blank"><FaEnvelope/></a>
            <a href="https://www.instagram.com/karthick.0023/" target="_blank"><FaInstagram/></a>
            
            </div>
            
        </nav>
}

export default NavBar
