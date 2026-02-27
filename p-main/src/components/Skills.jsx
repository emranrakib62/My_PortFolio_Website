import {
  FaAndroid,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import { 
  SiKotlin, 
  SiFlutter, 
  SiFirebase, 
   
  SiSqlite, 
  SiDart,
  SiJetpackcompose 
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

const skills = [
  { 
    name: "Kotlin & Java", 
    icon: SiKotlin, // Can alternate with FaJava
    level: 95,
    color: "#7F52FF",
    bgGradient: "from-[#7F52FF]/10 to-[#7F52FF]/5"
  },
  { 
    name: "Android SDK", 
    icon: FaAndroid, 
    level: 90,
    color: "#3DDC84",
    bgGradient: "from-[#3DDC84]/10 to-[#3DDC84]/5"
  },
  { 
    name: "MVVM & Architecture", 
    icon: SiJetpackcompose, 
    level: 85,
    color: "#4285F4",
    bgGradient: "from-[#4285F4]/10 to-[#4285F4]/5"
  },
  { 
    name: "Firebase Suite", 
    icon: SiFirebase, 
    level: 90,
    color: "#FFCA28",
    bgGradient: "from-[#FFCA28]/10 to-[#FFCA28]/5"
  },
  { 
    name: "APIs & Retrofit", 
    icon: SiFirebase, 
    level: 85,
    color: "#00BFA5",
    bgGradient: "from-[#00BFA5]/10 to-[#00BFA5]/5"
  },
  { 
    name: "Flutter & Dart", 
    icon: SiFlutter, 
    level: 80,
    color: "#02569B",
    bgGradient: "from-[#02569B]/10 to-[#02569B]/5"
  },
  { 
    name: "Room & SQLite", 
    icon: SiSqlite, 
    level: 85,
    color: "#003B57",
    bgGradient: "from-[#003B57]/10 to-[#003B57]/5"
  },
  { 
    name: "Git & Version Control", 
    icon: FaGitAlt, 
    level: 90,
    color: "#F05032",
    bgGradient: "from-[#F05032]/10 to-[#F05032]/5"
  },
  { 
    name: "UI/UX & Figma", 
    icon: FaFigma, 
    level: 75,
    color: "#F24E1E",
    bgGradient: "from-[#F24E1E]/10 to-[#F24E1E]/5"
  },
];

const AndroidSkills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative bg-[#050806]">
      {/* Background decoration: Android Green Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#3DDC84]/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3DDC84]/10 rounded-full mb-6 border border-[#3DDC84]/20">
            <span className="w-2 h-2 bg-[#3DDC84] rounded-full animate-ping"></span>
            <span className="font-mono text-sm text-[#3DDC84] uppercase tracking-widest">Technical Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#3DDC84] via-emerald-400 to-[#00BFA5] text-transparent bg-clip-text mb-6">
            Building Robust Mobile Experiences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Specializing in native Android development with a focus on clean architecture, 
            reactive programming, and seamless cloud integration.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 }
                }}
                className="group bg-[#0d120f] p-8 rounded-2xl border border-white/5 hover:border-[#3DDC84]/30 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <IconComponent 
                        className="text-4xl transition-transform duration-500 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-black text-white/20 group-hover:text-[#3DDC84]/40 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-[#3DDC84] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Modern Progress Bar */}
                  <div className="relative w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note / Familiar With */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 text-center p-8 rounded-3xl border border-dashed border-white/10"
        >
            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Also Proficient In</h4>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                {["ML Kit", "Neumorphism", "Push Notifications", "PHP", "Animations", "RESTful APIs"].map((item) => (
                    <span key={item} className="px-4 py-1.5 bg-white/5 rounded-full text-sm border border-white/5">
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AndroidSkills;