"use client";

import { motion } from "framer-motion";

const Wrapper = ({ children }) => {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
      {children}
    </motion.div>
  );
};

export default Wrapper;
