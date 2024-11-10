"use client";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/NavBar/Navbar";
import { useRef } from "react";
import { fetchPages } from "@/lib/notion";

export default async function Home() {
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);
  const contactSection = useRef(null);

  const sections = [
    { label: "Projects", ref: projectsSection },
    { label: "Skills", ref: skillsSection },
    { label: "Contact", ref: contactSection },
  ];

  // const posts = await fetchPages();

  return (
    <main>
      <Navbar sections={sections} />
      <Hero />
      <Projects ref={projectsSection} />
      <Skills ref={skillsSection} />
      <Contact ref={contactSection} />
    </main>
  );
}
