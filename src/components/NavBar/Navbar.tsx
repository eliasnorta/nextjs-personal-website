import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.navbar_container}>
        <div className={style.logo}>
          <Link href="/">
            <Image
              src="eliasnorta_icon.svg"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className={style.nav_links}>
          <nav>
            <ul>
              <li>
                <Link href="#projects">My projects</Link>
              </li>
              <li>
                <Link href="#skills">My skills</Link>
              </li>
              <li>
                <Link href="#contact">Get in touch</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
