import React, { forwardRef } from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";
import style from "./skills.module.css";
import Image from "next/image";
import MotionWrapper from "../Animations/MotionWrapper";
import MotionList from "../Animations/MotionList";
import AnimatedSkillsCategoryItem from "../Animations/skills/MotionSkillscategory";

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

const Skills = forwardRef<HTMLDivElement>(({}, ref) => {
  const skillsData = getData("skills") as SkillsType;

  const category = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 30 },
  };

  const skillItem = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 30 },
  };

  return (
    <MotionWrapper id="skills">
      <section ref={ref} className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>MY SKILLS AND EXPERIENCE</h1>
          <p className={style.desc}>
            My coding career began in 2018 with game development. I released two
            games before transitioning into web development, which is my main
            interest today.
          </p>
          <div className={style.skills_container}>
            <AnimatedSkillsCategoryItem
              variants={category}
              className={style.skills_group}
            >
              <h2>Languages</h2>
              <MotionList
                variants={skillItem}
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
            </AnimatedSkillsCategoryItem>

            <AnimatedSkillsCategoryItem
              variants={category}
              className={style.skills_group}
            >
              <h2>Frameworks</h2>
              <MotionList
                variants={skillItem}
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
            </AnimatedSkillsCategoryItem>

            <AnimatedSkillsCategoryItem
              variants={category}
              className={style.skills_group}
            >
              <h2>Other</h2>
              <MotionList
                variants={skillItem}
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
            </AnimatedSkillsCategoryItem>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
});

Skills.displayName = "Skills";

export default Skills;
