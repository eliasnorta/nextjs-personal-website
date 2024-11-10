import 'server-only'
import { Client } from '@notionhq/client'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from "react"

export const notion = new Client({
  auth: process.env.SECRET_NOTION_SECRET,
});

export const fetchPages = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.SECRET_NOTION_BLOG_DATABASE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Live',
      }
    }
  })
})

export const fetchBySlug = React.cache((slug: string) => {
  return notion.databases.query({
    database_id: process.env.SECRET_NOTION_BLOG_DATABASE_ID!,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      }
    }
  })
  .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children.list({
    block_id: pageId,
  })
  .then((res) => res.results as BlockObjectResponse[]);
})
