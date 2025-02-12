import React, { useEffect, useState } from "react";
import { FaBrain, FaHeart, FaSmile, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Seo from "./Seo";
import { useParams } from "react-router-dom";
import blogs from "./BlogPost";
import { useBlogContext } from "./Context";

const BlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { theme } = useBlogContext(); // Access theme from context

  useEffect(() => {
    let blog = blogs.find((blog) => blog.id === parseInt(id));
    setPost(blog);
  }, [id]);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <Seo />

      {/* Blog Section */}
      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.title}
        </motion.h2>

        <motion.p
          className="text-lg text-center popin mb-6 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {post.description}
        </motion.p>

        {/* Benefits Section */}
        <motion.div
          className={`shadow-lg rounded-lg p-6 mb-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FaBrain className="mr-2 text-pink-500" /> Key Benefits
          </h3>
          <ul className="list-none space-y-2">
            {post.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Example Section */}
        <motion.div
          className={`shadow-lg rounded-lg p-6 mb-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <FaHeart className="mr-2 text-pink-500" /> Real-Life Example
          </h3>
          <p>{post.example}</p>
        </motion.div>

        {/* Why It Works Section */}
        <motion.div
          className={`shadow-lg rounded-lg p-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <FaSmile className="mr-2 text-pink-500" /> Why It Works
          </h3>
          <p>{post.whyItWorks}</p>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;
