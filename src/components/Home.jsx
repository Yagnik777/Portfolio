import React from 'react'
import pic from '../assets/yagnik.jpg'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa6";

import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { FaPython } from "react-icons/fa";

import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
        <div name="Home" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">    
                 
           
            {/* Text Content Section */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-30 space-y-2 order-2 md:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xl"> Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br/>
            <p className="text-sm md:text-md text-justify mt-4"> 
            Highly motivated and detail-oriented Bachelor of Computer
            Applications (BCA) student , with a solid foundation in programming,
            web development, and Android application design. Proficient in Python,
            PHP, and front-end technologies, with practical experience in
            developing real-world projects, including a full-stack Hotel Management
            System platform and a food ordering app inspired by Zomato. Skilled in
            tools such as GitHub,Adobe Photoshop. Committed to continuous
            learning and passionate about contributing to innovative and impactful
            software development initiatives
                </p>
            <br/>
            {/*social media icons*/}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-1 ">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-6">
                 <li> 
                 <a href="https://www.facebook.com/share/12JUJZ4d8fZ/ "
                 target="_blank">
                 
                <FaSquareFacebook className="text-2xl cursor-pointer"/>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/yagnik-pankhaniya-82ab69269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank">
                <FaLinkedin className="text-2xl cursor-pointer"/>
                </a>
                </li> 
                <li>
                <a href="mailto:yagnikpankhaniya45@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    
                  <i class="fas fa-envelope"></i>
                <BiLogoGmail className="text-2xl cursor-pointer"/>
                </a>
                </li>
                <li>
                <a href="http://t.me/Yagnik070 "
                 target="_blank">
                <FaTelegram className="text-2xl cursor-pointer"/>
                </a>
                </li>
                </ul>
            </div>
            <div className="space-y-1">
                <h1 className="font-bold">Currently working on</h1>
            <div className="flex space-x-5">
                <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}"/>
                <FaPhp className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}"/>
                <AiFillAndroid className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}"/>
                <FaPython className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2px}"/>
                </div>   
            </div>
            </div>
            </motion.div>

            
            


        

          {/* Profile Image Section */}
          <motion.div
            className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img src={pic} className="rounded-full w-60 md:w-[450px] md:h-[450px] shadow-lg hover:scale-105 transition-transform duration-300" alt="profile" />
          </motion.div>
            </div>

        </div>
        
        <hr/>
    </>
  )
}


export default Home