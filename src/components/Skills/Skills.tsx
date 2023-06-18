import React from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";
import style from "./skills.module.css";
import Image from "next/image";

type SkillsType = {
  frameworks: { id: number; name: string; icon: any }[];
  languages: { id: number; name: string; icon: any }[];
  otherSkills: { id: number; name: string; icon: any }[];
};

type ItemsType = {
  skills: SkillsType;
};

const getData = (cat: keyof ItemsType) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Skills = () => {
  const skillsData = getData("skills") as SkillsType;

  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>MY SKILLS AND EXPERIENCE</h1>
        <p className={style.desc}>
          My experiences with coding first began in 2017 when I wanted to create
          a mobile game and started learning game development with Unity. I then
          released it on the Google Play Store. Fast forward to today I have
          learned the many acpects of web development.
        </p>
        <div className={style.skills_container}>
          <div className={style.skills_group}>
            <h2>Frameworks</h2>
            <ul>
              {skillsData.frameworks.map((framework) => (
                <li key={framework.id}>
                  <div className={style.skill_item}>
                    <Image
                      src={framework.icon}
                      alt={framework.icon}
                      width={50}
                      height={50}
                    />
                    {framework.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.skills_group}>
            <h2>Languages</h2>
            <ul>
              {skillsData.languages.map((language) => (
                <li key={language.id}>
                  <div className={style.skill_item}>
                    <Image
                      src={language.icon}
                      alt={language.icon}
                      width={50}
                      height={50}
                    />
                    {language.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.skills_group}>
            <h2>Other skills</h2>
            <ul>
              {skillsData.otherSkills.map((other) => (
                <li key={other.id}>
                  <div className={style.skill_item}>
                    <Image
                      src={other.icon}
                      alt={other.icon}
                      width={50}
                      height={50}
                    />
                    {other.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
