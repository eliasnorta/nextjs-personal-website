"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import style from "./hamburgerMenu.module.css";

const HamburgerMenu = ({ sections }: { sections: any }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (
        navbarOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  // handle when clicked on link. Scroll to section
  const scrollToSection = (sectionRef: any) => {
    setNavbarOpen(false);
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className={style.button}>
        <Image
          onClick={() => setNavbarOpen((prev) => !prev)}
          src={navbarOpen ? "./menu_close_icon.svg" : "./menu_icon.svg"}
          alt="menu icon"
          width={30}
          height={30}
        />
      </div>

      <div
        className={`${style["menu-nav"]} ${
          navbarOpen ? style["show-menu"] : ""
        }`}
      >
        <ul ref={menuRef}>
          {sections.map((section: any, index: any) => (
            <li key={index} onClick={() => scrollToSection(section.ref)}>
              {section.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
