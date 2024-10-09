import React from "react";
import { motion } from "framer-motion";
const TabButton = ({ active, selectTab, children }) => {
  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab} className="mr-4">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-1 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
