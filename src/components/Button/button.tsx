import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

type ButtonProps = {
  text: string;
  url: string;
  icon?: React.ReactNode;
  target?: string;
  type?: "button" | "submit" | "reset"; // Define the type prop to accept specific values
};

const Button = ({ text, url, icon, target, type = "button" }: ButtonProps) => {
  return (
    <Link href={url} target={target}>
      <button type={type} className={styles.container}>
        {text}
        {icon}
      </button>
    </Link>
  );
};

export default Button;
