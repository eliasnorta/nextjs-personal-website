"use client";
import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        <Image src={"/moon.svg"} alt="sun" width={15} height={15} />
      </div>
      <div className={styles.icon}>
        <Image src={"/sun.svg"} alt="sun" width={15} height={15} />
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
