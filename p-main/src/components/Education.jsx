import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const educationData = [
  {
    id: 1,
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    institute: "City University Bangladesh",
    years: "July 2022 – July 2026",
    status: "3.97 / 4.00",
    description: `Final-year B.Sc. in CSE student (CGPA: 3.97/4.00) with a primary focus on Flutter development.
Skilled in building cross-platform mobile applications using Dart, Firebase, and REST APIs.
Also experienced in native Android development (Java, Kotlin, MVVM).
Completed a hands-on internship at SkillrexTech working on real-world mobile projects.`,
  },


  {
    id: 2,
    title: "Higher Secondary School Certificate(HSC)",
    institute: "Ruposhi Bangla Collage",
    years: "July 2017 – 2019",
    status: "4.17 / 5.00",
    description: `Completed Higher Secondary Certificate (HSC) in Science with a GPA of 4.17/5.00.
Built a strong foundation in Mathematics, Physics, and ICT, which later inspired my interest in Computer Science.
Actively participated in academic and extracurricular activities.`,
  }
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm text-green-400">Education</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text mb-3 sm:mb-4">
            Educational Journey
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            My academic background and continuous pursuit of knowledge
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-6 sm:space-y-8"
        >
          {educationData.map((item, index) => (
            <div key={item.id}>
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-[#0f1612] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-green-900/30"
              >
                {/* Header with Icon */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 sm:p-3 bg-green-900/30 rounded-lg border border-green-500/20"
                  >
                    <FaGraduationCap className="text-xl sm:text-2xl md:text-3xl text-green-400" />
                  </motion.div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaUniversity className="text-green-500 text-sm sm:text-base" />
                      <p className="text-sm sm:text-base md:text-lg font-medium">{item.institute}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="divider my-3 sm:my-4 before:bg-green-900/30 after:bg-green-900/30"></div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* Years/Status */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-500/10">
                    <FaCalendarAlt className="text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Duration</p>
                      <p className="text-sm sm:text-base text-gray-300 font-semibold">{item.years}</p>
                    </div>
                  </div>

                  {/* GPA or Status */}
                  {item.gpa && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-500/10">
                      <FaAward className="text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">GPA</p>
                        <p className="text-sm sm:text-base text-gray-300 font-semibold">{item.gpa} out of 5.00</p>
                      </div>
                    </div>
                  )}

                  {item.status && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-500/10">
                      <FaAward className="text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Status</p>
                        <p className="text-sm sm:text-base text-gray-300 font-semibold">{item.status}</p>
                      </div>
                    </div>
                  )}

                  {/* Group */}
                  {item.group && (
                    <div className="flex items-center gap-2 sm:gap-3 bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-500/10">
                      <FaGraduationCap className="text-green-400 text-base sm:text-lg md:text-xl flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Group</p>
                        <p className="text-sm sm:text-base text-gray-300 font-semibold">{item.group}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="divider my-3 sm:my-4 before:bg-green-900/30 after:bg-green-900/30"></div>

                {/* Description */}
                <div className="mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>

              {/* Separator between cards (not after last item) */}
              {index < educationData.length - 1 && (
                <div className="flex items-center justify-center my-6 sm:my-8">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5 bg-gradient-to-b from-green-500 to-transparent"
                  ></motion.div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;
