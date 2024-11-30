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

  if (!posts) {
    return <div>404 Post not found :/</div>;
  }

  // console.log("posts: " + posts);

  return (
    <section id={id} className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>BLOG POSTS</h1>
        <div className={style.posts}>
          {posts.results.map((post: any) => (
            <article className={style.post} key={post.id}>
              <div className={style.post_container}>
                <Link
                  href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                >
                  {/* <Image
                  src={post.properties.BannerImageUrl.rich_text[0].plain_text}
                  alt="Banner"
                  height={100}
                  width={100}
                /> */}
                  <p className={style.post_date}>
                    {getToday(post.properties.Date.last_edited_time)}
                  </p>
                  <h3 className={style.post_title}>
                    {post.properties.Title.title[0].plain_text}
                  </h3>
                  <h4 className={style.post_subtitle}>Tutorial • 5 min read</h4>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
