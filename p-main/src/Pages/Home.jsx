import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import EducationTimeline from "../components/Education";
import Projects from "../components/Projects";
import AndroidSkills from "../components/Skills";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <title>Emranul Hoque Portfolio</title>
      <Hero />
      <About />
 <AndroidSkills/>
      <EducationTimeline />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
