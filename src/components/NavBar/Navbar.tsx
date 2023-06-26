"use client";
import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import { forwardRef } from "react";

const Navbar = forwardRef(
  ({
    projectsSection,
    skillsSection,
    contactSection,
  }: {
    projectsSection: any;
    skillsSection: any;
    contactSection: any;
  }) => {
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
                <li
                  onClick={() =>
                    projectsSection.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  My projects
                </li>
                <li
                  onClick={() =>
                    skillsSection.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  My skills
                </li>
                <li
                  onClick={() =>
                    contactSection.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Get in touch
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
  }
);

export default Navbar;
