/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = { duration: 0.3 };

const AnimationPages = (ComponentToAnimate) => {
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

export default AnimationPages;
