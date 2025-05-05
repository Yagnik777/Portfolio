import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

export default function Contact() 
{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => 
    {
    const userInfo={
      fullName:data.fullName,
      email:data.email,
      message:data.message

    } 
    try{
      axios.post("https://getform.io/f/bvrwgdeb",userInfo);
      toast.success("your message is send")

    }
    catch(errors){
      toast.success("error")
      
        
    }
  }
  

  return (
    <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 my-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700 tracking-wide">Contact ME</h1>
      <span className="block text-center mb-6 text-gray-600 italic">Please fill the form below to Contact Me</span>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <form 
         onSubmit={handleSubmit(onSubmit)}
        //action="https://getform.io/f/bvrwgdeb" method="POST" 
        className="space-y-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-800">Send your message</h1>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="fullName">Full Name</label>
            <input
             {...register("fullName", { required: true })} 
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.anme && <span>This field is required</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">Email</label>
            <input
            {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-md p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.anme && <span>This field is required</span>}
          
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
             {...register("message", { required: true })}
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full border rounded-md p-3 resize-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-blue-500 transition transform hover:scale-105 shadow-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
