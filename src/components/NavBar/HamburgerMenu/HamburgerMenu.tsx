"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import style from "./hamburgerMenu.module.css";

const HamburgerMenu = ({ sections }: { sections: any }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

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
      {/* button for opening and closing nav menu */}
      <div
        className={style.button}
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        <Image
          src={navbarOpen ? "./menu_close_icon.svg" : "./menu_icon.svg"}
          alt="menu icon"
          width={30}
          height={30}
        />
      </div>

      {/* the nav menu */}
      <div
        ref={menuRef}
        className={`${style["menu-nav"]} ${
          navbarOpen ? style["show-menu"] : ""
        }`}
      >
        <ul>
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
