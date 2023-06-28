import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <div className={style.footer_row}>
          <div className={style.image_and_text}>
            <Link href={"/"}>
              <Image
                src="/eliasnorta_icon.svg"
                alt="/eliasnorta_icons.svg"
                width={80}
                height={80}
              />
            </Link>
            <p>
              Designed & Developed by <br /> Elias Norta
            </p>
          </div>
          <div>
            <ul className={`${style.links} ${style.socials_links}`}>
              <li>
                <Link
                  href="https://fi.linkedin.com/in/elias-norta?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <BsLinkedin size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/eliasnorta"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <BsGithub size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer_row}>
          <p className={style.copyright_text}>
            Copyright © Elias Norta. All rights reserved
          </p>
          <ul className={`${style.links} ${style.page_links}`}>
            <li>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/terms-of-service"}>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
