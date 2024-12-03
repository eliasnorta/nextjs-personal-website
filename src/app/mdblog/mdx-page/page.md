# How to deploy a website for free and jam stack

Date: November 7, 2024 7:06 PM
tags: #blog, #github, #webdev
BannerImageUrl: https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988762_1280.jpg
Status: Live
level: Beginner
slug: deploy-a-website-for-free
time: 5 min read
title: How to deploy your website for free

TL;DR:

- You can deploy static and dynamic websites using platforms GitHub pages, Vercel, or Netlify. The option I would recommend the most is GitHub
- If you are ready to spend a little, you can get a custom domain name and use it with your site.

---

### Prerequisites

- Have a basic understanding of Git and Github
- Handle basic HTML and CSS

### Getting started

You have just built a website. Next you ask: how can I get this site on the internet? There are a few options for getting your site out there to the world to see. All you have to do first is to build the website with your favorite tech stack. You can use plain HTML and CSS, or your favorite web framework like Next JS, Vue, or Svelte. 

If you are ready with your site then follow to the next step. In this blog we will look at three options for hosting your static or dynamic site for free.

```jsx
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
```

### GitHub Pages

This is by far the easiest solution. GitHub is the platform you probably use for hosting your code. You can also use their Pages service to host a website directly from your Github repository.

![https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb](https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)