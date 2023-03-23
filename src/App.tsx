import React from 'react';
import { Images } from './assets';

export const App = () => {
  return(
    <div className="w-screen h-screen flex justify-center items-center relative">
      <img 
        src={Images.Background}
        alt="background"
        className="w-full h-full absolute top-0 left-0 -z-10"
      />  
      <div className="w-96">
        <div className="bg-header-pattern rounded-t-lg bg-blue-700 flex justify-center items-center py-10 text-center font-extrabold">
          <h1 className="text-3xl text-white w-2/3">Creating email templates had never been easier</h1>
        </div>
        <div className="bg-white py-5 px-3 rounded-b-lg">
          <p className="flex flex-col font-extrabold items-center text-center text-gray-600">Receive daily emails on how to best creat email templates, completely free.</p>
          <form className="flex my-5">
            <input 
              name="email"
              type="email"
              placeholder="Email Address"
              className="border w-full mr-2 indent-4 rounded-md focus:outline-none focus:border-blue-700 duration-500 bg-gray-100"
            />
            <button className="py-2 px-5 font-extrabold text-white flex items-center justify-center bg-blue-700 rounded-md">Subscribe</button>
          </form>
          <p className="text-gray-600">No spam, ever. Unsubscribe anytime.</p>
          <div className="my-5 flex items-center justify-center">
            <img 
              src={Images.UserAvatar}
              alt="user avatar"
            />
            <div className="ml-3">
              <p className="font-extrabold">Andrew Vickins</p>
              <p>Newsletter Designer</p>
            </div>
          </div>
          <p className="text-center text-gray-600">"By far one of the best newsletter i"ve ever subscribed to. It is sent biweekly and i'm always looking forward to their emails."</p>
        </div>
      </div>
    </div>
  )
}