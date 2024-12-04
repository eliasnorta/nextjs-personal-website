"use client";
import React from "react";
import { items } from "../../app/data.js";
import { notFound } from "next/navigation";
import style from "./projects.module.css";
import Image from "next/image.js";
import Button from "../Button/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import MotionWrapper from "../Animations/MotionWrapper";
import MotionProjectItem from "../Animations/projects/MotionProjectsItem";

// declaring types for projects data that is mapped
type ItemType = {
  id: number;
  title: string;
  date: number;
  image: any;
  desc: string;
  cta_link: string;
  cta_label: string;
};

type ItemsType = {
  projects: ItemType[];
};
// getting data from js file
const getData = (cat: keyof ItemsType) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  // if no data found, show not found
  return notFound();
};

function Projects({ id }: { id: string }) {
  const projectsData = getData("projects") as ItemType[];

  return (
    <MotionWrapper>
      <section id={id} className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>MY PROJECTS</h1>
          <div className={style.projects}>
            {/* print over the projects */}
            {projectsData.map((item) => (
              <MotionProjectItem className={style.projects_item} key={item.id}>
                <div className={style.image_container}>
                  <Image src={item.image} alt={item.image} fill={true} />
                </div>
                <div className={style.text_container}>
                  <div>
                    <h1 className={style.projects_title}>{item.title}</h1>
                    {/* <small className={style.projects_date}>{item.date}</small> */}
                    <p
                      className={style.projects_description}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    ></p>
                  </div>
                  <div>
                    {item.cta_link && (
                      <div className={style.button_container}>
                        <Button
                          text={item.cta_label}
                          url={`https://` + item.cta_link}
                          target="_blank"
                          icon={<FaExternalLinkAlt />}
                        />{" "}
                      </div>
                    )}
                  </div>
                </div>
              </MotionProjectItem>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}

Projects.displayName = "Projects";

export default Projects;
