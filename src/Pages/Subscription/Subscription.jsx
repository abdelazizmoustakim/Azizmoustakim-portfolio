import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoIosCheckbox } from 'react-icons/io';
import img from './image.png';
const Subscription = () => {
  // // State to manage the checkbox (checked or unchecked)
  // const [isChecked, setIsChecked] = useState(false);
  // // Toggle function for checkbox
  // const toggleCheckbox = () => {
  //   setIsChecked(!isChecked);
  // };
  // return (
  //   <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-200">
  //     {/* Left Column - Text and Image */}
  //     <div className="flex flex-col justify-between items-center lg:items-start space-y-4 mt-20 mb-20">
  //       <div className="space-y-2 text-center lg:text-left">
  //         <h2 className="text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 lg:text-5xl">
  //           Hi there!
  //         </h2>
  //         <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
  //           Subscribe to get the latest tech blogs and news delivered straight to your inbox!
  //         </p>
  //         <p className="text-sm text-gray-500 dark:text-gray-400">
  //           Stay updated with cutting-edge news, reviews, and tutorials about technology, gadgets, and more.
  //         </p>
  //       </div>
  //       <div className="mr-10 mt-10">
  //         <img src={img} alt="Blogging" className="w-full h-64" />
  //       </div>
  //     </div>

  //     {/* Right Column - Form */}
  //     <form noValidate="" className="space-y-6 mt-20">
  //       <h2 className="text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 lg:text-5xl mt-10 mb-10">
  //         Let's Learn together!
  //       </h2>
  //       <div>
  //         <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
  //         <input 
  //           id="first-name" 
  //           type="text" 
  //           placeholder="Enter your first name" 
  //           className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
  //         <input 
  //           id="last-name" 
  //           type="text" 
  //           placeholder="Enter your last name" 
  //           className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
  //         <input 
  //           id="email" 
  //           type="email" 
  //           placeholder="Enter your email" 
  //           className="w-full p-3 rounded-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600" 
  //         />
  //       </div>

  //       {/* Checkbox next to the agreement text */}
  //       <div className="flex items-center space-x-2 mt-4">
  //         {/* The checkbox is controlled by the state */}
  //         <input 
  //           type="checkbox" 
  //           id="terms" 
  //           className="hidden" 
  //           name="terms" 
  //           value="true"
  //           checked={isChecked} 
  //           onChange={toggleCheckbox}  // Toggle on change
  //         />
  //         <label htmlFor="terms" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
  //           {/* Conditionally render the checkbox icon based on isChecked state */}
  //           {isChecked ? <IoIosCheckbox className="mr-2 text-xl" /> : <MdCheckBoxOutlineBlank className="mr-2 text-xl" />}
  //           <span>By subscribing, you agree to receive emails with the latest tech blogs and news. We respect your privacy.</span>
  //         </label>
  //       </div>

  //       <button 
  //         type="submit" 
  //         className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:bg-indigo-700 transition-all"
  //       >
  //         Subscribe
  //       </button>
  //     </form>
  //     <br />
  //   </div>
  // );








  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Oops! There was an error
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Something went wrong. Please try again later or contact support.</p>
        <div className="flex flex-wrap justify-center mb-4">
          <a className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-white dark:text-gray-900" href='/Writing'>Go Back</a>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 mt-auto text-center py-4">
        The email subscription will be here soon.
      </div>
    </section>
  );
  
};
export default Subscription;