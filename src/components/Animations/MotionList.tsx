"use client";
import React from "react";
import { motion as m } from "framer-motion";
import style from "../Skills/skills.module.css";

type AnimatedListProps = {
  items: any[];
};

const MotionList: React.FC<AnimatedListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <m.li
          key={index}
          initial={{ opacity: 0, translateY: 30 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.15 }}
          className={style.skill_item}
        >
          {item}
        </m.li>
      ))}
    </ul>
  );
};

export default MotionList;
