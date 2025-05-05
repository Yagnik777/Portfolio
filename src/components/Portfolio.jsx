import React from 'react'
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import java from "../../public/java.png";
import android from "../../public/android.png";
import php from "../../public/php.png";



function Portfolio() 
{

        const cardItem = [
          
          {
            id: 1,
            logo: reactjs,
            name: "React JS+Node Js",
            link:"https://github.com/Yagnik777/Hotel_management-",
            text:"A personal portfolio website built with React to showcase my projects, skills, and experience.",
          },
          {
            id: 3,
            logo: php,
            name: "php",
            link:"https://github.com/Yagnik777/Hotel_management-",
            text:"Description: A hotel management platform to manage users, guests and room bookings efficiently.",



          },
         
          {
            id: 2,
            logo: android,
            name: "android",
            link:"https://github.com/Yagnik777/Foodies",
            text:"Description:Food ordering app with user/admin panels using PHP and MySQL and PHP API. ",




          },
          {
            id: 4,
            logo: php,
            name: "php",
            link:"https://github.com/Yagnik777/grocery-store-",
            text:"Description:Grocery store software for handling sales,inventory,and customer ",

          },
        ];
      
  return (
    <div name="Portfolio" className=" max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">
        <div>
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className=" underline font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {
                cardItem.map(({id,logo,name,link,text}) =>(
                <div className="md:w-[250px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"key={id}>
                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt=""></img>
                        
                        <div>
                        <div className="px-2 font-bold text-xl mb-2">{name}</div>
                        <p className="px-2 text-gray-700">{text}</p>
                        </div>
                        <div className="justify-around px-6 py-4 space-x-4 text-center">
                        <button onClick={() => window.open(link, "_blank")}
                         className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-center">Source Code</button>
                        </div>
                        
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio 