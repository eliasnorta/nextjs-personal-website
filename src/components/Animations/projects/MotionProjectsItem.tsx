import React from "react";
import { motion } from "framer-motion";

type AnimatedProjectItemProps = {
  children: React.ReactNode;
};

const AnimatedProjectItem = ({ children }: AnimatedProjectItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedProjectItem;
