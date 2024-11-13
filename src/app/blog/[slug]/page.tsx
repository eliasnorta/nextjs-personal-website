import React from "react";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Link from "next/link";
import SimpleNavbar from "@/components/NavBar/NavBar_simple";
// import "./tailwind.css";

export default async function Page({ params }: { params: { slug: string } }) {
  // require("./tailwind.css");
  const post = await fetchBySlug(params.slug);

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

  return (
    <>
      <SimpleNavbar />
      <section>
        <div>
          <Link href="/">Back</Link>
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
      </section>
    </>
  );
}
