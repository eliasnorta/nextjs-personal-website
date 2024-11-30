// "use client";
import React from "react";
import { motion as m, Variants } from "framer-motion";
import style from "../Skills/skills.module.css";

type AnimatedListProps = {
  items: any[];
  variants?: Variants;
};

const MotionList: React.FC<AnimatedListProps> = ({ items, variants }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <m.li
          key={index}
          variants={variants}
          transition={{ duration: 1, delay: index * 0.2 }}
          className={style.skill_item}
        >
          {item}
        </m.li>
      ))}
    </ul>
  );
};

export default MotionList;
