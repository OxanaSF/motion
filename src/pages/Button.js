import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <div className="page1 page"> 
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 8px rgb(255, 255, 255)',
          boxShadow: '0px 0px 10px rgb(255, 255, 255)',
        }}
      >
        Click Me!
      </motion.button>
    </div>
  );
};

export default Button;
