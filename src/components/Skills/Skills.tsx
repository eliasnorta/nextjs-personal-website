"use client";
import React from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";
import style from "./skills.module.css";
import Image from "next/image";
import MotionWrapper from "../Animations/MotionWrapper";
import MotionList from "../Animations/MotionList";

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

const Skills = ({ id }: { id: string }) => {
  const skillsData = getData("skills") as SkillsType;

  return (
    <MotionWrapper id={id}>
      <section className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>MY SKILLS AND EXPERIENCE</h1>
          <p className={style.desc}>
            My coding career began in 2018 with game development. I released two
            games before transitioning into web development, which is my main
            interest today.
          </p>
          <div className={style.skills_container}>
            <div className={style.skills_group}>
              <h2>Frameworks</h2>
              <MotionList
                items={skillsData.frameworks.map((framework) => (
                  <div className={style.skill_item} key={framework.id}>
                    <Image
                      src={framework.icon}
                      alt={framework.icon}
                      width={50}
                      height={50}
                    />
                    {framework.name}
                  </div>
                ))}
              />
            </div>

            <div className={style.skills_group}>
              <h2>Languages</h2>
              <MotionList
                items={skillsData.languages.map((language) => (
                  <div className={style.skill_item} key={language.id}>
                    <Image
                      src={language.icon}
                      alt={language.icon}
                      width={50}
                      height={50}
                    />
                    {language.name}
                  </div>
                ))}
              />
            </div>

            <div className={style.skills_group}>
              <h2>Other related</h2>
              <MotionList
                items={skillsData.otherSkills.map((other) => (
                  <div className={style.skill_item} key={other.id}>
                    <Image
                      src={other.icon}
                      alt={other.icon}
                      width={50}
                      height={50}
                    />
                    {other.name}
                  </div>
                ))}
              />
            </div>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

Skills.displayName = "Skills";

export default Skills;
