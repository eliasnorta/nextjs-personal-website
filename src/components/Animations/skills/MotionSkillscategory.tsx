import React from "react";
import { motion, Variants } from "framer-motion";

type AnimatedSkillsCategoryProps = {
  children: React.ReactNode;
  className?: any;
  variants: Variants;
};

const AnimatedSkillsCategoryItem = ({
  children,
  className,
  variants,
}: AnimatedSkillsCategoryProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSkillsCategoryItem;
