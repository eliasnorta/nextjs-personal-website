"use client";
import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";

type SectionType = "projects" | "skills" | "contact" | null;

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
    // the active section
    const [activeSection, setActiveSection] = useState<SectionType>(null);

    // handle which section is in view using intersectionobserver
    useEffect(() => {
      const options = {
        rootMargin: "-30%",
      };

      // observer for projects section
      const projectsObserver = new IntersectionObserver(([entry]) => {
        setActiveSection(entry.isIntersecting ? "projects" : null);
      }, options);
      projectsObserver.observe(projectsSection.current);

      // observer for skills section
      // const skillsObserver = new IntersectionObserver(([entry]) => {
      //   setActiveSection(entry.isIntersecting ? "skills" : null);
      // }, options);
      // skillsObserver.observe(skillsSection.current);

      // observer for cotact section
      // const contactObserver = new IntersectionObserver(([entry]) => {
      //   setActiveSection(entry.isIntersecting ? "contact" : null);
      // }, options);
      // contactObserver.observe(contactSection.current);

      return () => {
        projectsObserver.disconnect();
        // skillsObserver.disconnect();
        // contactObserver.disconnect();
      };
    }, []);

    // scroll to section on click
    const scrollToSection = (sectionRef: any) => {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    };

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
          <div className={style.nav_links}>
            <nav>
              <ul>
                <li
                  className={`${
                    activeSection === "projects" ? style.element_visible : ""
                  }`}
                  onClick={() => scrollToSection(projectsSection)}
                >
                  My projects
                </li>
                <li
                  className={`${
                    activeSection === "skills" ? style.element_visible : ""
                  }`}
                  onClick={() => scrollToSection(skillsSection)}
                >
                  My skills
                </li>
                <li
                  className={`${
                    activeSection === "contact" ? style.element_visible : ""
                  }`}
                  onClick={() => scrollToSection(contactSection)}
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
