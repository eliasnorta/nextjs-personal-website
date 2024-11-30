export const items = {
  projects: [
    {
      id: 1,
      image: "/projects/finkickz_banner.png",
      title: "Finkickz",
      date: 2023,
      desc: `An ecommerce platform for buying and selling limited edition sneakers in Finland.`,

      cta: "finkickz.com",
    },
    {
      id: 2,
      image: "/projects/ZOF_BANNER_2.png",
      title: "Zone of War",
      date: 2022,
      desc: `An action-packed first-person shooter and strategy game! Shoot and battle in different worlds and find your way back to your crew.

      Visit the Steam page <a href="https://store.steampowered.com/app/1488000/Zone_Of_War/" target="_blank" rel="noopener noreferrer nofollow" style="text-decoration:underline; color: royalblue;">here</a>.`,
      cta: "zoneofwar.com",
    },
    // {
    //   id: 3,
    //   image: "/projects/thumbnail_Taitaja2023.png",
    //   title: "Taitaja 2023 Web-Dev",
    //   date: 2023,
    //   desc: `I participated in the Taitaja 2023 Web-dev semiginal competition.`,
    //   cta: "taitaja2023.fi",
    // },
    // {
    //   id: 4,
    //   image: "/projects/webstore_home-design.png",
    //   title: "React e-commerce",
    //   date: 2020,
    //   desc: `An Amazon-like e-commerce store built using React.

    //   The website includes functionalities such as adding products to cart, private routing and login functionality with Firebase. Using react router v6.
      
    //   Visit the GitHub repository <a href="/" target="_blank" rel="noopener noreferrer nofollow" style="text-decoration:underline; color: royalblue;">here</a>.`,
    // },
  ],
  skills: {
    frameworks: [
      {
        id: 1,
        name: "React.JS",
        icon: "/skills/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        icon: "/skills/nextjs.svg",
      },
      {
        id: 3,
        name: "jQuery",
        icon: "/skills/jquery.svg",
      },
      {
        id: 4,
        name: "Flutter",
        icon: "/skills/flutter.svg",
      },
    ],
    languages: [
      {
        id: 1,
        name: "HTML",
        icon: "/skills/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        icon: "/skills/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: "/skills/javascript.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        icon: "/skills/typescript.svg",
      },
      {
        id: 5,
        name: "Python",
        icon: "/skills/python.svg",
      },
      {
        id: 6,
        name: "PHP",
        icon: "/skills/php.svg",
      },
      {
        id: 7,
        name: "Java",
        icon: "/skills/java.svg",
      },
      {
        id: 8,
        name: "C#",
        icon: "/skills/c-sharp.svg",
      },
      {
        id: 9,
        name: "Dart",
        icon: "/skills/dart.svg",
      },
    ],
    otherSkills: [
      {
        id: 1,
        name: "Git",
        icon: "/skills/git.svg",
      },
      {
        id: 2,
        name: "SQL",
        icon: "/skills/sql.svg",
      },
      {
        id: 4,
        name: "Wordpress",
        icon: "/skills/wordpress.svg",
      },
      {
        id: 3,
        name: "Figma",
        icon: "/skills/figma.svg",
      },
      
    ],
  },
};

// items.projects.forEach((project) => {
//   project.desc = project.desc.replace(/\n/g, "<br>");
// });
