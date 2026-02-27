import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "../utils/animations";

const projectData = [
  {
    id: 1,
    title: "University Management Systsem app",
    description: "A smart time‑capsule app built for Android devices. Features secure local storage and scheduled notifications to remind users of precious memories.",
    tags: ["Android SDK", "Java", "SQLite", "Room DB"],

    image: 
        "/images/memorybox-2.jpg", 
        
    github: "https://github.com/emranrakib62/city_university_management_system_App",
    video: "https://www.youtube.com/shorts/5Zgj9Z6TJP4",
    isFeatured: true,
  },
  {
    id: 2,
    title: "MoodSketch App",
    description: "Offline mood‑based sketch drawing app. Utilizes custom canvas views and Neumorphic UI elements for a relaxing creative experience.",
    tags: ["Kotlin", "Custom Views", "MVVM", "Figma"],
    image: "/images/mood1.png",
    github: "https://github.com/yourrepo2",
    video: "https://youtube.com/watch?v=demo2",
    isFeatured: false,
  },


{
    id: 3,
    title: "MemoryBox App",
    description: "A smart time‑capsule app built for Android devices. Features secure local storage and scheduled notifications to remind users of precious memories.",
    tags: ["Android SDK", "Java", "SQLite", "Room DB"],
    // Use the first image from your array as the cover
    image: "/images/app1.png", 
    github: "https://github.com/yourrepo",
    video: "https://youtube.com/watch?v=demo",
    isFeatured: false,
  },
  {
    id: 4,
    title: "MoodSketch App",
    description: "Offline mood‑based sketch drawing app. Utilizes custom canvas views and Neumorphic UI elements for a relaxing creative experience.",
    tags: ["Kotlin", "Custom Views", "MVVM", "Figma"],
    image: "/images/mood1.png",
    github: "https://github.com/yourrepo2",
    video: "https://youtube.com/watch?v=demo2",
    isFeatured: false,
  },



{
    id: 5,
    title: "MemoryBox App",
    description: "A smart time‑capsule app built for Android devices. Features secure local storage and scheduled notifications to remind users of precious memories.",
    tags: ["Android SDK", "Java", "SQLite", "Room DB"],
    // Use the first image from your array as the cover
    image: "/images/app1.png", 
    github: "https://github.com/yourrepo",
    video: "https://youtube.com/watch?v=demo",
    isFeatured: false,
  },
  {
    id: 6,
    title: "MoodSketch App",
    description: "Offline mood‑based sketch drawing app. Utilizes custom canvas views and Neumorphic UI elements for a relaxing creative experience.",
    tags: ["Kotlin", "Custom Views", "MVVM", "Figma"],
    image: "/images/mood1.png",
    github: "https://github.com/yourrepo2",
    video: "https://youtube.com/watch?v=demo2",
    isFeatured: false,
  },



];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-[#0d120f] rounded-2xl shadow-lg hover:shadow-green-500/10 transition-all duration-300 relative flex flex-col h-full border border-white/5 overflow-hidden"
    >
      {/* Project Image & Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d120f] via-transparent to-transparent opacity-80" />
        
        {project.isFeatured && (
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-full bg-[#3DDC84] text-black">
            Featured Project
          </span>
        )}

        {/* Action Buttons on Image Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-[#3DDC84] hover:text-black rounded-full transition-all"
            title="View Code"
          >
            <FaGithub size={20} />
          </a>
          {project.video && (
            <a 
              href={project.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-red-500 hover:text-white rounded-full transition-all"
              title="Watch Demo"
            >
              <FaYoutube size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-white group-hover:text-[#3DDC84] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[11px] font-semibold py-1 px-2 rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-[#3DDC84]/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#050806]">
      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3DDC84]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3DDC84]/10 rounded-full mb-4 border border-[#3DDC84]/20">
            <span className="w-1.5 h-1.5 bg-[#3DDC84] rounded-full animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#3DDC84] uppercase tracking-tighter">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent Mobile <span className="text-[#3DDC84]">Inventions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From architecture to deployment, here are the mobile applications 
            I've built using modern Android frameworks.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;