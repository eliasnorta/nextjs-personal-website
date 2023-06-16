import React from "react";
import style from "./hero.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h4 className={style.subtitle_top}>HELLO, MY NAME IS</h4>
        <h1 className={style.title}>Elias Norta</h1>
        <h4 className={style.subtitle_bottom}>
          I'M A DEVELOPER FROM FINLAND 👨🏼‍💻🇫🇮
        </h4>
        <div className={style.socials}>
          <ul>
            <li>
              <Link href="">
                <BsLinkedin size={20} />
              </Link>
            </li>
            <li>
              <Link href="">
                <BsGithub size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
