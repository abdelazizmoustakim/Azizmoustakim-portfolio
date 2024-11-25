import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaInstagram, FaTwitter, FaNewspaper } from 'react-icons/fa'; 
import { SiBuymeacoffee, SiSkillshare, SiFiverr, SiFreelancer } from 'react-icons/si';
import { TbBrandUpwork } from 'react-icons/tb';
import ReactTypingEffect from 'react-typing-effect';
import { ReactTyped } from 'react-typed';
import image from './image1.jpg';
import { Button } from '@mui/material';
import Projects from './Projects';

const Hero = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className='bg-gray-50 dark:bg-gray-900 dark:text-white'>
      <section className="bg-gray-500 bg-opacity-10 dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out">
              My email blogging is here! Subscribe now!
            </h1>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-300 max-w-lg">
              Stay updated with our latest posts. Don't miss out on the best content directly to your inbox!
            </p>
          </div>
          
          {/* Link to Subscription Page with Separate "Subscribe" button */}
          <div className="mt-6 lg:mt-0">
            <Link to="/subscription" className="inline-block">
              <button 
                className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </section>
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      
      {/* First Section: Full-Width with Transparent Background */}
      <div className="w-full bg-primary bg-opacity-20 p-10 border-b-[0.5px] border-gray-200 dark:border-black shadow-none">
        {/* Circular Photo */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-3 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-200 opacity-60 blur-md" />
            <img
              src={image}
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-600 shadow-lg relative z-10"
            />
          </div>
          <br />
          {/* Typing Effect for Description */}
          <div className="w-full text-center">
            <a className="text-gray-600 font-semibold tracking-widest text-4xl sm:text-4xl text-center hover:text-primary mb-5 dark:text-gray-200 dark:hover:text-primary">
              <span className="block sm:inline">Abdelaziz </span>
              <span className="block sm:inline">Moustakim</span>
            </a>
            <br className='s:hidden'/>
            <br />
            <a className="hover:cursor-pointer">
              <ReactTyped
                strings={[
                  "I am an <span class='text-primary text-1xl'>aspiring software engineer</span> and <span class='text-primary text-1xl'>Full-Stack Developer</span>, currently studying <span class='text-primary text-1xl'>Computer Science</span> with a strong passion for technology."
                ]}
                typeSpeed={50}
                onComplete={(self) => self.cursor.remove()}
                className="text-gray-500 text-2xl mb-5 dark:text-gray-400"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
            </a>
            <br />
            <br />
            <div>
              <br />
              <ReactTypingEffect
                text={[
                  "I’m a content creator in the tech space.",
                  "I'm a lifelong computer science student and tech entrepreneur.",
                ]}
                typingDelay={8000}
                speed={60}
                eraseDelay={2500}
                className="text-black-600 text-1xl mb-5 text-2xl text-black mt-4 dark:text-blue-100"
              />
            </div>
            <p className="italic text-2xl text-gray mt-4 dark:text-yellow-50">
              "I write clean code."
            </p>
          </div>
          <br />
          <div className="flex justify-center items-center whitespace-nowrap text-2xl sm:text-lg text-gray mt-4 text-center sm:text-left flex-shrink-0 flex-shrink dark:text-gray-70">
            <Button
              variant="outlined"
              className="
                mt-5 ml-10 
                border border-gray-800 
                bg-black text-black 
                dark:bg-gray-800 dark:text-white dark:border-white 
                transition duration-200
              "
              onClick={() => setShowProjects(!showProjects)} // Toggle showProjects
            >
              {showProjects ? 'More About Me' : 'See Projects'}
            </Button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering based on showProjects state */}
      {showProjects ? (
        <Projects />
      ) : (
        <div className="mt-10 flex flex-col md:flex-row max-w-4xl mx-auto space-y-10 md:space-y-0">
          {/* More About Me Section */}
          <div className="md:flex-2 md:flex md:flex-col md:text-left">
            <h2 className="text-2xl font-bold mb-4 ml-3 text-gray-700 dark:text-gray-400">More About Me</h2>
            <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100">
              My journey in <span className="text-third font-bold">technology</span> started at <span className="text-third font-bold">17</span>, and I’ve been captivated by coding ever since. Currently, I am pursuing a <span className="text-third font-bold">Bachelor of Computer Science (BCS)</span> at an <span className="text-third font-bold">American-accredited university</span> where I dive deeper into <span className="text-third font-bold">computer science</span> and explore how technology can solve real-world challenges.
            </p>
            <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100">
          My passion for software motivates me to create innovative solutions that help people and contribute positively to the tech community.  As a <a className="text-third font-bold">lifelong learner</a>, and <a className="text-third font-bold">content creator</a> in the tech space. I love <a className="text-third font-bold">teaching others</a> what I have learned over the years and encouraging other people to be collaborative as well. I’m driven by using technology to create meaningful solutions to real world problems, but I also think those solutions will be discovered by people sharing what they know throughout the tech space.            </p>
            <p className="text-gray-600 text-1xl mb-4 text-left ml-3 dark:text-gray-100">
              The tech world can be so competitive; however, I think many people, including myself, want to see it become more cooperative and collaborative. We have the ability to fix problems everyone has, and we should all understand what a great responsibility that is.
            </p>
          </div>

          {/* Vertical Line for larger screens */}
          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

          {/* Contact Me Section */}
          <div className="hidden md:flex flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700 dark:text-gray-400">Contact</h2>
            <div className="flex flex-col items-start space-y-4">
              {[
                { href: "https://github.com/abdelazizmoustakim", label: "GitHub", icon: <FaGithub /> },
                { href: "mailto:abdelaziz@azizmoustakim.com", label: "Email", icon: <FaEnvelope /> },
                { href: "https://twitter.com/code_withabdo", label: "X (Twitter)", icon: <FaTwitter /> },
                { href: "https://www.instagram.com/code_withabdo/", label: "Instagram", icon: <FaInstagram /> },
                { href: "https://substack.com/@codewithabdo", label: "Substack", icon: <FaNewspaper /> },
                { href: "", label: "Skillshare", icon: <SiSkillshare /> },
                { href: "", label: "Fiverr", icon: <SiFiverr /> },
                { href: "", label: "Upwork", icon: <TbBrandUpwork /> },
                { href: "", label: "Freelancer", icon: <SiFreelancer /> },
                { href: "https://buymeacoffee.com/code_withabdo", label: "Buy Me a Coffee", icon: <SiBuymeacoffee /> }
              ].map(({ href, label, icon }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-900 hover:text-primary transition duration-200 space-x-2 w-full justify-start dark:text-primary dark:hover:text-gray-100"
                >
                  <span className="text-3xl dark:text-primary dark:hover:text-gray-100">{icon}</span>
                  <span className="text-lg">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Quote Section (Hidden when Projects are displayed) */}
      {!showProjects && (
        <div className="w-full text-center mt-16 mb-10">
          <p className="italic text-2xl text-gray-700 mb-2 dark:text-yellow-50">
            "Any sufficiently advanced technology is indistinguishable from magic."
          </p>
          <p className="text-gray-600 text-lg dark:text-yellow-50">- Arthur C. Clarke</p>
        </div>
      )}
    </div>
    </div>
  );
};
export default Hero;