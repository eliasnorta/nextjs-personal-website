"use client";
import React, { useContext, useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  const [toggleDirection, setToggleDirection] = useState(0);

  const toggleOn = () => {
    setToggleDirection(toggleDirection === 0 ? 20 : 0);

    toggle();
  };

  return (
    <motion.div onClick={toggleOn} className={styles.container}>
      <motion.div
        animate={{
          scale: toggleDirection === 0 ? 0 : 1,
          x: toggleDirection === 0 ? 5 : 0,
          rotate: toggleDirection === 0 ? -90 : 0,
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 150,
        }}
        className={styles.icon}
      >
        <Image src={"/moon.svg"} alt="sun" width={15} height={15} />
      </motion.div>
      <motion.div
        animate={{
          scale: toggleDirection === 0 ? 1 : 0,
          x: toggleDirection === 0 ? 0 : -5,
          rotate: toggleDirection === 0 ? 0 : 90,
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 150,
        }}
        className={styles.icon}
      >
        <Image src={"/sun.svg"} alt="sun" width={15} height={15} />
      </motion.div>
      <motion.div
        animate={{
          x: toggleDirection,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        className={styles.ball}
      />
    </motion.div>
  );
};

export default DarkModeToggle;
