import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({
  text,
  url,
  icon,
  target,
}: {
  text: string;
  url: string;
  icon?: any;
  target?: string;
}) => {
  return (
    <Link href={url} target={target}>
      <button className={styles.container}>
        {text}
        {icon}
      </button>
    </Link>
  );
};

export default Button;
