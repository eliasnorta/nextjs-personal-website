import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import BlogPosts from "@/components/BlogPosts/BlogPosts";

export default async function Home() {
  const sections = [
    { label: "Projects", id: "projectsSection" },
    { label: "Skills", id: "skillsSection" },
    { label: "Contact", id: "contactSection" },
  ];

  return (
    <main>
      <Navbar sections={sections} />
      <Hero />
      {/* <BlogPosts /> */}
      <Projects id={sections[0].id} />
      {/* <Skills id={sections[1].id} /> */}
      {/*<Contact id={sections[2].id} /> */}
    </main>
  );
}
