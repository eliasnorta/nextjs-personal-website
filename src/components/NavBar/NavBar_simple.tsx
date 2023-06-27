"use client";
import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";

type SectionType = "projects" | "skills" | "contact" | null;

const SimpleNavbar = () => {
  return (
    <header className={style.header}>
      <div className={style.navbar_container}>
        <div className={style.logo}>
          <Link href="/">
            <Image
              src="eliasnorta_icon.svg"
              alt="Logo"
              width={30}
              height={35}
            />
          </Link>
        </div>

        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};
export default SimpleNavbar;
