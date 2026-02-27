import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text mb-3 sm:mb-4">
            About My Journey
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#0f1612] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-green-900/30 mx-auto hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
        >
          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            Final-year BSc in CSE student at City University of Bangladesh with a strong focus on Android development.
Skilled in building user-friendly mobile applicaƟons using Java, Kotlin, Android SDK, MVVM architecture,
and Firebase. Successfully completed a hands-on internship at SkillrexTech, contribuƟng to real-world
projects. Proficient in RESTful API integraƟon using Retrofit, and passionate about creaƟng scalable and
efficient applicaƟons. Open to both remote and onsite opportuniƟes to contribute and grow as a mobile
developer.
          </p>

    

          {/* Call to Action */}
          <motion.a
            whileHover={{ x: 10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center text-green-400 font-semibold text-base sm:text-lg hover:text-green-300 transition-colors duration-300 mt-4"
          >
            Ready to collaborate! 
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
