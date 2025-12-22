

import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaRedditAlien, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#e5f1ff] text-black w-full mt-20 rounded-t-3xl shadow-inner">
      {/* Top Header */}
      <div className="w-full bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 p-10 rounded-t-3xl flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
            ✨ Boost Your Productivity
          </h2>
          <p className="text-lg font-medium text-gray-800">Discover a suite of intelligent tools</p>
          <p className="text-md text-purple-700 font-semibold">
            to simplify task management and elevate your workflow.
          </p>
        </div>

        <button className="mt-6 md:mt-0 px-6 py-3 bg-cyan-300 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition">
          🎵 Login
        </button>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-10 pt-10 pb-6 border-b border-gray-400 text-sm">
        {[
          {
            title: "Products",
            links: ["Get Started", "Download Apps", "Premium", "Education Offer", "Gift Cards"]
          },
          {
            title: "Support",
            links: ["Help Center", "FAQ", "Translations"]
          },
          {
            title: "Resources",
            links: ["URL Scheme", "Refer Friends & Earn", "Integrations"]
          },
          {
            title: "About",
            links: ["About Us", "Blog", "Media"]
          },
          {
            title: "Legal",
            links: ["Terms", "Privacy", "License", "Security"]
          }
        ].map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1 text-gray-700">
              {section.links.map((item, j) => (
                <li key={j}>
                  <Link
                    to="/home"
                    className="hover:text-blue-700 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-10 py-4 space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-600">© 2025 AK Team</p>

        <div className="flex items-center space-x-4">
          <select className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm shadow-sm">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <FaXTwitter className="text-xl hover:text-black cursor-pointer" />
          <FaRedditAlien className="text-xl hover:text-orange-500 cursor-pointer" />
          <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
