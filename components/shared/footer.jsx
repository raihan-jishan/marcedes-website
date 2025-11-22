"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="  py-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="max-w-6xl mx-auto   px-6 text-center 
  
  backdrop-blur-xl rounded-3xl     shadow-2xl"
      >
        {/* Logo + Tagline */}
        <div className="mb-8">
          <h2
            className="text-3xl font-extrabold bg-gradient-to-r 
      from-purple-300 via-purple-400 to-purple-300 
      bg-clip-text text-transparent tracking-wide"
          >
            Mercedes-Benz
          </h2>
          <p className="text-sm text-purple-200/60 mt-1">
            The Best Or Nothing.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap mb-10 gap-6">
          {[
            { href: "/about", label: "About Us" },
            { href: "/services", label: "Services" },
            { href: "/test-drive", label: "Test Drive" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy", label: "Privacy Policy" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-200/80 hover:text-white transition-all 
          border-b-2 border-transparent hover:border-purple-400/60 
          pb-1 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-purple-300/60 mb-10">
          © {new Date().getFullYear()} Mercedes-Benz. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {[
            {
              icon: <Facebook size={24} />,
              url: "https://facebook.com/mercedesbenz",
            },
            {
              icon: <Twitter size={24} />,
              url: "https://twitter.com/mercedesbenz",
            },
            {
              icon: <Instagram size={24} />,
              url: "https://instagram.com/mercedesbenz",
            },
            {
              icon: <Youtube size={24} />,
              url: "https://youtube.com/user/MercedesBenzTV",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-300 hover:text-white transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
