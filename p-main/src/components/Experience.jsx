import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const experienceData = [
  {
    id: 1,
    role: "Android Developer Intern",
    company: "SkillrexTech",
    location: "Remote ",
    duration: "2 Months",
    description: [
      "Assisted in developing native Android applications using Kotlin and Java with a focus on modern UI/UX.",
      "Gained hands-on experience with MVVM architecture, Retrofit for API integration, and Firebase services.",
      "Collaborated with the development team to debug and optimize application performance for better user experience.",
      "Participated in code reviews and implemented clean coding standards."
    ]
  },
  {
    id: 2,
    role: "ICT Instructor-HSC Level",
    company: "Coaching Center",
    location: "Online/Offline",
    duration: "2022 - 2024 (2 Years)",
    description: [
      "Instructed HSC students on ICT subjects, focusing on Programming (C), HTML, and Digital Logic Gate.",
      "Developed comprehensive lesson plans and practical lab sessions to simplify complex computer science concepts.",
      "Mentored over 100+ students, resulting in significant improvements in their academic performance and technical skills.",
      "Organized regular workshops on basic web development and computer hardware fundamentals."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24 relative overflow-hidden bg-[#0a0f0d]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400 uppercase tracking-wider">My Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text mb-4">
            Professional Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            A blend of academic instruction and hands-on software development experience.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {experienceData.map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-[#0f1612] rounded-2xl p-6 sm:p-8 md:p-10 border border-green-900/30 hover:border-green-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-900/30 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                      <FaBriefcase className="text-xl sm:text-2xl" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-gray-400 ml-1">
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                      <FaBuilding className="text-green-500" /> {item.company}
                    </span>
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                      <FaMapMarkerAlt className="text-green-500" /> {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-green-400 bg-green-900/20 px-4 py-2 rounded-full border border-green-500/20 self-start">
                  <FaCalendarAlt className="text-sm" />
                  <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">{item.duration}</span>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="h-px w-full bg-gradient-to-r from-green-900/50 via-green-500/20 to-transparent my-6"></div>

              {/* Responsibilities List */}
              <ul className="grid grid-cols-1 gap-4">
                {item.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-400 group/item">
                    <div className="mt-1.5">
                      <FaCheckCircle className="text-green-500 text-sm flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed group-hover/item:text-gray-200 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;