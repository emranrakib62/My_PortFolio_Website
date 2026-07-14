import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const educationData = [
  {
    id: 1,
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    institute: "City University of Bangladesh",
    years: "July 2022 – July 2026",
    status: "CGPA: 3.97 / 4.00 — Batch Topper",
    description: [
      `Completed a B.Sc. in Computer Science and Engineering from City University of Bangladesh with a CGPA of 3.97 out of 4.00, graduating as the batch topper.
  Developed strong academic foundations in programming, data structures, algorithms, database systems, software engineering, and mobile application development.Developed a growing interest in Artificial Intelligence, intelligent systems, and applied computer science research.`,
    ],
  },
];

const EducationTimeline = () => {
  return (
    <section
      id="education"
      className="relative pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12"
    >
      {/* Background Decoration */}
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
          className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12 md:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-green-400">
              Education
            </span>
          </div>

          <h1 className="mb-3 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Educational Journey
          </h1>

          <p className="mx-auto max-w-2xl px-4 text-sm text-gray-400 sm:text-base md:text-lg">
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
                className="rounded-xl border border-green-900/30 bg-[#0f1612] p-4 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 sm:rounded-2xl sm:p-6 md:p-8"
              >
                {/* Header */}
                <div className="mb-4 flex flex-col items-start gap-3 sm:mb-6 sm:flex-row sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-lg border border-green-500/20 bg-green-900/30 p-2 sm:p-3"
                  >
                    <FaGraduationCap className="text-xl text-green-400 sm:text-2xl md:text-3xl" />
                  </motion.div>

                  <div className="w-full flex-1">
                    <h3 className="mb-1 text-xl font-bold text-green-400 sm:mb-2 sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-300">
                      <FaUniversity className="flex-shrink-0 text-sm text-green-500 sm:text-base" />
                      <p className="text-sm font-medium sm:text-base md:text-lg">
                        {item.institute}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-3 h-px w-full bg-green-900/30 sm:my-4" />

                {/* Details Grid */}
                <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-center gap-2 rounded-lg border border-green-500/10 bg-green-900/20 p-3 sm:gap-3 sm:p-4">
                    <FaCalendarAlt className="flex-shrink-0 text-base text-green-400 sm:text-lg md:text-xl" />

                    <div>
                      <p className="text-xs text-gray-500 sm:text-sm">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-gray-300 sm:text-base">
                        {item.years}
                      </p>
                    </div>
                  </div>

                  {item.status && (
                    <div className="flex items-center gap-2 rounded-lg border border-green-500/10 bg-green-900/20 p-3 sm:gap-3 sm:p-4">
                      <FaAward className="flex-shrink-0 text-base text-green-400 sm:text-lg md:text-xl" />

                      <div>
                        <p className="text-xs text-gray-500 sm:text-sm">
                          Academic Achievement
                        </p>
                        <p className="text-sm font-semibold text-gray-300 sm:text-base">
                          {item.status}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="my-3 h-px w-full bg-green-900/30 sm:my-4" />

                {/* Description */}
                <div className="mt-3 space-y-4 sm:mt-4">
                  {item.description.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-justify text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Separator */}
              {index < educationData.length - 1 && (
                <div className="my-6 flex items-center justify-center sm:my-8">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "3rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-0.5 bg-gradient-to-b from-green-500 to-transparent"
                  />
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