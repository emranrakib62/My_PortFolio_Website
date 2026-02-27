import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import EducationTimeline from "../components/Education";
import Projects from "../components/Projects";
import AndroidSkills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <title>Emranul Hoque Portfolio</title>
      <Hero />
      <About />
 <AndroidSkills/>
      <EducationTimeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
