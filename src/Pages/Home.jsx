import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='bg-teal-200 h-[70dvh] grid place-items-center'>
      <div className="grid justify-items-center gap-5 ">
        <div className="w-80 py-3 bg-white text-center grid rounded-lg">
        <Link to="/Signin" className='text-4xl font-bold text-blue-500 '> Signin </Link>
        </div>
        <div className="w-80 py-3 bg-white text-center grid rounded-lg">
        <Link to="/Signup_Component" className='text-4xl font-bold text-blue-500 ' >Signup</Link>
        </div>
   
      </div>
    </div>
  )
}

