import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Link } from 'react-router-dom';
import { PiBooksDuotone } from "react-icons/pi";
import { Button } from "@mui/material";
import { blogPosts, bookPosts } from "../../Index/index"; // Ensure these imports are valid
import { FaCalendarAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
const Writing = () => {
  const [expandedPost, setExpandedPost] = useState(null); // Track which post is expanded
  const [showAllPosts, setShowAllPosts] = useState(false); // Toggle between showing 6 and all posts
  const [filter, setFilter] = useState("blogs"); // State for filter selection (blogs or books)
  const toggleSeeMorePosts = () => {
    setShowAllPosts(!showAllPosts);
  };
  // Determine posts based on the filter
  const postsToDisplay = filter === "blogs" ? blogPosts : bookPosts;
  
  // Determine the posts to display based on showAllPosts state
  const visiblePosts = showAllPosts ? postsToDisplay : postsToDisplay.slice(0, 6);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      {/* SEO metadata */}
      <Helmet>
        <title>My Writings - Abdelaziz Moustakim</title>
        <meta
          name="description"
          content="Explore my writings on software engineering, computer science, and cutting-edge technology."
        />
        <meta name="keywords" content="blogs, software engineering, computer science, technology" />
        <meta name="author" content="Abdelaziz Moustakim" />
      </Helmet>
      <section className="bg-gray-700 bg-opacity-10 dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out">
              My email blogging is here! Subscribe now!
            </h1>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-300 max-w-lg">
              Stay updated with our latest posts. Don't miss out on the best content directly to your inbox!
            </p>
          </div>
          
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


      {/* Header Section */}
      <div className="w-full bg-primary bg-opacity-10 p-6 sm:p-4 border-b border-gray-200 dark:border-black">
      
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Link
            className="flex items-center text-3xl sm:text-2xl font-bold hover:text-primary transition-all duration-300 p-2"
            to="/Writing"
          >
            <PiBooksDuotone className="inline-block mr-2 text-3xl sm:text-2xl" />
            My Writings
          </Link>
        </div>
        <div className="flex justify-center items-center h-30 mt-4">
          <ReactTypingEffect
            text={["Explore my books and blogs, focusing on software engineering, computer science, and cutting-edge technology."]}
            typingDelay={10}
            speed={60}
            eraseDelay={9999999}
            className="text-gray-600 text-xl sm:text-lg text-center px-2"
          />
        </div>
        <div className="flex justify-center items-center mt-4 mb-5">
          <Button variant="outlined" color="primary" className="mt-4" href="mailto:abdelaziz@azizmoustakim.com">
            Contact me
          </Button>
        </div>
        {/* Filter Buttons in Contact Section */}
        <div className="flex justify-center items-center mt-4 space-x-6 mb-10">
          <button
            onClick={() => setFilter("blogs")}
            className={`text-xl font-semibold ${filter === "blogs" ? "text-blue-600 dark:text-violet-400" : "text-gray-600 dark:text-gray-200"} hover:underline`}
          >
            Blogs
          </button> 
          <button
            onClick={() => setFilter("books")}
            className={`text-xl font-semibold ${filter === "books" ? "text-blue-600 dark:text-violet-400" : "text-gray-600 dark:text-gray-200"} hover:underline`}
          >
            Books
          </button>
        </div>
      </div>

      {/* Expanded Post Section */}
      {expandedPost !== null && expandedPost >= 0 && expandedPost < postsToDisplay.length ? (
        <div className="container mx-auto my-10 px-6 flex flex-col lg:flex-row items-start bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <Helmet>
            <title>{postsToDisplay[expandedPost].title} - Abdelaziz Moustakim</title>
            <meta name="description" content={postsToDisplay[expandedPost].content.slice(0, 150)} />
          </Helmet>
          <img
            src={postsToDisplay[expandedPost].image}
            alt={postsToDisplay[expandedPost].title}
            className="w-full lg:w-1/3 h-48 object-cover mt-10"
          />
          <div className="p-6 flex flex-col w-full">
            <span className="text-gray-500 flex items-center">
              <FaCalendarAlt className=" mr-2 text-blue-500" /> {postsToDisplay[expandedPost].date}
            </span>
            <h1 className="text-3xl font-bold mt-2">{postsToDisplay[expandedPost].title}</h1>
            <p className="mt-4">{postsToDisplay[expandedPost].content}</p>
            {postsToDisplay[expandedPost].headers?.map((header, i) => (
              <div key={i} className="mt-6">
                <h2 className="text-2xl font-semibold">{header.title}</h2>
                <p className="mt-2">{header.content}</p>
              </div>
            ))}
            {postsToDisplay[expandedPost].links?.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold">Useful Links</h2>
                <ul className="list-disc pl-5 mt-2">
                  {postsToDisplay[expandedPost].links.map((link, i) => (
                    <li key={i} className="mt-2">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-500 hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => setExpandedPost(null)}
              className="mt-5 px-3 py-2 text-lg font-semibold rounded border bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              Back to All Posts
            </button>
          </div>
        </div>
      ) : (
        // Blog/Book List Section
        <div className="dark:text-gray-200 py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {visiblePosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => setExpandedPost(index)}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-gray-500">{post.timeAgo}</span>
                  <h1 className="text-2xl font-bold mt-2">{post.title}</h1>
                  <p className="mt-2">{post.content.slice(0, 120)}...</p>
                  <button
                    onClick={() => setExpandedPost(index)}
                    className="mt-6 text-blue-400 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 hover:underline transition-all"
                  >
                    Read The {filter === "blogs" ? "Blog" : "Book"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={toggleSeeMorePosts}
              className="mt-6 bg-violet-600 dark:bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all"
            >
              {showAllPosts ? "Show Less" : "See More"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Writing;