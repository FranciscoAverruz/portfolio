/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// src/utils/AnimationPages.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0},
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
};

const transition = { duration: 0.5 };

const AnimationOpacity = (ComponentToAnimate) => {
  return (props) => (
    <AnimatePresence >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        <ComponentToAnimate {...props} />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationOpacity;
