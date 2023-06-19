import React from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";
import style from "./projects.module.css";
import Image from "next/image.js";
import Button from "../Button/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import TestButton from "../testButton/TestButton";

type ItemType = {
  id: number;
  title: string;
  date: number;
  image: any;
  desc: string;
  cta: string;
};

type ItemsType = {
  projects: ItemType[];
};

const getData = (cat: keyof ItemsType) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Projects = () => {
  const projectsData = getData("projects") as ItemType[];

  return (
    <section id="projects" className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>MY PROJECTS</h1>
        <div className={style.projects}>
          {/* print over the projects */}
          {projectsData.map((item) => (
            <div className={style.projects_item} key={item.id}>
              <div className={style.image_container}>
                <Image src={item.image} alt={item.image} fill={true} />
              </div>
              <div className={style.text_container}>
                <h1 className={style.projects_title}>{item.title}</h1>
                <small className={style.projects_date}>{item.date}</small>
                <p
                  className={style.projects_description}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></p>
                {item.cta && (
                  <div className={style.button_container}>
                    <Button
                      text={item.cta}
                      url={`https://` + item.cta}
                      target="_blank"
                      icon={<FaExternalLinkAlt />}
                    />{" "}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className={style.showall_button}>
            <TestButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
