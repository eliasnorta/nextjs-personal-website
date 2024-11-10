import React from "react";
import style from "./BlogPosts.module.css";
import { fetchPages } from "@/lib/notion";

export default async function BlogPosts() {
  const posts = await fetchPages();

  return (
    <section>
      <h1>Blog Posts</h1>
      <ul className={style.posts}>
        {posts.results.map((post: any) => (
          <article key={post.id}>
            <h2>{post.properties.Title.title[0].plain_text}</h2>
          </article>
        ))}
      </ul>
    </section>
  );
}
