import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
import Navbar from "@/components/NavBar/Navbar";
import { sections } from "@/app/data";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
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
    title: `${frontmatter.title}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = "Hello world";

  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/posts", `${params.slug}.mdx`),
    "utf-8"
  );
  const data = await compileMDX<{
    title: string;
    time: String;
    published: string;
    level: string;
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
        {/* <div>
          <Link href="/">Back</Link>
          <Button text="Back" url="/" target="" />
        </div> */}
        <div className={style.content_wrapper}>
          <div className={style.title_area}>
            <div className={style.tags}>
              {/* {"multi_select" in post.properties.tags &&
                post.properties.tags.multi_select.map((tag: any) => (
                  <span key={tag.id}>{tag.name}</span>
                ))} */}
            </div>
            <div className={style.post_title}>{data.frontmatter.title}</div>
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
                <li className={style.level}>Level: {data.frontmatter.level}</li>
                <li className={style.published_time}>
                  Published:{" "}
                  {new Date(data.frontmatter.published).toLocaleDateString(
                    "en-US",
                    {
                      year: "2-digit",
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
