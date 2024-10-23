"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white dark:bg-black py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto text-center text-black dark:text-white">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Mercedes-Benz</h2>
          <p className="text-sm">The Best or Nothing</p>
        </div>
        <div className="flex justify-center flex-wrap mb-4">
          <motion.a
            href="/about"
            className="mx-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="/services"
            className="mx-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Services
          </motion.a>
          <motion.a
            href="/test-drive"
            className="mx-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Test Drive
          </motion.a>
          <motion.a
            href="/contact"
            className="mx-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
          <motion.a
            href="/privacy"
            className="mx-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Privacy Policy
          </motion.a>
        </div>
        <div className="mb-4">
          <p className="text-sm">© 2024 Mercedes-Benz. All rights reserved.</p>
        </div>
        <div className="flex justify-center">
          <motion.a
            href="https://www.facebook.com/mercedesbenz"
            className="mx-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/mercedesbenz"
            className="mx-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mercedesbenz"
            className="mx-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/user/MercedesBenzTV"
            className="mx-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
