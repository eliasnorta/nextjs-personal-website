import React from "react";
import style from "./BlogPosts.module.css";
import { fetchPages } from "@/lib/notion";
import Link from "next/link";

export default async function BlogPosts() {
  const posts = await fetchPages();

  return (
    <section>
      <h1>Blog Posts</h1>
      <ul className={style.posts}>
        {posts.results.map((post: any) => (
          <article key={post.id}>
            <Link
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
            >
              {post.properties.Title.title[0].plain_text}
            </Link>
          </article>
        ))}
      </ul>
    </section>
  );
}
