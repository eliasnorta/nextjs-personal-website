import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { sections } from "./data";

export default async function Home() {
  return (
    <main>
      <Navbar sections={sections} />
      <Hero />
      <BlogPosts id={sections[0].id} />
      <Projects id={sections[1].id} />
      <Skills id={sections[2].id} />
      <Contact id={sections[3].id} />
    </main>
  );
}
