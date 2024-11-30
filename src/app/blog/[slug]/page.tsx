import React from "react";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Link from "next/link";
import SimpleNavbar from "@/components/NavBar/NavBar_simple";
// import "./tailwind.css";
import style from "./style.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";

export default async function Page({ params }: { params: { slug: string } }) {
  // require("./tailwind.css");
  const post = await fetchBySlug(params.slug);

  // console.log(JSON.stringify(post, null, 2));

  if (!post) {
    return <div>404 Post not found :/</div>;
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);
  let title = "Untitled";
  if ("rich_text" in post.properties.title) {
    title = post.properties.title.rich_text[0].plain_text;
  }

  return (
    <>
      <SimpleNavbar />
      <section className={style.container}>
        <div>
          <Link href="/">Back</Link>
          <Button text="Back" url="/" target="" />
        </div>
        <div className={style.content_wrapper}>
          <div className={style.title_area}>
            <div className={style.tags}>
              {"multi_select" in post.properties.tags &&
                post.properties.tags.multi_select.map((tag: any) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
            </div>
            <div className={style.post_title}>
              <h1>{title}</h1>
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
                  {"rich_text" in post.properties.time &&
                    post.properties.time.rich_text[0].plain_text}
                </li>
                <li className={style.level}>
                  Level:{" "}
                  {"rich_text" in post.properties.level &&
                    post.properties.level.rich_text[0].plain_text}
                </li>
                <li className={style.published_time}>
                  Published:{" "}
                  {new Date(post.created_time).toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "short",
                    day: "numeric",
                  })}
                </li>
              </ul>
            </div>
          </div>

          <div
            className={style.post_content}
            // className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </section>
    </>
  );
}
