import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home page">
      <motion.h1
        initial={{
          opacity: 0,
          // x: "100vw",
        }}
        animate={{
          fontSize: "10rem",
          opacity: 1,
          // x: 0,
          // rotateZ: 360
        }}
        transition={{
          //  delay: 0.5,
          duration: 3,
          type: "tween",
          // type: "spring",
          // stiffness: 120
        }}
      >
        framer-motion
      </motion.h1>

      <motion.h2
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{
          duration: 3,
          type: "tween",
          // type: "spring",
          // stiffness: 120
        }}
      >
        React
      </motion.h2>
    </div>
  );
};

export default Home;
