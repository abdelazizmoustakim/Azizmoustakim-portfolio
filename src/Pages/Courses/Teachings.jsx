import React from 'react';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import ReactTypingEffect from 'react-typing-effect';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { SiSkillshare } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
const Teachings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      {/* First section with icon */}
      <div className="w-full bg-primary bg-opacity-10 p-6 sm:p-4 border-b border-gray-200 dark:border-black shadow-none">
  <div className="flex flex-col sm:flex-row justify-center items-center">
    <Link
      className="flex items-center justify-center text-3xl sm:text-2xl font-bold font-poppins hover:text-primary transition-all duration-300 p-2 whitespace-nowrap flex-shrink-0" 
      to='/Teachings'
    >
      <LiaChalkboardTeacherSolid className="inline-block mr-2 text-3xl sm:text-2xl flex-shrink-0" />
      My Teachings
    </Link>
  </div>

  {/* Typing effect */}
  <div className="flex justify-center items-center h-30 mt-4">
    <ReactTypingEffect
      text={"Below, you will find a comprehensive list of all the courses I offer."}
      typingDelay={10}
      speed={70}
      eraseDelay={9999999}
      className="text-gray-600 text-xl sm:text-lg mb-4 text-center font-roboto px-2"
    />
  </div>
  <div className="flex justify-center items-center whitespace-nowrap text-lg sm:text-base italic text-gray-700 mt-4 text-center flex-shrink-0 dark:text-gray-400">
    <Button
      variant="outlined"
      color="primary"
      className="mt-4"
      href="mailto:abdelaziz@azizmoustakim.com"
    >
      Hire Me
    </Button>
  </div>
</div>
      {/* Section for last course */}
      <div className="dark:text-gray-200 py-10">        
        <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-300">
          <h1 className="py-4 text-5xl font-bold border-b-[0.5px] border-gray-400 dark:border-gray-200">My Last Course</h1>
          {/* Video Section */}
          <div className="w-full max-w-5xl mt-8">
            <video
              className="w-full h-auto aspect-video rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Description Section */}
          <div className="mt-6 text-lg sm:text-md text-gray-600 dark:text-gray-300 max-w-2xl text-center px-4">
            <p>This video is an introduction to HTML and CSS for beginners, taught on Skillshare. The class includes a hands-on project where students will create a personal portfolio.</p>
          </div>
          <button className="inline-flex items-center py-2 mt-3 space-x-2 text-sm text-violet-600 dark:text-violet-300 hover:text-violet-800">
            See the class
          </button>
          <div className="flex justify-center w-full m-20">
          <SiSkillshare className="text-6xl text-violet-300 dark:text-violet-300 hover: " href=''/>
          <FaYoutube className="text-6xl text-red-600 dark:text-red-500 ml-11" href=''/>
          <SiUdemy className="text-6xl text-pink-600 dark:text-violet-200 ml-10" href='' />
        </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default Teachings;
