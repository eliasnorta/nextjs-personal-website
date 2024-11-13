import React from "react";
import style from "./BlogPosts.module.css";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import Image from "next/image";

// format date given by Notion
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
  const posts = await fetchPages();

  console.log("posts: " + posts);

  return (
    <section id={id} className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>BLOG POSTS</h1>
        <ul className={style.posts}>
          {posts.results.map((post: any) => (
            <article key={post.id}>
              <Link
                href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
              >
                <Image
                  src={post.properties.BannerImageUrl.rich_text[0].plain_text}
                  alt="Banner"
                  height={100}
                  width={100}
                />
                <h3>{post.properties.Title.title[0].plain_text}</h3>
                <p>{getToday(post.properties.Date.last_edited_time)}</p>
              </Link>
            </article>
          ))}
        </ul>
      </div>
    </section>
  );
}
