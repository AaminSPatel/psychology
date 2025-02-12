import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPage from "./Blog";
import Home from "./Home";
import Seo from "./Seo";
import BlogList from "./AllBlogs";
import { useBlogContext } from "./Context";
import { FaFacebook, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useBlogContext();

  return (
    <header
      className={`p-4 flex justify-between items-center border-b ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold text-pink-500">Mindful Moments</h1>

      <div className="flex items-center justify-center gap-3 px-3">
        <Link to={"/psychology/"} className="hover:text-pink-500">
          Home
        </Link>
        <Link to={"/psychology/blogs"} className="hover:text-pink-500">
          Blog
        </Link>
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className=" text-pink-400 hover:text-white px-2 py-1 rounded-lg hover:bg-pink-600 transition"
          >
            {theme === "light" ? (
              <FaMoon className="my-1 " />
            ) : (
              <FaSun className="my-1" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const { theme } = useBlogContext();

  return (
    <footer
      className={`py-8 px-4 text-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
        <div className="mb-4 flex justify-center space-x-4">
        <Link to={"https://www.instagram.com/psycho.112_/"} target="_blank" className="text-xl hover:text-pink-500">
          <FaInstagram/>
        </Link>
        <Link to={"#"} className="text-xl hover:text-pink-500">
          <FaFacebook/>
        </Link>
        <Link to={"#"} className="text-xl hidden hover:text-pink-500">
          📷
        </Link>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Mindful Moments. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to={"#"} className="hover:text-pink-500">
            Privacy Policy
          </Link>
          <Link to={"#"} className="hover:text-pink-500">
            Terms of Service
          </Link>
          <Link to={"#contact"} className="hover:text-pink-500">
            Contact
          </Link>
        </div>
      </div>
    
    </footer>
  );
};

export default function App() {
  const { theme } = useBlogContext();

  return (
    <Router>
      <div
        className={`${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        } min-h-screen flex flex-col`}
      >
        <Seo />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/psychology/" element={<Home />} />
            <Route path="/psychology/blogs" element={<BlogList />} />
            <Route path="/psychology/blog/:id" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
