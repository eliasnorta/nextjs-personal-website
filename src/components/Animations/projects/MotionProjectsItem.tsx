import React from "react";
import { motion } from "framer-motion";

type AnimatedProjectItemProps = {
  children: React.ReactNode;
  className?: any;
};

const AnimatedProjectItem = ({
  children,
  className,
}: AnimatedProjectItemProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedProjectItem;
