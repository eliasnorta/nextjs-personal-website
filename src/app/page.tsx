import Projects from "@/components/Projects/Projects";
import styles from "./page.module.css";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
