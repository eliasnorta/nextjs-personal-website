import React from "react";
import style from "./BlogPosts.module.css";
import Link from "next/link";
import Image from "next/image";
import MotionWrapper from "../Animations/MotionWrapper";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// format date
function getToday(datestring: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}

export default async function BlogPosts({ id }: { id: string }) {
  const filenames = await fs.readdir(path.join(process.cwd(), "src/app/posts"));

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/app/posts", filename),
        "utf-8"
      );
      const { frontmatter } = await compileMDX<{
        title: string;
        time: String;
        published: string;
        level: string;
        type: string;
      }>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        filename,
        filename_slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    })
  );

  if (!posts) {
    return <div>404 Post not found :/</div>;
  }

  return (
    <MotionWrapper>
      <section id={id} className={style.container}>
        <div className={style.wrapper}>
          <h1 className={style.title}>BLOG POSTS</h1>
          <div className={style.posts}>
            {posts.map((post) => (
              <article className={style.post} key={post.filename}>
                <div className={style.post_container}>
                  <Link href={`/blog/${post.filename_slug}`}>
                    {/* <Image
                  src={post.properties.BannerImageUrl.rich_text[0].plain_text}
                  alt="Banner"
                  height={100}
                  width={100}
                /> */}
                    <p className={style.post_date}>
                      {getToday(post.published)}
                    </p>
                    <h3 className={style.post_title}>{post.title}</h3>
                    <h4 className={style.post_subtitle}>
                      {post.type} • {post.time}
                    </h4>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}
