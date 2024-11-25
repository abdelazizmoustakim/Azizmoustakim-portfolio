import React from 'react';
import img from './image.png';

const Subscription = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-200">
      {/* Left Column - Text and Image */}
      <div className="flex flex-col justify-between items-center lg:items-start space-y-4 mt-20 mb-20">
        <div className="space-y-2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 lg:text-5xl">
            Hi there !
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Subscribe to get the latest tech blogs and news delivered straight to your inbox!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stay updated with cutting-edge news, reviews, and tutorials about technology, gadgets, and more.
          </p>
        </div>
        <div className="mr-10 mt-10">
          <img src={img} alt="Blogging" className="w-full h-64" />
        </div>
      </div>

      {/* Right Column - Form */}
      <form noValidate="" className="space-y-6 mt-20">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 lg:text-5xl mt-10 mb-10">
          Let's Learn together!
        </h2>
        <div>
          <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
          <input 
            id="first-name" 
            type="text" 
            placeholder="Enter your first name" 
            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
          />
        </div>

        <div>
          <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
          <input 
            id="last-name" 
            type="text" 
            placeholder="Enter your last name" 
            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:bg-indigo-700 transition-all"
        >
          Subscribe
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          By subscribing, you agree to receive emails with the latest tech blogs and news. We respect your privacy.
        </p>
      </form>
      <br />
    </div>
  );
};

export default Subscription;
