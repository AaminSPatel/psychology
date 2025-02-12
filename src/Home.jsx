import React from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import blogs from "./BlogPost";
import { useBlogContext } from "./Context";
import { motion } from "framer-motion";
import { FaBrain, FaHeart, FaArrowRight } from "react-icons/fa";
export default function Home() {
  const { theme } = useBlogContext(); // Get theme state & toggle function

  return (
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Seo />
          {/* Hero Section */}
          <section className="relative text-center py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r  ${theme =='light' ? ' text-gray-900 from-pink-100 via-purple-100 to-indigo-100': 'text-white from-pink-950 via-purple-950 to-indigo-950'}   opacity-20 blur-3xl`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Icons & Heading */}
        <div className="flex justify-center space-x-4 mb-4 text-pink-500">
          <FaBrain className="text-5xl animate-pulse" />
          <FaHeart className="text-5xl animate-bounce" />
        </div>

        <h2 className={`text-5xl font-bold philosopher ${theme =='light' ? ' text-gray-900': 'text-white'}  mb-4`}>
          Welcome to <span className="text-pink-500">Mindful Moments</span>
        </h2>

        <p className={`max-w-2xl mx-auto text-lg popin leading-relaxed  ${theme =='light' ? ' text-gray-900': 'text-white'} `}>
          Discover insightful psychology blogs on mental health, mindfulness, and self-improvement. 
          Join us on a journey towards mental wellness and emotional balance.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link 
            to="/psychology/blogs"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Explore Blogs <FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0,6).map((post, index) => (
            <div
              key={index}
              className={`group shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className={`relative flex items-center justify-start h-20 ${theme === "dark" ? "bg-gray-700" : "bg-red-100"}`}>
                <h3 className="text-xl px-6 font-bold text-pink-500 line-clamp-1">{post.title}</h3>
              </div>
              <div className="p-6">
                <p className={theme === "dark" ? "text-gray-300 line-clamp-3" : "text-gray-700 line-clamp-3"}>{post.description}</p>
                <Link to={`/psychology/blog/${post.id}`} className="hover:text-pink-500">
                  <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={theme === "dark" ? "bg-gray-800 text-white py-12" : "bg-gray-100 text-gray-800 py-12"}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full bg-transparent border-b-2 py-2 ${
                  theme === "dark" ? "border-gray-400 focus:border-pink-500" : "border-gray-600 focus:border-pink-500"
                } focus:outline-none`}
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full bg-transparent border-b-2 py-2 ${
                  theme === "dark" ? "border-gray-400 focus:border-pink-500" : "border-gray-600 focus:border-pink-500"
                } focus:outline-none`}
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows="4"
                className={`w-full bg-transparent border-b-2 py-2 ${
                  theme === "dark" ? "border-gray-400 focus:border-pink-500" : "border-gray-600 focus:border-pink-500"
                } focus:outline-none`}
              ></textarea>
            </div>
            <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
