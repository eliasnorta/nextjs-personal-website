"use client";
import React from "react";
import style from "./hero.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <m.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={style.container}
    >
      <div className={style.wrapper}>
        <m.h4
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={style.subtitle_top}
        >
          HELLO, MY NAME IS
        </m.h4>
        <m.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
          className={style.title}
        >
          Elias Norta
        </m.h1>
        <m.h4
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={style.subtitle_bottom}
        >
          I'M A DEVELOPER FROM FINLAND 👨🏼‍💻🇫🇮
        </m.h4>

        <div className={style.socials}>
          <ul>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="https://fi.linkedin.com/in/elias-norta?trk=people-guest_people_search-card"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <BsLinkedin size={20} />
              </Link>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link
                href="https://github.com/eliasnorta"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <BsGithub size={20} />
              </Link>
            </m.li>
          </ul>
        </div>
      </div>
    </m.section>
  );
};

export default Hero;
