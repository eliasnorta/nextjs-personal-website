import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

interface Section {
  label: string;
  id: string;
}

interface NavbarProps {
  sections: Section[];
}

const Navbar = ({ sections }: NavbarProps) => {
  // const handleScroll = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <header className={style.header}>
      <div className={style.navbar_container}>
        <div
          className={style.logo}
          // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Link href="/">
            <Image
              src="/eliasnorta_icon.svg"
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
                <li
                  key={index}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   handleScroll(section.id);
                  // }}
                >
                  <Link href={"/#" + section.id}>{section.label}</Link>
                  {/* {section.label} */}
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
};

Navbar.displayName = "NavBar";

export default Navbar;
