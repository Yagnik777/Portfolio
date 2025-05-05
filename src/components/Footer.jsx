import React from 'react'
import {
    FaFacebook,
    FaXTwitter,  
    FaInstagram,
    FaLinkedinIn,
  
  } from "react-icons/fa6";
  
function Footer() {
  return (
    <>
    <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <ul className="flex space-x-6">
                             <li> 
                             <a href="https://www.facebook.com/ "
                             target="_blank">
                             
                            <FaFacebook className="text-2xl cursor-pointer"/>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/yagnik-pankhaniya-82ab69269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                             target="_blank">
                            <FaLinkedinIn className="text-2xl cursor-pointer"/>
                            </a>
                            </li> 
                            <li>
                            <a href="https://www.instagram.com/yagnik_prajapati_8/profilecard/?igsh=YnhsOXRwenJmOXJ4 "
                             target="_blank">
                            <FaInstagram className="text-2xl cursor-pointer"/>
                            </a>
                            </li>
                            <li>
                            <a href="https://x.com/Yagnik74607171 "
                             target="_blank">
                            <FaXTwitter className="text-2xl cursor-pointer"/>
                            </a>
                            </li>
                            
                            </ul>
               
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Yagnik</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer