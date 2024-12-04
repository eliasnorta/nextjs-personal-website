import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
import Navbar from "@/components/NavBar/Navbar";
import { sections } from "@/app/data";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/posts", `${params.slug}.mdx`),
    "utf-8"
  );
  const { frontmatter } = await compileMDX<{ title: string }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${frontmatter.title} - Blog | Elias Norta`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<{
    title: string;
    time: String;
    published: string;
    level: string;
    tags: any;
  }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <>
      <Navbar sections={sections} />
      <section className={style.container}>
        <div className={style.back_button}>
          <Link href="/">&lt; Back</Link>
          {/* <Button text="Back" url="/" target="" /> */}
        </div>
        <div className={style.content_wrapper}>
          <div className={style.title_area}>
            <div className={style.tags}>
              <ul>
                {data.frontmatter.tags.map((tag: string) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>
            <div className={style.post_title}>
              <h1>{data.frontmatter.title}</h1>
            </div>
            <div className={style.post_subtags}>
              <ul>
                <li className={style.read_time}>
                  <Image
                    src="/clock-svgrepo-com.svg"
                    alt="clock_icon"
                    width={15}
                    height={15}
                  />
                  {data.frontmatter.time}
                </li>
                <li
                  className={`${style.level} ${
                    data.frontmatter.level === "Beginner"
                      ? style.beginner
                      : data.frontmatter.level === "Intermediate"
                      ? style.intermediate
                      : ""
                  }`}
                >
                  Level: {data.frontmatter.level}
                </li>
                <li className={style.published_time}>
                  Published:{" "}
                  {new Date(data.frontmatter.published).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className={style.post_content}>{data.content}</div>
        </div>
      </section>
    </>
  );
}
