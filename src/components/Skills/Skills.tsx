import React from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";

type SkillsType = {
  frameworks: { id: number; name: string }[];
  languages: { id: number; name: string }[];
  otherSkills: { id: number; name: string }[];
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
    <div>
      <h1>Skills</h1>
      <div>
        <h2>Frameworks</h2>
        <ul>
          {skillsData.frameworks.map((framework) => (
            <li key={framework.id}>{framework.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          {skillsData.languages.map((language) => (
            <li key={language.id}>{language.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Other skills</h2>
        <ul>
          {skillsData.otherSkills.map((other) => (
            <li key={other.id}>{other.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
