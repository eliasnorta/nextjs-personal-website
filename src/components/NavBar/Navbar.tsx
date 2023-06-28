import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import { forwardRef /*, useEffect, useState*/ } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

// for detecting section that is in view
// type SectionType = "projects" | "skills" | "contact" | null;

const Navbar = forwardRef(({ sections }: { sections: any }) => {
  // the active section
  // const [activeSection, setActiveSection] = useState<SectionType>(null);

  // handle which section is in view using intersectionobserver
  // useEffect(() => {
  //   const options = {
  //     rootMargin: "-30%",
  //   };

  // observer for projects section
  // const projectsObserver = new IntersectionObserver(([entry]) => {
  //   setActiveSection(entry.isIntersecting ? "projects" : null);
  // }, options);
  // projectsObserver.observe(projectsSection.current);

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

  //   return () => {
  //     projectsObserver.disconnect();
  //     // skillsObserver.disconnect();
  //     // contactObserver.disconnect();
  //   };
  // }, []);

  // scroll to section on click
  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={style.header}>
      <div className={style.navbar_container}>
        <div
          className={style.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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
              {sections.map((section: any, index: any) => (
                <li key={index} onClick={() => scrollToSection(section.ref)}>
                  {section.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={style.nav_row_end}>
          <DarkModeToggle />
          <div className={style.menu}>
            <HamburgerMenu sections={sections} />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
